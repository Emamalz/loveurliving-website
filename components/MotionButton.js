// components/MotionButton.js
import { motion } from "framer-motion"
import Link from "next/link"

export default function MotionButton({ href, children, variant = "primary" }) {
  const baseStyles =
    "inline-block px-6 py-3 font-semibold rounded-lg transition"
  const variants = {
    primary:
      "bg-[#D4A373] text-white shadow-md hover:bg-[#C49E7F] hover:shadow-lg",
    secondary:
      "border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </Link>
    </motion.div>
  )
}
