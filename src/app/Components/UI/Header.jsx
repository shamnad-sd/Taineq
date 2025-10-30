"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { FiArrowLeft, FiPlus, FiChevronDown, FiMinus } from "react-icons/fi"
import Images from "./Images"

const Header = ({ HomePageData, HeaderData,}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [expandedMenus, setExpandedMenus] = useState({})
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const lastScrollY = useRef(0)
  const headerRef = useRef(null)
  const hoverTimeoutRef = useRef(null)
  const pathname = usePathname()
  const router = useRouter()

const getSubMenusForItem = (item) => {
  if (item.title.toLowerCase() === "rental services") {
    return HeaderData?.items?.filter(
      subItem => subItem.parent === String(item.id)
    ).map(subItem => ({
      id: subItem.id,
      title: subItem.title,
      url: subItem.url
    }))
  }

  return [];
}

  const navItems = HeaderData?.items?.filter(item => item.parent === "0")
  .map((item) => ({
    ...item,
    subMenus: getSubMenusForItem(item)
  }));


  // Sticky scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (!isOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setShowHeader(false)
        } else {
          setShowHeader(true)
        }
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close the menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.id === "mobile-menu-overlay") {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Handle desktop hover
  const handleMouseEnter = (itemId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredMenu(itemId)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 150)
  }

  // Handle mobile menu toggle
  const toggleMobileSubMenu = (itemId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const handleMobileNavigation = (item) => {
    // Always close the mobile menu and navigate to the main page
    setIsOpen(false)
    router.push(item.url)
  }

  const handleSubMenuClick = (url) => {
    setIsOpen(false)
    router.push(url)
  }

  return (
    <>
      {/* Sticky header */}
      <header
        ref={headerRef}
        className={`bg-white border-b border-gray-200 px-7  md:px-[50px]  py-7 top-0 left-0 w-full z-50 transition-transform duration-300
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          fixed`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Images
                imageurl={`${HomePageData?.acf?.hero?.logo?.url}`}
                alt={`${HomePageData?.acf?.hero?.logo?.alt}`}
                width="280"
                height="160"
                quality={100}
                classes={` min-w-[160px] max-w-[160px]`}
                placeholder={false}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-end gap-2 flex-1 justify-end font-semibold tracking-wide">
            {navItems &&
              navItems.map((item, idx) =>
              (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.url}
                    className={`
                      px-2 py-2 flex items-center gap-1
                      ${pathname === item.url ? "text-[#0065EC]" : "text-[#001568]"}
                      hover:text-[#0065EC]
                      transition
                    `}
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {item.title}
                    {item.subMenus && item.subMenus.length > 0 && ""}
                    {/* <FiChevronDown className="text-sm ml-1" /> */}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.subMenus && item.subMenus.length > 0 && hoveredMenu === item.id && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100  z-50">
                      <div className="">
                        {item.subMenus.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={'/rental-services'}
                            className="block px-4 py-3 text-sm text-[#334486] text-[14px] border-b-2 border-gray-100 last:border-0 hover:bg-gray-50 hover:text-[#0065EC] transition-colors"
                            onClick={() => setHoveredMenu(null)} // Add this line to close dropdown on click
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ),
              )}
          </nav>

         
          {/* Mobile Menu Button */}
          <button
            className="xl:hidden cursor-pointer text-[#1f1fce] z-[100]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              ""
            ) : (
              <svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5H26.5M1.5 11.5H26.5" stroke="#0065EC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="bevel" />
              </svg>

            )}
          </button>
        </div>
      </header>

      {/* Spacer below header */}
      <div
        id="header-spacer"
        className="bg-white"
        style={{
          paddingTop: headerHeight ? `${headerHeight}px` : "86px",
          transition: "padding-top 0.3s ease",
        }}
      />

      {/* Overlay */}
      {isOpen && <div id="mobile-menu-overlay" className="fixed inset-0 z-40" />}

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed top-0 right-0 w-[92%] sm:w-[26rem] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Back Arrow */}
        <div className="flex items-center px-6 pt-6 pb-2 ">
          <button className="text-[#0065EC] text-2xl cursor-pointer" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FiArrowLeft />
          </button>
          {/* <span className="ml-4 text-lg font-semibold text-gray-800">Menu</span> */}
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col">
          {navItems &&
            navItems.map((item) => {
              const hasSubMenu = item.subMenus && item.subMenus.length > 0
              const isExpanded = expandedMenus[item.id]

              return (
                <div key={item.id} className="border-b border-[#f2f2f2] last:border-0 ">
                  {/* Main Menu Item */}
                  <div className="flex items-center justify-between w-full px-6 py-4">
                    <Link
                      href={item.url}
                      className="block uppercase text-left font-bold text-black text-base flex-1 focus:outline-none hover:text-[#5eb95e] transition-colors"
                      onClick={() => handleMobileNavigation(item)}
                    >
                      {item.title}
                    </Link>
                    {hasSubMenu && (
                      <button
                        className="text-[#0065EC] cursor-pointer text-xl ml-2 p-1 transition-transform duration-200"
                        onClick={() => toggleMobileSubMenu(item.id)}
                        aria-label={`${isExpanded ? "Close" : "Open"} ${item.title} submenu`}
                      >
                        {isExpanded ? <FiMinus /> : <FiPlus />}

                      </button>
                    )}
                  </div>

                  {/* Sub Menu Items */}
                  {hasSubMenu && isExpanded && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      {item.subMenus.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={'/rental-services'}
                          className="block px-8 py-3 text-sm  hover:text-[#fff] hover:bg-[#0065EC] transition-colors border-b border-gray-200 last:border-b-0"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
        </div>
        {/* SVG Gradient at Bottom */}
        <div className="w-full overflow-hidden pt-5">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 626 587"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            preserveAspectRatio="none"
          >
            <path d="M0 0.5L626 587.5H0V0.5Z" fill="url(#paint0_linear_245_3514)" />
            <defs>
              <linearGradient
                id="paint0_linear_245_3514"
                x1="1.38387e-07"
                y1="12"
                x2="-6.92197e-06"
                y2="588"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D8EBD3" stopOpacity="0.2" />
                <stop offset="1" stopColor="#D8EBD3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </>
  )
}

export default Header
