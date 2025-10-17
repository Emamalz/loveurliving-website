import { motion } from "framer-motion"
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MotionButton from "../components/MotionButton"
import Slider from "react-slick"
import Image from "next/image"

export default function Home() {
  // Services Array (all 8 main services)
  const services = [
    { title: "House Extensions", img: "/images/etx.jpeg", href: "/services/extensions", desc: "Single & double-storey, rear and side return extensions designed to add space and value." },
    { title: "Loft Conversions", img: "/images/loft.jpeg", href: "/services/loft", desc: "Dormer, mansard and hip-to-gable lofts that maximise natural light and living space." },
    { title: "Kitchen & Bathroom Remodelling", img: "/images/bathkit.jpeg", href: "/services/kitchens-bathrooms", desc: "Luxury kitchens and bathrooms with bespoke joinery, modern finishes, and smart layouts." },
    { title: "Roofing & Emergency Repairs", img: "/images/roof.jpeg", href: "/services/roofing", desc: "Durable roofing solutions, from new installations to fast emergency roof repairs." },
    { title: "Plastering & Decorative Finishes", img: "/images/plaster.png", href: "/services/plastering", desc: "Smooth walls, decorative plasterwork and bespoke finishes that elevate your interiors." },
    { title: "Underfloor Heating & Smart Controls", img: "/images/heat.jpg", href: "/services/heating", desc: "Efficient underfloor heating systems with the latest smart-home climate controls." },
    { title: "Dropped Ceiling Designs", img: "/images/dropped.jpg", href: "/services/ceilings", desc: "Elegant false ceiling designs with recessed lighting and modern acoustic options." },
    { title: "Full Property Renovations", img: "/images/full.jpeg", href: "/services/full-renovations", desc: "Complete home refurbishments — kitchens, bathrooms, extensions and structural works." }
  ]

  const galleryImages = [
    { src: "/images/kitchenblue.png", alt: "Blue Kitchen Design", desc: "Signature blue shaker kitchen with quartz countertops and under-cabinet lighting." },
    { src: "/images/bath.jpg", alt: "Modern Kitchen Island", desc: "Built-in kitchen island with integrated breakfast bar and storage solutions." },
    { src: "/images/bed.jpg", alt: "Bedroom Retreat", desc: "Cozy bedroom retreat with custom joinery and soft layered lighting." }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  const heroImages = [
    { src: "/images/kitchenblue.png", alt: "Luxury Kitchen Remodel" },
    { src: "/images/bathroombig.png", alt: "Modern Bathroom Design" },
    { src: "/images/bed.jpg", alt: "Elegant Bedroom Makeover" },
    { src: "/images/fulr.jpeg", alt: "Complete Home Transformation" },
    { src: "/images/out.webp", alt: "Outdoor Living & Extensions" },
    { src: "/images/yep.jpg", alt: "Stylish Lounge Area" }
  ]

  return (
    <>
      <Head>
        <title>Builders in London | House Extensions, Loft Conversions & Renovations</title>
        <meta
          name="description"
          content="Award-winning builders in London with 25+ years of experience. Specialists in house extensions, loft conversions, kitchens, bathrooms & full home renovations across all boroughs."
        />
      </Head>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      <Header />

      <main>
        {/* ✅ HERO CAROUSEL SECTION */}
        <section className="relative text-white">
          <Slider
            dots={true}
            infinite={true}
            speed={900}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            fade={true}
            adaptiveHeight={true}
          >
            {heroImages.map((img, idx) => (
              <div key={idx} className="relative h-[90vh] sm:h-[95vh]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  priority={idx === 0}
                  className="opacity-90"
                />

                {/* Overlay + Animated Text */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.3, duration: 0.8 },
                      },
                    }}
                    className="max-w-3xl"
                  >
                    {/* 1️⃣ Animated Heading */}
                    <motion.h1
                      className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {img.alt}
                    </motion.h1>

                    {/* 2️⃣ Animated Subtext */}
                    <motion.p
                      className="text-lg sm:text-2xl mb-8 opacity-90"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.2 }}
                    >
                      Transforming homes with precision, comfort, and care.
                    </motion.p>

                    {/* 3️⃣ Animated Button */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.4 }}
                    >
                      <MotionButton href="#booking">Request a Free Quote</MotionButton>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Services */}
        <motion.section
  id="services"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
  transition={{ duration: 0.8 }}
  className="py-20 bg-white"
>
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 uppercase tracking-wide">
      Discover Our Services
    </h2>
    {/* ✅ Intro Paragraph */}
    <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
      At <strong>Love Ur Living</strong>, we offer a complete range of <em>building and renovation services in London</em>, 
      from <strong>house extensions and loft conversions</strong> to <strong>kitchens, bathrooms, roofing, plastering, heating, ceilings, 
      and full property refurbishments</strong>. Our family-run team delivers high-quality craftsmanship, 
      reliable service, and modern designs that add comfort, space, and value to your home.
    </p>

    {/* Service Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((svc, idx) => (
        <motion.div
          key={svc.title}
          className="group overflow-hidden rounded-xl border-2 border-[#D4A373] bg-white shadow-lg flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={svc.img}
            alt={svc.title}
            className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="text-xl font-semibold mb-3">{svc.title}</h4>
            <p className="text-sm text-gray-600 flex-grow">{svc.desc}</p>
            <div className="mt-4">
              <MotionButton href={svc.href}>Learn More</MotionButton>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>



        {/* Gallery */}
        <motion.section
          id="gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="py-20 bg-[#f8d87e]/20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-12 uppercase tracking-wide">Our Gallery</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Take a closer look at our craftsmanship — from bespoke bathrooms to stylish living spaces,
                and see how we turn everyday rooms into dreamy retreats.
              </p>
              <MotionButton href="/gallery">View the Full Gallery</MotionButton>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map(({ src, alt, desc }, idx) => (
                <motion.figure
                  key={idx}
                  className="overflow-hidden rounded-xl border-2 border-[#D4A373] bg-white shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, rotateX: 1.5, rotateY: -1.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src={src} alt={alt} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105" />
                  <figcaption className="p-4 text-gray-800 text-sm">{desc}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white border-t-2 border-b-2 border-[#D4A373]"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 uppercase tracking-wide">Our Brand Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Love Ur Living, we believe your home should be more than four walls—it’s a sanctuary of peace,
              a canvas for your dreams, and a place where memories come to life.<br/><br/>
              For over 25 years, our passion has been transforming ordinary spaces into warm, serene havens.
              From enchanting bathroom remodels to seamless smart-home integrations, every project is an
              opportunity to blend timeless craftsmanship with a touch of magic.<br/><br/>
              Our vision is simple: to make luxury feel welcoming, to bring harmony into every room,
              and to help you fall in love with your living space all over again.
            </p>
            <MotionButton href="/about">Find Out More</MotionButton>
          </div>
        </motion.section>

        {/* Booking */}
        <motion.section
          id="booking"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="py-20 bg-[#f8d87e]/30"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-12 uppercase tracking-wide">Secure Your Spot</h2>
            <div className="rounded-xl border-2 border-[#D4A373] bg-white shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Book Your Free Consultation</h3>
              <p className="text-gray-600 mb-6 text-center">Want to chat? Reach out directly via any method below:</p>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:info@loveurliving.com" className="text-[#D4A373] hover:underline">info@loveurliving.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+447952913983" className="text-[#D4A373] hover:underline">07952 913 983</a></li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/447952913983" target="_blank" rel="noopener" className="text-[#D4A373] hover:underline">Chat on WhatsApp</a></li>
                <li><strong>Instagram:</strong> <a href="https://instagram.com/LOVEURLIVING_" target="_blank" rel="noopener" className="text-[#D4A373] hover:underline">@LOVEURLIVING_</a></li>
              </ul>
              <div className="text-center mt-6">
                <MotionButton href="/contact">Send Us a Message</MotionButton>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}
