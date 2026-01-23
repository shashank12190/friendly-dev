import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {/* <section className="max-w-6xl mx-auto px-6 my-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet /> 
          </motion.div>
        </AnimatePresence>
      </section> */}
      <section className="max-w-6xl mx-auto px-6 my-8 transition-opacity duration-300 ease-in-out">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
