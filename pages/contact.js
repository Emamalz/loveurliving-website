// pages/contact.js (or wherever)

import { useRef } from 'react'
import emailjs from 'emailjs-com'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_5fgmbsv',      // ← your Service ID
      'template_xxx',         // ← your Template ID
      formRef.current,
      'user_ABCDEFGHIJKLMN'   // ← your User ID
    )
    .then(() => {
      alert("Thanks! We'll be in touch soon.")
      formRef.current.reset()
    })
    .catch((err) => {
      console.error('EmailJS error:', err)
      alert('Oops! Something went wrong.')
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Contact Us | Love Ur Living</title>
      </Head>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16 pt-32">
        <h3 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wide">
          Contact Us
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="How can we help?"
            required
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#D4A373] text-white rounded hover:bg-[#C49E7F]"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
