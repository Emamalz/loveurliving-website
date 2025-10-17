import Link from "next/link"
import { useState, useEffect } from "react"
import { Wrench, Home, Droplets, Flame, Layers, Hammer, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const y = window.pageYOffset
      setHidden(y > lastY && y > 100)
      setAtTop(y <= 0)
      setLastY(y)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastY])

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#0a1a2f]/95 backdrop-blur-md shadow-md z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a>
            <img
              src="/images/logo.png"
              srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
              alt="Love Ur Living Logo"
              className={`object-contain transition-all duration-300 ${
                atTop ? "h-20 md:h-24 w-auto" : "h-14 md:h-16 w-auto"
              }`}
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-white">
          {/* Services Dropdown */}
          <div className="group relative">
            <button className="px-2 font-medium hover:text-[#D4A373] transition flex items-center gap-1">
              Services ▾
            </button>
            <div className="absolute left-0 mt-3 w-[500px] bg-[#10233f] border border-[#D4A373]/40 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="grid grid-cols-2 gap-4 p-6 text-white">
                <NavItem href="/services/extensions" icon={<Layers />} title="House Extensions" desc="Bespoke extensions that add space & value" />
                <NavItem href="/services/loft" icon={<Home />} title="Loft Conversions" desc="Dormer, mansard & hip-to-gable loft specialists" />
                <NavItem href="/services/kitchens-bathrooms" icon={<Droplets />} title="Kitchens & Bathrooms" desc="Luxury remodels with modern finishes" />
                <NavItem href="/services/roofing" icon={<Home />} title="Roofing" desc="Durable, weatherproof roofing built to last" />
                <NavItem href="/services/plastering" icon={<Wrench />} title="Plastering & Finishes" desc="Smooth walls & decorative textures" />
                <NavItem href="/services/heating" icon={<Flame />} title="Heating & Smart Controls" desc="Energy-efficient smart systems" />
                <NavItem href="/services/ceilings" icon={<Hammer />} title="Dropped Ceilings" desc="Elegant ceiling designs with lighting" />
                <NavItem href="/services/full-renovations" icon={<Layers />} title="Full Renovations" desc="Complete refurbishments from start to finish" />
              </div>
            </div>
          </div>

          <Link href="/#gallery" className="hover:text-[#D4A373] transition">Gallery</Link>
          <Link href="/#about" className="hover:text-[#D4A373] transition">About</Link>
          <Link href="/#booking" className="btn-primary ml-4 bg-[#D4A373] text-white hover:bg-[#C49E7F]">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#0a1a2f] text-white shadow-2xl z-50 p-6 flex flex-col space-y-6"
          >
            <button className="self-end p-2" onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </button>

            <div>
              <p className="font-semibold mb-2">Services</p>
              <ul className="space-y-3 pl-2">
                <li><Link href="/services/extensions" onClick={() => setMobileOpen(false)}>House Extensions</Link></li>
                <li><Link href="/services/loft" onClick={() => setMobileOpen(false)}>Loft Conversions</Link></li>
                <li><Link href="/services/kitchens-bathrooms" onClick={() => setMobileOpen(false)}>Kitchen & Bathroom Remodelling</Link></li>
                <li><Link href="/services/roofing" onClick={() => setMobileOpen(false)}>Roofing & Emergency Repairs</Link></li>
                <li><Link href="/services/plastering" onClick={() => setMobileOpen(false)}>Plastering & Decorative Finishes</Link></li>
                <li><Link href="/services/heating" onClick={() => setMobileOpen(false)}>Underfloor Heating & Smart Controls</Link></li>
                <li><Link href="/services/ceilings" onClick={() => setMobileOpen(false)}>Dropped Ceiling Designs</Link></li>
                <li><Link href="/services/full-renovations" onClick={() => setMobileOpen(false)}>Full Property Renovations</Link></li>
              </ul>
            </div>

            <Link href="/#gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/#booking" className="btn-primary bg-[#D4A373] text-white hover:bg-[#C49E7F]" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ href, icon, title, desc }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#D4A373]/20 transition">
        <div className="text-[#D4A373]">{icon}</div>
        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
      </a>
    </Link>
  )
}
