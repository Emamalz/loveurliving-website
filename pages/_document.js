// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Love Ur Living",
              image: "https://www.loveurliving.com/images/logo.png",
              url: "https://www.loveurliving.com",
              telephone: "+447952913983",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Example Street",   // 🔹 Replace with real street
                addressLocality: "London",
                postalCode: "E1 1AA",                  // 🔹 Replace with real postcode
                addressCountry: "GB",
              },
              sameAs: [
                "https://instagram.com/LOVEURLIVING_",
              ],
              areaServed: [
                "London", "North London", "South London", "East London", "West London", "Central London",
                "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", 
                "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey",
                "Harrow", "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea",
                "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham", "Redbridge",
                "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest",
                "Wandsworth", "Westminster",
              ],
              knowsAbout: [
                "builders near me", "construction companies near me", "general builders in London",
                "professional builders London", "building contractors near me", "house builders near me",
                "residential builders London", "commercial builders London", "luxury home builders London",
                "apartment refurbishment London", "design and build contractors London", "house extensions London",
                "loft conversion specialists London", "kitchen extension builders London", "bathroom fitters London",
                "garage conversion London", "emergency builder London", "handyman and builder London",
                "affordable builders London", "trusted builders London", "reliable builders London",
                "brickwork contractors London", "plasterers London", "tilers London", "roofing contractors London",
                "flooring contractors London", "decorators London", "carpenters and joiners London",
                "basement conversion London", "garden office builders London", "townhouse renovation London",
                "listed building restoration London", "new build homes London", "building repairs London",
                "compare builders London", "cost of house extension London", "loft conversion cost London",
                "new build cost London", "cheap builders London", "small job builders London", "best builders in London",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
