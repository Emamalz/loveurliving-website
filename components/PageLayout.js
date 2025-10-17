import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

export default function PageLayout({ title, description, children, variant = "default" }) {
  // Choose background colour based on variant
  const bgClass = variant === "service" ? "bg-[#f9f9f6]" : "bg-white"

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>

      <Header />

      <main className={`${bgClass} max-w-6xl mx-auto px-6 py-16 pt-31`}>
        {children}
      </main>

      <Footer />
    </>
  )
}
