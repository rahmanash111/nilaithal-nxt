"use client";

import logo from "../../assets/full-logo.webp"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import useModal from "../store/modal";
import ContactModal from "./ContactModal";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image className="h-[30px] w-[150px] lg:h-[30px] lg:w-[150px]" src={logo} alt="header-logo" />
    </Link>
  );
}

export default function Header() {

  const isModalOpen = useModal((state) => state.isModalOpen);

  const [isOpen, setIsOpen] = useState(false);

  const overlayRef = useRef(null);
  const drawerRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  // Lock the drawer fully off-screen before anything can paint.
  useEffect(() => {
    // gsap.set(drawerRef.current, { xPercent: -100 });
    // gsap.set(overlayRef.current, { autoAlpha: 0 });
  }, []);

  // Drive the open/close animation whenever `isOpen` changes.
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power1.out",
        });
        gsap.to(drawerRef.current, {
          xPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.fromTo(
          itemRefs.current,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            delay: 0.18,
            ease: "power2.out",
          }
        );
      } else {
        // gsap.to(drawerRef.current, {
        //   xPercent: -100,
        //   duration: 0.4,
        //   ease: "power3.in",
        // });
        // gsap.to(overlayRef.current, {
        //   autoAlpha: 0,
        //   duration: 0.3,
        //   delay: 0.05,
        // });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Desktop logo — left, 1024px and up */}
        <Logo className="hidden lg:flex" />
        {/* Mobile hamburger — left, below 1024px */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>

        {/* Mobile logo — right, below 1024px */}
        <Logo className="lg:hidden" />

        {/* Desktop nav — right, 1024px and up */}
        <nav className="hidden items-center gap-16 lg:flex">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-lg font-medium text-gray-700 transition hover:text-(--primary-light)"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a href="tel:+91 99629 93939" className="hidden md:flex items-center gap-2 border-2 py-1 px-4 border-[#469d2c] rounded-full"><Phone width={18} color="#469d2c" /><span className="text-sm">+91 99629 99999</span></a>
      </div>

      {/* {
        isModalOpen && <div onClick={() => setIsOpen(false)} className="fixed top-0 left-0 h-screen w-screen z-40 bg-black/50 lg:hidden" >

        </div>
      } */}

      <ContactModal />

      {/* Overlay */}
      {isOpen && <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed top-0 left-0 h-screen w-screen z-40 bg-black/50 lg:hidden"
      />}

      {/* Mobile drawer — 80% width, full height, slides in from the left */}
      {isOpen && <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 z-50 flex w-4/5 h-screen flex-col bg-white shadow-2xl lg:hidden"
      >
        {/* Drawer top row: logo left, close button right */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col gap-1 px-6 py-6 bg-white">
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              ref={(el) => (itemRefs.current[i] = el)}
              href={href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 opacity-0 transition hover:bg-brand-green/10 hover:text-brand-green"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>}
    </header>
  );
}
