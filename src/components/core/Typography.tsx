import { cn } from "../../lib/utils";

/**
 * Typography Components
 * Reusable text components with built-in responsive sizing
 * Copy this file to any project for consistent typography
 *
 * Usage:
 *   <Heading>Mon Titre</Heading>
 *   <Text>Mon contenu</Text>
 */

// ============================================
// HEADING - Titres responsives automatiques
// ============================================

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  style?: React.CSSProperties;
}

export function Heading({
  children,
  className,
  as: Component = "h2",
  style,
}: HeadingProps) {
  return (
    <Component
      style={style}
      className={cn(
        // Responsive font sizes
        "text-5xl",      // base (mobile)
        // "sm:text-4xl",   // ≥640px
        "md:text-5xl",   // ≥768px
        "lg:text-6xl",   // ≥1024px
        "xl:text-7xl",   // ≥1280px
        "2xl:text-9xl",  // ≥1536px (120px)
        // Base styles (same as .display-xl)
        "font-display leading-[0.9] tracking-[-0.045em]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// TEXT - Contenu responsive automatique
// ============================================

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div" | "label";
  style?: React.CSSProperties;
}

export function Text({
  children,
  className,
  as: Component = "p",
  style,
}: TextProps) {
  return (
    <Component
      style={style}
      className={cn(
        // Responsive font sizes
        "text-base",       // base (mobile)
        "sm:text-base",  // ≥640px
        "md:text-lg",    // ≥768px
        "lg:text-lg",    // ≥1024px
        "2xl:text-xl",    // ≥1280px
        // "2xl:text-xl",  // ≥1536px
        // Base styles
        "leading-relaxed",
        className
      )}
    >
      {children}
    </Component>
  );
}
