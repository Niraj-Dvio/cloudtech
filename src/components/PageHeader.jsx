import { motion } from "framer-motion";

export default function PageHeader({ title, children }) {
  return (
    <div
      className="
        w-full text-center
        p-8 md:p-10
        rounded-3xl
        border border-white/20
        bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.15),rgba(255,255,255,0.05))]
        transition-all duration-1000 ease-out
        my-12 cursor-target
      "
    >
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h1>

      {/* Body Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        className="mt-4 text-lg text-white/70"
      >
        {children}
      </motion.div>
    </div>
  );
}
