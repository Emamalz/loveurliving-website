// /pages/services/plastering.js
import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function PlasteringPage() {
  return (
    <PageLayout
      title="Plastering, Decorative Finishes & Wallpaper Installation London | Love Ur Living"
      description="Expert plastering and decorative wall finishes in London. Specialists in Venetian plaster, polished plaster, textured walls & luxury wallpaper installation across all 32 boroughs."
      variant="service"
    >
      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/plaster.png"
            alt="Venetian plaster wall finish London"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Plastering, Decorative Finishes & Wallpaper
          </h1>
          <p className="text-lg sm:text-xl">
            Flawless plastering, luxury Venetian finishes, and bespoke wallpaper design 
            — transforming London walls with style.
          </p>
        </div>
      </section>

      {/* Plastering Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Plastering in London</h2>
          <p className="mb-6 text-gray-700">
            Our expert team provides <strong>interior and exterior plastering</strong> 
            to ensure smooth, durable, and premium finishes. From everyday wall skimming 
            to high-end polished plaster, we’re trusted across London for outstanding quality.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Interior wall plastering & skimming</li>
            <li>Exterior rendering & waterproof finishes</li>
            <li>Venetian plaster & polished marble effects</li>
            <li>Plaster repairs & heritage restoration</li>
            <li>Cornices, ceiling mouldings & detailing</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/p.webp"
            alt="Decorative plaster wall London"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Decorative Finishes Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/plaster.png"
              alt="Venetian polished plaster London"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Luxury Decorative Finishes</h2>
            <p className="mb-6 text-gray-700">
              We specialise in <strong>Venetian plastering</strong> and unique decorative 
              designs that elevate your interiors. From textured statement walls to 
              contemporary polished finishes, our work blends artistry and precision.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Venetian polished plaster feature walls</li>
              <li>Marble & stone effect finishes</li>
              <li>Coloured lime plaster & textured layers</li>
              <li>Designer ceilings & statement details</li>
              <li>Commercial projects: hotels, showrooms, offices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wallpaper Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Wallpaper & Wall Coverings</h2>
          <p className="mb-6 text-gray-700">
            Alongside plastering, we provide professional <strong>wallpaper installation in London</strong>, 
            including luxury wallpapers, mural walls, and custom designer wall coverings. 
            Perfect for adding personality, texture, and colour to your home or business.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Luxury wallpaper installation</li>
            <li>Feature mural walls</li>
            <li>Textured & fabric wallpapers</li>
            <li>Commercial wallpapering for offices & retail</li>
            <li>Seamless wall covering application</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/wallpaper.png"
            alt="Luxury wallpaper installation London"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Transform Your Walls Today</h2>
        <p className="mb-8 text-lg">
          Contact us for expert plastering, decorative finishes, or wallpaper installation 
          across London’s 32 boroughs.
        </p>
        <MotionButton href="/contact">Request a Free Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
