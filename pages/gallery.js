import Head from "next/head"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const galleryImages = [
  { src: "/images/livingroom.png", alt: "Living Room Feature", desc: "Bright living room transformed with bespoke shelving and handcrafted crown molding." },
  { src: "/images/kitchenblue.png", alt: "Blue Kitchen Design", desc: "Signature blue shaker kitchen complete with quartz countertops and under-cabinet lighting." },
  { src: "/images/alms.jpg", alt: "Open Plan", desc: "Seamless open-plan living—walls removed to create an airy, family-friendly hub." },
  { src: "/images/wall2.jpg", alt: "Feature Wall", desc: "Custom Venetian plaster feature wall, adding warmth and texture to any space." },
  { src: "/images/kitchensmall.png", alt: "Compact Kitchen Layout", desc: "Maximised a small footprint for a fully-equipped galley kitchen with hidden storage." },
  { src: "/images/bathroomsmall.png", alt: "Cozy Bathroom Remodel", desc: "Tiny bathroom makeover—marble tile, brass fixtures, and frameless glass for luxury." },
  { src: "/images/bath.jpg", alt: "Modern Kitchen Island", desc: "Built-in kitchen island with integrated breakfast bar and storage solutions." },
  { src: "/images/bathroombig.png", alt: "Spacious Marble Bathroom", desc: "Luxurious marble-clad bathroom featuring a freestanding tub and walk-in steam shower." },
  { src: "/images/yep.jpg", alt: "Living Room", desc: "Contemporary living area with bespoke joinery, oak flooring, and ambient lighting." },
  { src: "/images/kitchengrey.png", alt: "Grey Kitchen Cabinetry", desc: "Sleek grey cabinetry paired with brass hardware for a modern yet timeless look." },
  { src: "/images/bed.jpg", alt: "Bedroom Retreat", desc: "Cozy bedroom retreat featuring custom joinery and soft, layered lighting." },
  { src: "/images/island.png", alt: "Modern Kitchen Island", desc: "Statement island with waterfall edge and integrated wine fridge." },
  { src: "/images/heat.jpg", alt: "Underfloor Heating", desc: "Underfloor heating installation hidden beneath designer tiles for ultimate comfort." },
  { src: "/images/gard.jpg", alt: "Garden Extension", desc: "Stylish garden room extension with full-height glazing to blur indoor/outdoor living." },
  { src: "/images/insulation.jpg", alt: "Loft Insulation", desc: "High-performance loft insulation upgrade for energy savings and year-round comfort." },
]

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Portfolio | Love Ur Living</title>
        <meta
          name="description"
          content="Explore Love Ur Living's gallery of home renovations, kitchens, bathrooms, and bespoke interiors across London."
        />
      </Head>

      <Header />
      <br /><br /><br />

      {/* 🤍 White background with dark blue text */}
      <main className="mt-16 bg-white text-[#0a1a2f] min-h-screen py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0a1a2f] text-center mb-8 uppercase tracking-wide leading-tight">
            Our Gallery Portfolio
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#0a1a2f]/80 text-center mb-12 max-w-3xl mx-auto">
            Take a closer look at our craftsmanship from bespoke bathrooms to stylish living spaces, 
            each project reflects our dedication to precision, design, and comfort.
          </p>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((img, idx) => (
              <motion.figure
                key={idx}
                className="group overflow-hidden border-2 border-[#D4A373] bg-white shadow-lg relative rounded-lg hover:shadow-xl transition-shadow duration-300"
                variants={item}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-[#0a1a2f]/70 text-white p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {img.desc}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
      </main>

      <br /><br /><br />
      <Footer />
    </>
  )
}
