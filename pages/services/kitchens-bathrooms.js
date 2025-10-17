import Head from "next/head"
import PageLayout from "../../components/PageLayout"
import MotionButton from "../../components/MotionButton"
import Image from "next/image"

export default function KitchensBathroomsPage() {
  return (
    <PageLayout 
      title="Kitchen & Bathroom Remodelling London | Love Ur Living"
      description="Love Ur Living are trusted builders in London specialising in kitchen and bathroom remodelling. Luxury kitchens, bespoke bathrooms, modern finishes & smart layouts. Serving all 32 London boroughs."
      variant="service"   // ✅ this switches background to off-white
    >
     {/* Hero Section */}
<section className="relative bg-[#1F2937] text-white py-24 mb-16">
  <div className="absolute inset-0">
    <Image 
      src="/images/kitchengrey.png" 
      alt="Luxury kitchen London" 
      layout="fill" 
      objectFit="cover" 
      className="opacity-30"
    />
  </div>
  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-4xl sm:text-6xl font-bold mb-6">Kitchen & Bathroom Remodelling</h1>
    <p className="text-lg sm:text-xl">
      Luxury spaces designed with precision, crafted for comfort, and built to last across all of London.
    </p>
  </div>
</section>

{/* Kitchens Section */}
<section className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto px-6">
  <div>
    <h2 className="text-2xl font-semibold mb-4">Kitchen Renovations</h2>
    <p className="mb-6 text-gray-700">
      Whether you’re looking for a sleek modern kitchen or a timeless shaker style, 
      our team delivers <strong>bespoke kitchen remodels</strong> tailored to your lifestyle.
    </p>
    <ul className="list-disc pl-6 mb-8 text-gray-700">
      <li>Open-plan kitchen layouts</li>
      <li>Kitchen islands & breakfast bars</li>
      <li>Custom cabinetry & joinery</li>
      <li>Premium worktops in quartz, granite & marble</li>
      <li>Smart lighting & integrated appliances</li>
    </ul>
  </div>
  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
    <Image src="/images/kitchenblue.png" alt="Luxury kitchen remodel London" layout="fill" objectFit="cover" />
  </div>
</section>

{/* Bathrooms Section */}
<section className="bg-[#fff] py-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
    <div className="relative h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
      <Image src="/images/bathroombig.png" alt="Luxury bathroom remodel London" layout="fill" objectFit="cover" />
    </div>
    <div className="order-1 md:order-2">
      <h2 className="text-2xl font-semibold mb-4">Bathroom Renovations</h2>
      <p className="mb-6 text-gray-700">
        From spa-inspired wet rooms to compact en-suites, we transform bathrooms with <strong>luxury fixtures and flawless finishes</strong>.
      </p>
      <ul className="list-disc pl-6 mb-8 text-gray-700">
        <li>Walk-in showers & wet rooms</li>
        <li>Freestanding baths</li>
        <li>Underfloor heating</li>
        <li>Premium tiling: porcelain, ceramic, natural stone</li>
        <li>Space-saving storage & bespoke joinery</li>
      </ul>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="bg-[#1F2937] text-white py-20 mt-20 text-center rounded-t-3xl">
  <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
  <p className="mb-8 text-lg">Book your free consultation and let’s design your perfect kitchen or bathroom.</p>
  <MotionButton href="/contact">Request a Free Quote</MotionButton>
</section>

    </PageLayout>
  )
}
