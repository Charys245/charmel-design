import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/core/ErrorBoundary";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteFooter } from "./components/SiteFooter";
import ScrollToTop from "./components/core/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { LanguageProvider } from "./i18n/LanguageContext";
import { SiteHeader } from "./components/SiteHeader";

// export const Route = createRootRoute({
//   head: () => ({
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { title: "Lovable App" },
//       { name: "description", content: "Lovable Generated Project" },
//       { name: "author", content: "Lovable" },
//       { property: "og:title", content: "Lovable App" },
//       { property: "og:description", content: "Lovable Generated Project" },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary" },
//       { name: "twitter:site", content: "@Lovable" },
//     ],
//     links: [
//       {
//         rel: "stylesheet",
//         href: appCss,
//       },
//     ],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
// });

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const location = useLocation();

  useEffect(() => {
    // Simulate initial asset loading for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-yellow selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-primary font-bold text-3xl md:text-6xl  tracking-tight [0.2em] uppe rcase font-['Bricolage_Grotesque']"
            >
              Charmel Tobou
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SiteHeader />

            <main>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <SiteFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <Router>
            <AppContent />
          </Router>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
