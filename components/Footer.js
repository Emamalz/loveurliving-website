export default function Footer() {
  return (
    <footer className="bg-[#f8f8f0] border-t-2 border-[#D4A373] py-14 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-4 text-center lg:text-left">
        
        {/* Company Info / NAP */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Love Ur Living – Trusted Builders in London</h4>
          <p>
            A family-run construction company with <strong>16+ years of London experience</strong> 
            and over 30 years in total. Fully insured and reliable, we specialise in 
            <strong> house extensions, loft conversions, kitchen and bathroom renovations, roofing, and full property refurbishments</strong>.
          </p>
          <p className="mt-3">📍 Based In London, Greater London</p>
          <p>📞 <a href="tel:+447952913983" className="text-[#D4A373] hover:underline">07952 913 983</a></p>
          <p>✉️ <a href="mailto:info@loveurliving.com" className="text-[#D4A373] hover:underline">info@loveurliving.com</a></p>
        </div>


        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li><a href="/services/extensions" className="hover:underline">House Extensions</a></li>
            <li><a href="/services/loft" className="hover:underline">Loft Conversions</a></li>
            <li><a href="/services/kitchens-bathrooms" className="hover:underline">Kitchen & Bathroom Remodelling</a></li>
            <li><a href="/services/roofing" className="hover:underline">Roofing & Emergency Repairs</a></li>
            <li><a href="/services/plastering" className="hover:underline">Plastering & Decorative Finishes</a></li>
            <li><a href="/services/heating" className="hover:underline">Underfloor Heating & Smart Controls</a></li>
            <li><a href="/services/ceilings" className="hover:underline">Dropped Ceiling Designs</a></li>
            <li><a href="/services/full-renovations" className="hover:underline">Full Property Renovations</a></li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed">
            Known as <em>affordable builders in London</em>, 
            <em>loft conversion specialists</em>, and 
            <em>reliable renovation contractors</em>, we deliver trusted <strong>home improvement services</strong> across all London boroughs.
          </p>
        </div>

        
        {/* Service Areas */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Areas We Cover</h4>
          <p>
            Our team proudly serves <strong>all 32 London boroughs</strong> including Camden, Chelsea, Westminster, Hackney, Islington, Croydon, Greenwich, Barnet, Bromley, Ealing, Wandsworth, and more.
          </p>
          <p className="mt-3 text-xs leading-relaxed">
            We rank for searches like <em>“builders near me”</em>, 
            <em>“house extension Camden”</em>, 
            <em>“loft conversion Islington”</em>, and 
            <em>“roofing contractors Croydon”</em>.  
            No matter where you live in London, we bring quality and craftsmanship to your doorstep.
          </p>
        </div>

        {/* Trust Signals & CTA */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Why Choose Love Ur Living?</h4>
          <ul className="space-y-2">
            <li>✔️ 16+ Years of London Building Experience</li>
            <li>✔️ Family-Run, Fully Insured & Accredited</li>
            <li>✔️ Transparent Quotes & No Hidden Costs</li>
            <li>✔️ Clean, Reliable & Trusted by Homeowners</li>
          </ul>
          <p className="mt-4">
            ⭐ Read our <a href="https://www.google.com/maps/place/YOUR_PLACE_ID" target="_blank" rel="noopener" className="text-[#D4A373] hover:underline">Google Reviews</a>
          </p>
          <p className="mt-4 font-medium">
            📩 <a href="/contact" className="text-[#D4A373] hover:underline">Request a Free Consultation & Quote</a>
          </p>
        </div>
      </div>

      {/* SEO Footer Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Love Ur Living | Builders in London • House Extensions London • Loft Conversions London • Kitchen Renovations • Bathroom Renovations • Roofing Contractors • Full Property Refurbishments • Trusted Family-Run Builders • Serving Camden, Hackney, Islington, Croydon, Chelsea, Westminster & All London Boroughs.
        </p>
      </div>
    </footer>
  )
}
