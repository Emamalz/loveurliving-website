import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function RoofingPage() {
  return (
    <PageLayout 
      title="Roofing Contractors London | Roof Repairs & Installations"
      description="Love Ur Living are trusted roofing contractors in London. We provide roof repairs, flat roofing, new roof installations, skylights, and emergency roofing across all 32 London boroughs."
      variant="service"
    >
      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
          <Image 
            src="/images/roof.jpeg" 
            alt="Roofing contractors in London - Love Ur Living" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Roofing Services in London</h1>
          <p className="text-lg sm:text-xl">
            Professional roofing contractors offering durable, weatherproof, and high-quality roofs across all 32 London boroughs.
          </p>
        </div>
      </section>

      {/* New Roof Installations */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">New Roof Installations</h2>
          <p className="mb-6 text-gray-700">
            Whether you’re upgrading your property or building from scratch, we deliver <strong>new roof installations</strong> that combine strength, insulation, and style. All installations come with full guarantees.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Slate & tile pitched roofs</li>
            <li>Flat roofs: EPDM, GRP fibreglass & felt systems</li>
            <li>Leadwork & flashing</li>
            <li>Roof windows & skylights</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image src="/images/a.jpeg" alt="New roof installation London" layout="fill" objectFit="cover" />
        </div>
      </section>

      {/* Roof Repairs */}
      <section className="bg-[#fff] py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/images/b.jpeg" alt="Roof repairs London" layout="fill" objectFit="cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Roof Repairs & Maintenance</h2>
            <p className="mb-6 text-gray-700">
              From <strong>emergency roof leak repairs</strong> to long-term maintenance, we ensure your home stays safe, dry, and energy-efficient. Our responsive team covers all of London.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Emergency leak detection & patch repairs</li>
              <li>Chimney repointing & flashing</li>
              <li>Storm damage & insurance work</li>
              <li>Guttering, fascias & soffits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Your Trusted Roofing Experts in London</h2>
        <p className="mb-8 text-lg">
          Get in touch today for roof repairs, new installations, or emergency callouts. Serving all 32 London boroughs.
        </p>
        <MotionButton href="/contact">Request a Free Roofing Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
