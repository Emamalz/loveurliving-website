import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function CeilingsPage() {
  return (
    <PageLayout 
      title="Dropped Ceilings London | False Ceilings, Suspended Ceilings & Ceiling Installation"
      description="Love Ur Living are ceiling specialists in London. We design and install dropped ceilings, suspended ceilings, false ceilings, acoustic ceilings and LED feature lighting across all London boroughs."
      variant="service"
    >

      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Dropped Ceilings & Suspended Ceilings in London</h1>
          <p className="text-lg sm:text-xl">
            Expert <strong>ceiling installers in London</strong> providing bespoke dropped ceilings, false ceilings, suspended ceilings, acoustic soundproofing and integrated lighting solutions for homes and businesses across all 32 London boroughs.
          </p>
        </div>
      </section>

      {/* Content Section with smaller side-by-side images */}
      <section className="max-w-7xl mx-auto px-6 mb-20 space-y-16 text-gray-700">
        
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p>
              At Love Ur Living, we believe a ceiling is more than just a finishing touch — it’s the element that ties a room together, enhances its atmosphere, and improves comfort. Our <strong>ceiling installation services in London</strong> combine function and beauty, offering seamless finishes, stylish designs, and practical solutions that hide wiring, ductwork, and uneven structures.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/c2.jpeg" 
              alt="Luxury false ceiling London" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image 
              src="/images/ee.webp" 
              alt="Bespoke bedroom ceiling design London" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div className="order-1 md:order-2">
            <p>
              Whether you want a <strong>false ceiling in your living room</strong>, a <strong>dropped ceiling with LED lights</strong> in your bedroom, or a <strong>suspended ceiling for a commercial space</strong>, our team delivers results tailored to your needs. Using plasterboard, acoustic panels, gypsum, wood, and metal, we ensure durability and a flawless finish.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p>
              Dropped ceilings provide more than style. They improve acoustics by reducing noise, enhance insulation, and allow for smart features like <strong>mood lighting, hidden LED strips, ventilation, and integrated systems</strong>. This makes them a smart investment for comfort, energy efficiency, and modern living.
            </p>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/c4.jpeg" 
              alt="Contemporary suspended ceiling with lighting London" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <section className="bg-[#f9f9f6] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">Ceiling Installation FAQ</h2>
          <div className="space-y-8 text-gray-700">

            <div>
              <h3 className="font-semibold">How much does a dropped ceiling cost in London?</h3>
              <p>
                Prices typically start from £35–£55 per square metre depending on design and materials. Advanced ceilings with LED lighting, acoustic panels, or decorative mouldings are quoted individually, with full transparency before work begins.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What’s the difference between a false ceiling and a suspended ceiling?</h3>
              <p>
                A false ceiling is decorative and enhances interiors, while a suspended ceiling uses panels hung below the main structure, commonly seen in offices. Both can include lighting, insulation, and soundproofing features.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you install ceilings in both homes and businesses?</h3>
              <p>
                Yes. We provide ceiling installation for London homes, offices, restaurants, retail units, and commercial buildings. Every project is customised for practicality and style.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can ceilings help with soundproofing?</h3>
              <p>
                Absolutely. <strong>Acoustic ceilings</strong> are one of our most requested services. They significantly reduce noise between rooms and floors, ideal for apartments and offices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Transform Your Home with Bespoke Ceilings</h2>
        <p className="mb-8 text-lg">
          Love Ur Living are trusted experts for <strong>dropped ceilings, suspended ceilings, false ceilings, acoustic ceilings and LED ceiling lighting</strong> across London. Contact us today for a free consultation and quote.
        </p>
        <MotionButton href="/contact">Get Your Free Quote</MotionButton>
      </section>

    </PageLayout>
  )
}
