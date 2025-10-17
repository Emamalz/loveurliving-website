import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function FullRenovationsPage() {
  return (
    <PageLayout
      title="Full Property Renovations London | Love Ur Living"
      description="Love Ur Living provides complete home renovation and refurbishment services across London. From structural reconfigurations to luxury interiors, we manage every stage of your property transformation."
      variant="service"
    >
      {/* Hero */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/out.webp"
            alt="Modern full property renovation London"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Full Property Renovations</h1>
          <p className="text-lg sm:text-xl">
            Complete home transformations managed by London’s trusted family-run renovation specialists.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-[#D4A373]">Transforming Homes Across London</h2>
        <p className="text-lg leading-relaxed mb-4">
          At <strong>Love Ur Living</strong>, we deliver <strong>full property renovations</strong> tailored to your home’s character and your personal lifestyle. 
          Whether it’s a period townhouse, a Victorian terrace, or a modern apartment, our team of skilled builders, 
          designers, and project managers bring every vision to life with craftsmanship and care.
        </p>
        <p className="text-lg leading-relaxed">
          We oversee everything — from <em>planning permission</em> and <em>structural changes</em> to bespoke finishes and final touches — ensuring 
          a seamless, stress-free renovation process from start to finish.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-20 text-gray-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What’s Included in Our Renovation Service</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Structural redesigns & layout reconfigurations</li>
              <li>Kitchen and bathroom installations</li>
              <li>Plumbing, electrics, and heating upgrades</li>
              <li>Underfloor heating and smart-home systems</li>
              <li>Roofing, glazing, and insulation improvements</li>
              <li>Flooring, plastering, and decorative finishes</li>
              <li>Full project management & aftercare support</li>
            </ul>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/cori.jpeg"
              alt="Renovated kitchen and living area London"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-[#f8f8f0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/out.webp"
              alt="Before and after home renovation London"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Before & After — Real Transformations</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our before-and-after projects show the level of detail and commitment we bring to every renovation. 
              From stripped-down interiors to luxurious open-plan spaces, we give properties a completely new lease of life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We pride ourselves on precision, communication, and exceptional results — turning every room into a beautiful, functional living space.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-gray-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Love Ur Living?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>25+ years of hands-on building experience</li>
              <li>Family-run, customer-first approach</li>
              <li>Transparent pricing and clear timelines</li>
              <li>Dedicated project managers on every build</li>
              <li>Comprehensive aftercare and maintenance</li>
            </ul>
          </div>
          <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/fulr.jpeg"
              alt="Luxury open-plan renovation London"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="bg-[#0a1a2f] text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">London’s Trusted Renovation Specialists</h2>
          <p className="text-lg leading-relaxed mb-6">
            We serve homeowners across <strong>North, South, East and West London</strong> — including Camden, Islington, Chelsea, Wandsworth, Greenwich, and Richmond.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Love Ur Living is known for delivering quality renovations, exceptional communication, and stylish finishes that add comfort and long-term value to every property.
          </p>
          <MotionButton href="/contact">Book a Free Consultation</MotionButton>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Start Your Renovation Journey Today</h2>
        <p className="mb-8 text-lg max-w-3xl mx-auto">
          Let our expert team transform your property into a dream home. Book your free consultation and discover how Love Ur Living can make it happen.
        </p>
        <MotionButton href="/contact">Request Your Free Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
