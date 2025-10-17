import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function ExtensionsPage() {
  return (
    <PageLayout 
      title="House Extensions London | Love Ur Living"
      description="Love Ur Living are trusted builders in London specialising in house extensions. Rear extensions, side return, wrap-around & double-storey builds. Serving all 32 London boroughs."
      variant="service"
    >
      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white py-24 mb-16">
        <div className="absolute inset-0">
          <Image 
            src="/images/home ext.jpg" 
            alt="Modern home extension London" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">House Extensions in London</h1>
          <p className="text-lg sm:text-xl">
            Bespoke extensions that add light, space, and value to your home — expertly crafted across all London boroughs.
          </p>
        </div>
      </section>

      {/* Rear / Side Return Extensions */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Rear & Side Return Extensions</h2>
          <p className="mb-6 text-gray-700">
            Perfect for maximising your living space without compromising your garden. Our <strong>rear and side return extensions</strong> 
            are designed to blend seamlessly with your home while giving you the open-plan lifestyle you want.
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Open-plan kitchen & dining spaces</li>
            <li>Large skylights & sliding doors for natural light</li>
            <li>Blending indoor & outdoor living</li>
            <li>Smart layouts tailored to London homes</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image src="/images/etx.jpeg" alt="Rear home extension London" layout="fill" objectFit="cover" />
        </div>
      </section>

      {/* Wrap-around / Double-storey */}
      <section className="bg-[#fff] py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/images/home ext.jpg" alt="Wrap-around extension London" layout="fill" objectFit="cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Wrap-around & Double-Storey Extensions</h2>
            <p className="mb-6 text-gray-700">
              For families who need serious space, our <strong>wrap-around and double-storey extensions</strong> provide 
              maximum value. From new bedrooms to extended kitchens, we’ll help you reimagine your property.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Double the space with upper floors</li>
              <li>Wrap-around builds for maximum impact</li>
              <li>Ideal for growing families</li>
              <li>Full project management from design to build</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-6">Expand Your Home with Confidence</h2>
        <p className="mb-8 text-lg">Book a free consultation and let’s plan the perfect extension for your home.</p>
        <MotionButton href="/contact">Request a Free Quote</MotionButton>
      </section>
    </PageLayout>
  )
}
