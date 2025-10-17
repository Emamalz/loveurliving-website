import PageLayout from "../../components/PageLayout"
import Image from "next/image"
import MotionButton from "../../components/MotionButton"

export default function HeatingPage() {
  return (
    <PageLayout 
      title="Heating Systems & Smart Home Controls London | Love Ur Living"
      description="London heating specialists. Underfloor heating installation, boiler upgrades, radiators, thermostats & smart home systems. Trusted builders with 25+ years experience across all boroughs."
      variant="service"
    >
      {/* Hero */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Heating Systems & Smart Controls</h1>
          <p className="text-lg sm:text-xl">
            Professional <strong>heating engineers in London</strong> — from <strong>underfloor heating installation</strong> to <strong>smart thermostats</strong> and <strong>boiler upgrades</strong>, we design energy-efficient systems that deliver comfort and control.
          </p>
        </div>
      </section>

      {/* Underfloor Heating Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Underfloor Heating Installation London</h2>
          <p className="mb-6 text-gray-700">
            Transform your home with <strong>luxury underfloor heating</strong>, a modern solution for 
            consistent and efficient warmth. Perfect for bathrooms, kitchens, and living spaces, 
            underfloor heating removes the need for bulky radiators and frees up wall space.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Electric & water-based underfloor heating systems</li>
            <li>Energy-efficient, low running costs</li>
            <li>Ideal for new builds, extensions & renovations</li>
            <li>Even heat distribution & no cold spots</li>
            <li>Compatible with renewable energy sources</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/insulation.jpg" 
            alt="Professional underfloor heating London" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </section>

      {/* Boilers & Radiators */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image 
              src="/images/rr.jpeg" 
              alt="Boiler upgrade and radiator installation London" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Boiler Upgrades & Radiator Installation</h2>
            <p className="mb-6 text-gray-700">
              As trusted <strong>heating installers in London</strong>, we provide safe and reliable 
              <strong>boiler installations</strong>, <strong>radiator replacements</strong>, and heating 
              system upgrades. Whether you’re modernising an old system or expanding with a house 
              extension, our heating engineers ensure maximum efficiency and long-lasting results.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Gas & combi boiler installation</li>
              <li>Designer radiators & towel warmers</li>
              <li>Heating system upgrades for extensions & lofts</li>
              <li>Annual boiler servicing & safety checks</li>
              <li>Emergency heating repairs across London</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Home Controls */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Smart Heating & Home Automation</h2>
            <p className="mb-6 text-gray-700">
              Upgrade your lifestyle with <strong>smart home heating systems</strong>. From 
              programmable thermostats to full home automation, we make heating convenient, 
              energy-efficient, and tailored to your daily routine.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Smart thermostats (Nest, Hive, Tado & more)</li>
              <li>App-controlled heating zones</li>
              <li>Integration with lighting & security systems</li>
              <li>Energy-saving automation for lower bills</li>
              <li>Voice control with Alexa, Google, Siri</li>
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/red.jpg" 
              alt="Smart home heating systems London" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Reliable Heating Experts in London</h2>
        <p className="mb-8 text-lg">
          From <strong>underfloor heating installations</strong> to <strong>smart boiler systems</strong>, we help London homeowners 
          create warm, efficient, and modern living spaces.  
          Get a free consultation today.
        </p>
        <MotionButton href="/contact">Book Your Free Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
