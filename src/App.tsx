import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/core/ErrorBoundary";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteFooter } from "./components/SiteFooter";
import ScrollToTop from "./components/core/ScrollToTop";
// import { SiteHeader } from "./components/SiteHeader";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import Lab from "./pages/Lab";

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
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
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
            {/* <SiteHeader /> */}

            <main>
              <ScrollToTop />
              <Suspense
                fallback={
                  <div className="min-h-screen flex flex-col items-center justify-center bg-black gap-8">
                    {/* <div className="text-primary font-bold text-6xl tracking-tight font-['Bricolage_Grotesque']">
                    Charmel Tobou
                  </div> */}
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/lab" element={<Lab />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* <Route path="/about" element={<AboutPage />} /> */}
                </Routes>
              </Suspense>
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
      {/* <LanguageProvider> */}
      <Router>
        <AppContent />
      </Router>
      {/* </LanguageProvider> */}
    </ErrorBoundary>
  );
};

export default App;
