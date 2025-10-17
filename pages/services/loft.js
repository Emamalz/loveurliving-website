// /pages/services/loft-conversions.js
import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function LoftConversionsPage() {
  return (
    <PageLayout
      title="Loft Conversions London | Love Ur Living"
      description="Love Ur Living are trusted builders in London specialising in loft conversions. Create extra bedrooms, home offices, or studios with bespoke designs across all 32 London boroughs."
      variant="service"
    >
      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/loft.jpeg"
            alt="Modern loft conversion London"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Loft Conversions</h1>
          <p className="text-lg sm:text-xl">
            Add space, value, and style to your London home with a bespoke loft conversion
            designed by experts.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose a Loft Conversion?</h2>
          <p className="mb-6 text-gray-700">
            Transform your unused attic into a functional, beautiful living space. 
            Whether you’re dreaming of a new bedroom, home office, or creative studio, 
            our team ensures every <strong>loft conversion</strong> maximises space, 
            light, and comfort.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Extra bedrooms & master suites</li>
            <li>Stylish home offices & creative studios</li>
            <li>Ensuite bathrooms & walk-in wardrobes</li>
            <li>Energy-efficient insulation & skylights</li>
            <li>Velux, dormer & mansard designs</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/aa.jpg"
            alt="Bespoke loft conversion London"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Design Ideas Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/loft.jpeg"
              alt="Loft with modern interior London"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Tailored Loft Designs</h2>
            <p className="mb-6 text-gray-700">
              Every London home is unique, which is why we design <strong>custom loft conversions</strong> 
              to match your property and lifestyle. From clean minimalist interiors to 
              rustic character features, our designs blend function and style seamlessly.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Open-plan living spaces</li>
              <li>Compact storage solutions</li>
              <li>Natural light optimisation</li>
              <li>High-end finishes & bespoke joinery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Start Your Loft Conversion Today</h2>
        <p className="mb-8 text-lg">
          Book your free consultation and discover how we can unlock the potential of your loft.
        </p>
        <MotionButton href="/contact">Request a Free Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
