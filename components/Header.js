// components/Header.js
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const y = window.pageYOffset
      setHidden(y > lastY && y > 100)
      setAtTop(y <= 0)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <>
      {/* skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only px-4 py-2 bg-white text-gray-900"
      >
        Skip to main content
      </a>

      <header
        className={`
          site-nav fixed top-0 left-0 w-full z-50 transition-transform duration-300
          ${hidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="nav-content">
          <Link href="/" scroll={false} legacyBehavior>
            <a>
              <img
                src="/images/logo.png"
                srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
                width="400"
                height="50"
                alt="Love Ur Living Logo"
                className={`
                  nav-logo object-contain transition-[height] duration-300
                  ${atTop ? 'h-[140px]' : 'h-[80px]'}
                `}
              />
            </a>
          </Link>

          <nav className="nav-links flex items-center">
            <Link href="/#services" scroll={false} legacyBehavior>
              <a className="px-2">Services</a>
            </Link>
            <Link href="/#gallery" scroll={false} legacyBehavior>
              <a className="px-2">Gallery</a>
            </Link>
            <Link href="/#about" scroll={false} legacyBehavior>
              <a className="px-2">About</a>
            </Link>
            <Link href="/#booking" scroll={false} legacyBehavior>
              <a className="btn inline-block ml-4">Book Now</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
