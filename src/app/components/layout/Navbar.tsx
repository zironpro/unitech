"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "vaul";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white backdrop-blur-sm border-b border-deep-navy/5">
            <div className="container-master mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative">
                    <Image
                        src="/images/Unitech-Logo.png"
                        alt="Unitech Logo"
                        width={180}
                        height={50}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-semibold text-deep-navy hover:text-electric-blue transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-semibold text-deep-navy hover:text-electric-blue transition-colors">
                        About Us
                    </Link>
                    <Link href="/solutions" className="text-sm font-semibold text-deep-navy hover:text-electric-blue transition-colors">
                        Solutions
                    </Link>
                    <Link href="/industries" className="text-sm font-semibold text-deep-navy hover:text-electric-blue transition-colors">
                        Industries
                    </Link>
                </nav>

                {/* Action Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:flex bg-electric-blue text-white px-6 py-2.5 rounded-none text-sm font-bold hover:bg-bright-blue transition-colors"
                    >
                        Contact Us
                    </Link>

                    {/* Mobile Menu Drawer */}
                    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
                        <Drawer.Trigger asChild>
                            <button className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-none border border-deep-navy/20 text-deep-navy hover:bg-slate-50">
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                            </button>
                        </Drawer.Trigger>
                        
                        <Drawer.Portal>
                            <Drawer.Overlay className="fixed inset-0 bg-deep-navy/60 z-50 backdrop-blur-sm" />
                            <Drawer.Content className="bg-white flex flex-col rounded-t-[20px] h-auto max-h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-50 outline-none">
                                <div className="p-4 pb-8 bg-white rounded-t-[20px] flex-1 flex flex-col">
                                    {/* Drag Handle */}
                                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 mb-6" />
                                    
                                    {/* Content */}
                                    <div className="flex flex-col gap-6 p-4 pt-0">
                                        {/* Logo in Drawer */}
                                        <div className="mb-4">
                                            <Image
                                                src="/images/Unitech-Logo.png"
                                                alt="Unitech Logo"
                                                width={150}
                                                height={42}
                                                className="object-contain"
                                            />
                                        </div>

                                        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] hover:text-electric-blue transition-colors">Home</Link>
                                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] hover:text-electric-blue transition-colors">About Us</Link>
                                        <Link href="/solutions" onClick={() => setIsOpen(false)} className="text-xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] hover:text-electric-blue transition-colors">Solutions</Link>
                                        <Link href="/industries" onClick={() => setIsOpen(false)} className="text-xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] hover:text-electric-blue transition-colors">Industries</Link>
                                        
                                        <div className="w-full h-px bg-slate-100 my-2"></div>
                                        
                                        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-electric-blue text-white px-6 py-3.5 rounded-none text-center font-bold hover:bg-bright-blue transition-colors flex items-center justify-center gap-2">
                                            Contact Us
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </Drawer.Content>
                        </Drawer.Portal>
                    </Drawer.Root>
                </div>
            </div>
        </header>
    );
}
