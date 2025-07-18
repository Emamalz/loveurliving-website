// pages/index.js
import { motion } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { section } from 'framer-motion/client'

export default function Home() {
  const galleryImages = [
    {
      src: '/images/kitchenblue.png',
      alt: 'Blue Kitchen Design',
      desc: 'Signature blue shaker kitchen complete with quartz countertops and under-cabinet lighting.'
    },
    {
      src: '/images/bath.jpg',
      alt: 'Modern Kitchen Island',
      desc: 'Built-in kitchen island with integrated breakfast bar and storage solutions.'
    },
    {
      src: '/images/bed.jpg',
      alt: 'Bedroom Retreat',
      desc: 'Cozy bedroom retreat featuring custom joinery and soft, layered lighting.'
    },
  ]

  const services = [
    {
      title: 'Plastering & Decorative Finishes',
      img: '/images/plaster.png',
      href: '/services#plastering'
    },
    {
      title: 'Roofing',
      img: '/images/roof.jpeg',
      href: '/services#roofing'
    },
    {
      title: 'Bathroom & Kitchen Remodelling',
      img: '/images/bathkit.jpeg',
      href: '/services#remodelling'
    },
    {
      title: 'Underfloor Heating & Smart Controls',
      img: '/images/heat.jpg',
      href: '/services#heating'
    },
    {
      title: 'Home Extensions',
      img: '/images/home ext.jpg',
      href: '/services#extensions'
    },
    {
      title: 'Dropped Ceiling Designs',
      img: '/images/dropped.jpg',
      href: '/services#ceilings'
    }
  ]

  return (
    <>
      <Head>
        <title>Love Ur Living | Home Renovation Experts London</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Top-rated home renovation expert in London. Bathrooms, kitchens, basements, smart homes & more. Trusted for over 16 years." />
        <meta name="keywords" content="home renovations London, kitchen fit outs, bathroom design, loft conversions, smart home systems, home extensions, plastering, painting and decorating, dropped ceiling, fencing, basements, Airbnb refurbishments, Victorian homes, Art Deco design, Georgian architecture" />
        <meta name="author" content="Love Ur Living" />
        <meta name="robots" content="index, follow" />
      </Head>

      <link
  rel="preload"
  as="image"
  href="/images/header.png"
/>



      {/* Load Calendly once the page is interactive */}
      <Script
  src="https://assets.calendly.com/assets/external/widget.js"
  strategy="afterInteractive"
/>



      <Header />

      <main className="mt-16">
        {/* Hero */}
        <section className="hero">
          <h2>
            From Vision to Reality
            <br />
            Luxury Renovations You’ll Love
          </h2>
          <p>Transforming Properties for Over 25 Years</p>
          <a href="#booking" className="btn">
            Request a Free Quote
          </a>
        </section>

{/* Services */}
<section id="services" className="section ">

<h1 className="
  text-4xl sm:text-5xl md:text-6xl 
  font-semibold 
  text-gray-900 
  text-center 
  mb-8 
  uppercase 
  tracking-wide
  leading-tight
">
    Discover Our Services
  </h1>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((svc, idx) => (
      <motion.div
        key={svc.title}
        className="group overflow-hidden rounded-xl border-2 border-[#D4A373] shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
      >
        <img
          src={svc.img}
          alt={svc.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-medium mb-4">{svc.title}</h4>
          <Link
            href={svc.href}
            className="mt-auto inline-block px-4 py-2 bg-[#D4A373] text-white rounded hover:bg-[#C49E7F] transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>


<section id="gallery">
        {/* — Beautiful Portfolio Gallery — */}

   {/* INTRO */}
   <motion.main
          className="mt-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
  <h1 className="
  text-4xl sm:text-5xl md:text-6xl 
  font-semibold 
  text-gray-900 
  text-center 
  mb-8 
  uppercase 
  tracking-wide
  leading-tight
">
  Our Gallery
</h1>


  
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#D4A373] rounded-full animate-pulse"></div>
          </div>
  
          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-8 leading-relaxed">
            Take a closer look at our craftsmanship — from bespoke bathrooms to stylish living spaces, and see how we turn everyday rooms into dreamy retreats.
          </p>
  
          <div className="text-center mb-12">
          <Link
   href="/gallery"
   className="inline-block px-6 py-3 bg-[#D4A373] text-white font-semibold rounded-lg shadow-lg
              hover:shadow-xl transition transform hover:-translate-y-1"
 >
   View the Full Gallery
 </Link>
          </div>
        </motion.main>
  
        {/* GRID */}
        <section className="section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map(({ src, alt, desc }, idx) => (
              <motion.figure
                key={idx}
                className="group overflow-hidden rounded-xl border-2 border-[#D4A373] bg-white shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="p-4 text-gray-800 text-sm leading-relaxed">
                  {desc}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
</section>
  
{/* …Hero section above… */}

{/* About Us */}
<section
  id="about"
  className="section bg-white border-t-2 border-b-2 border-[#D4A373] py-12"
>
  <h3
    className="
      text-4xl sm:text-5xl md:text-6xl 
      font-semibold 
      text-gray-900 
      text-center 
      mb-8 
      uppercase 
      tracking-wide
      leading-tight
    "
  >
    Our Brand Vision
  </h3>
  <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed mb-6">
    At Love Ur Living, we believe your home should be more than four walls—it’s a sanctuary of peace,
    a canvas for your dreams, and a place where memories come to life.
    <br/><br/>
    For over 25 years, our passion has been transforming ordinary spaces into warm, serene havens.
    From enchanting bathroom remodels to seamless smart-home integrations, every project is an
    opportunity to blend timeless craftsmanship with a touch of magic.
    <br/><br/>
    Our vision is simple: to make luxury feel welcoming, to bring harmony into every room, and to
    help you fall in love with your living space all over again.
  </p>
  <div className="text-center">
    <Link
      href="/about"
      className="inline-block px-6 py-3 bg-[#D4A373] text-white font-semibold rounded-lg hover:bg-[#C49E7F] transition"
    >
      Find Out More
    </Link>
  </div>
</section>

</main>
       {/* Secure Your Spot Section */}
<section id="booking" className="section">
  <h3 className="
  text-4xl sm:text-5xl md:text-6xl 
  font-semibold 
  text-#fff
  text-center 
  mb-8 
  uppercase 
  tracking-wide
  leading-tight
">
    Secure Your Spot
  </h3>

  <div className="max-w-3xl mx-auto">
    <div className=" rounded-xl border-2 border-[#D4A373] overflow-hidden p-6">
      <h4 className="text-2xl font-semibold mb-4">Book Your Free Consultation</h4>
      <p className="text-#fff mb-6"></p>
      <p className="max-w-2xl mx-auto text-center text-#fff mb-12">
    Want to chat? Reach out directly via any method below
  </p>
      <p> Drop us a message and we’ll get right back to you:
      </p>

      <ul className="space-y-4">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@loveurliving.co.uk" className="text-[#D4A373] hover:underline">
            info@loveurliving.co.uk
          </a>
        </li>
        <li>
          <strong>Phone:</strong>{' '}
          <a href="tel:+447952913983" className="text-[#D4A373] hover:underline">
            07952 913 983
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a
            href="https://wa.me/447952913983"
            target="_blank"
            rel="noopener"
            className="text-[#D4A373] hover:underline"
          >
            Chat on WhatsApp
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://instagram.com/LOVEURLIVING_"
            target="_blank"
            rel="noopener"
            className="text-[#D4A373] hover:underline"
          >
            @LOVEURLIVING_
          </a>
        </li>
      </ul>

      <div className="text-center mt-6">
      <Link
   href="/contact"
   className="inline-block px-6 py-3 bg-[#D4A373] text-white font-semibold rounded-lg shadow-lg
              hover:shadow-xl transition transform hover:-translate-y-1"
 >
   Send Us a Message
 </Link>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  )
}

