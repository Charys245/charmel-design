#!/usr/bin/env node

/**
 * =============================================================================
 * IMAGE OPTIMIZER SCRIPT
 * =============================================================================
 *
 * Converts images to WebP format and resizes them for optimal web performance.
 * Reusable across any project.
 *
 * USAGE:
 *   pnpm optimize-images [options]
 *
 * OPTIONS:
 *   --input, -i     Input directory (default: src/assets/images)
 *   --output, -o    Output directory (default: same as input)
 *   --max-width     Maximum width in pixels (default: 1920)
 *   --quality       WebP quality 1-100 (default: 80)
 *   --backup        Keep original files with .backup extension (default: false)
 *   --dry-run       Show what would be done without doing it (default: false)
 *   --help, -h      Show this help message
 *
 * EXAMPLES:
 *   pnpm optimize-images
 *   pnpm optimize-images --max-width 1200 --quality 85
 *   pnpm optimize-images --input ./public/images --backup
 *   pnpm optimize-images --dry-run
 *
 * =============================================================================
 */

import sharp from 'sharp';
import { readdir, stat, rename, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');

// Default configuration
const DEFAULT_CONFIG = {
  input: 'src/assets/images',
  output: null, // null = same as input
  maxWidth: 1920,
  quality: 80,
  backup: false,
  dryRun: false,
};

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff'];

// Parse command line arguments
function parseArgs(args) {
  const config = { ...DEFAULT_CONFIG };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];

    switch (arg) {
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
      case '--input':
      case '-i':
        config.input = nextArg;
        i++;
        break;
      case '--output':
      case '-o':
        config.output = nextArg;
        i++;
        break;
      case '--max-width':
        config.maxWidth = parseInt(nextArg, 10);
        i++;
        break;
      case '--quality':
        config.quality = parseInt(nextArg, 10);
        i++;
        break;
      case '--backup':
        config.backup = true;
        break;
      case '--dry-run':
        config.dryRun = true;
        break;
    }
  }

  return config;
}

function printHelp() {
  console.log(`
  IMAGE OPTIMIZER - Convert and resize images for web

  Usage: pnpm optimize-images [options]

  Options:
    --input, -i <dir>     Input directory (default: src/assets/images)
    --output, -o <dir>    Output directory (default: same as input)
    --max-width <px>      Maximum width in pixels (default: 1920)
    --quality <1-100>     WebP quality (default: 80)
    --backup              Keep original files with .backup extension
    --dry-run             Preview changes without applying them
    --help, -h            Show this help message

  Examples:
    pnpm optimize-images
    pnpm optimize-images --max-width 1200 --quality 85
    pnpm optimize-images --input ./public/images --backup
  `);
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Get all image files recursively
async function getImageFiles(dir) {
  const files = [];

  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (SUPPORTED_FORMATS.includes(ext) && !entry.name.includes('.backup')) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return files;
}

// Optimize a single image
async function optimizeImage(inputPath, config) {
  const ext = extname(inputPath).toLowerCase();
  const name = basename(inputPath, ext);
  const dir = config.output || dirname(inputPath);
  const outputPath = join(dir, `${name}.webp`);

  try {
    // Get original file stats
    const originalStats = await stat(inputPath);
    const originalSize = originalStats.size;

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;

    // Calculate new dimensions
    let newWidth = originalWidth;
    let newHeight = originalHeight;

    if (originalWidth > config.maxWidth) {
      newWidth = config.maxWidth;
      newHeight = Math.round((originalHeight / originalWidth) * config.maxWidth);
    }

    const result = {
      input: inputPath,
      output: outputPath,
      originalSize,
      originalDimensions: `${originalWidth}x${originalHeight}`,
      newDimensions: `${newWidth}x${newHeight}`,
      resized: originalWidth > config.maxWidth,
      skipped: false,
    };

    if (config.dryRun) {
      result.newSize = '(dry-run)';
      result.savings = '(dry-run)';
      return result;
    }

    // Process image
    let pipeline = sharp(inputPath);

    // Resize if needed
    if (originalWidth > config.maxWidth) {
      pipeline = pipeline.resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: config.quality })
      .toFile(outputPath);

    // Get new file stats
    const newStats = await stat(outputPath);
    result.newSize = newStats.size;
    result.savings = originalSize - newStats.size;
    result.savingsPercent = ((result.savings / originalSize) * 100).toFixed(1);

    // Backup original if requested
    if (config.backup && inputPath !== outputPath) {
      const backupPath = `${inputPath}.backup`;
      await rename(inputPath, backupPath);
    }

    return result;
  } catch (error) {
    return {
      input: inputPath,
      error: error.message,
      skipped: true,
    };
  }
}

// Main function
async function main() {
  const args = process.argv.slice(2);
  const config = parseArgs(args);

  console.log('\n========================================');
  console.log('       IMAGE OPTIMIZER');
  console.log('========================================\n');

  if (config.dryRun) {
    console.log('  MODE: Dry run (no changes will be made)\n');
  }

  console.log('  Configuration:');
  console.log(`    Input:     ${config.input}`);
  console.log(`    Output:    ${config.output || '(same as input)'}`);
  console.log(`    Max width: ${config.maxWidth}px`);
  console.log(`    Quality:   ${config.quality}%`);
  console.log(`    Backup:    ${config.backup ? 'Yes' : 'No'}`);
  console.log('');

  const inputDir = join(ROOT_DIR, config.input);

  // Create output directory if different from input
  if (config.output) {
    const outputDir = join(ROOT_DIR, config.output);
    await mkdir(outputDir, { recursive: true });
  }

  // Get all image files
  console.log('  Scanning for images...\n');
  const files = await getImageFiles(inputDir);

  if (files.length === 0) {
    console.log('  No images found!\n');
    return;
  }

  console.log(`  Found ${files.length} image(s)\n`);
  console.log('----------------------------------------\n');

  // Process each image
  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const relativePath = file.replace(ROOT_DIR + '/', '');
    console.log(`  Processing: ${relativePath}`);

    const result = await optimizeImage(file, config);

    if (result.skipped) {
      console.log(`    SKIPPED: ${result.error}\n`);
      skipped++;
      continue;
    }

    processed++;

    if (!config.dryRun) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }

    console.log(`    Original:   ${formatBytes(result.originalSize)} (${result.originalDimensions})`);
    console.log(`    Optimized:  ${config.dryRun ? '(dry-run)' : formatBytes(result.newSize)} (${result.newDimensions})`);

    if (!config.dryRun) {
      console.log(`    Saved:      ${formatBytes(result.savings)} (${result.savingsPercent}%)`);
    }

    if (result.resized) {
      console.log(`    Resized:    Yes`);
    }

    console.log('');
  }

  // Summary
  console.log('----------------------------------------');
  console.log('  SUMMARY');
  console.log('----------------------------------------\n');
  console.log(`  Processed: ${processed} image(s)`);
  console.log(`  Skipped:   ${skipped} image(s)`);

  if (!config.dryRun && processed > 0) {
    const totalSavings = totalOriginal - totalNew;
    const savingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);

    console.log('');
    console.log(`  Original total:  ${formatBytes(totalOriginal)}`);
    console.log(`  Optimized total: ${formatBytes(totalNew)}`);
    console.log(`  Total saved:     ${formatBytes(totalSavings)} (${savingsPercent}%)`);
  }

  console.log('\n========================================\n');

  if (!config.dryRun) {
    console.log('  IMPORTANT: Update your imports to use .webp files!');
    console.log('  Example: import photo from "./photo.webp"\n');
  }
}

main().catch(console.error);
