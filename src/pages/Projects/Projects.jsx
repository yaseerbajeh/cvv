import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <section className="text-white w-full bg-slate-950 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Personal projects will be updated soon
            </h2>
          </motion.div>
        </section>
      </main>
    </ReactLenis>
  );
}