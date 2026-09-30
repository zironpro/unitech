"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "vaul";
import { solutions } from "@/data/solutions";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="container-master mx-auto flex items-center justify-between py-4 px-4 md:px-0">
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
                    <Link href="/" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
                        About Us
                    </Link>
                    
                    {/* Solutions Dropdown */}
                    <div className="relative group">
                        <Link href="/solutions" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors py-6 flex items-center gap-1">
                            Solutions
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 mt-0.5"><path d="m6 9 6 6 6-6"/></svg>
                        </Link>
                        
                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-[calc(100%-1rem)] left-1/2 -translate-x-1/2 w-[800px] bg-[#fafafa] rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50 overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-zinc-900 text-lg font-semibold mb-6">Our Solutions</h3>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                    {solutions.map((sol) => (
                                        <Link href={`/solutions/${sol.id}`} key={sol.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100 transition-colors group/item">
                                            <div className="w-12 h-16 rounded-lg bg-deep-navy text-white flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform shadow-sm">
                                                {sol.icon}
                                            </div>
                                            <div className="pt-1">
                                                <h4 className="text-sm font-semibold text-zinc-900 mb-1">{sol.title}</h4>
                                                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">{sol.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/industries" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
                        Industries
                    </Link>
                </nav>

                {/* Action Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:flex bg-deep-navy text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-dark-blue transition-colors shadow-sm hover:shadow-md"
                    >
                        Contact Us
                    </Link>

                    {/* Mobile Menu Drawer */}
                    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
                        <Drawer.Trigger asChild>
                            <button className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-full border border-slate-200 text-zinc-900 hover:bg-slate-50">
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                            </button>
                        </Drawer.Trigger>
                        
                        <Drawer.Portal>
                            <Drawer.Overlay className="fixed inset-0 bg-deep-navy/40 z-50 backdrop-blur-sm" />
                            <Drawer.Content className="bg-white flex flex-col rounded-t-[2.5rem] h-auto max-h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-50 outline-none">
                                <div className="p-4 pb-8 bg-white rounded-t-[2.5rem] flex-1 flex flex-col">
                                    {/* Drag Handle */}
                                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-200 mb-8 mt-2" />
                                    
                                    {/* Content */}
                                    <div className="flex flex-col gap-6 p-4 pt-0">
                                        {/* Logo in Drawer */}
                                        <div className="mb-6 flex justify-center">
                                            <Image
                                                src="/images/Unitech-Logo.png"
                                                alt="Unitech Logo"
                                                width={150}
                                                height={42}
                                                className="object-contain"
                                            />
                                        </div>

                                        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] hover:text-zinc-500 transition-colors text-center">Home</Link>
                                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] hover:text-zinc-500 transition-colors text-center">About Us</Link>
                                        <Link href="/solutions" onClick={() => setIsOpen(false)} className="text-xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] hover:text-zinc-500 transition-colors text-center">Solutions</Link>
                                        <Link href="/industries" onClick={() => setIsOpen(false)} className="text-xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] hover:text-zinc-500 transition-colors text-center">Industries</Link>
                                        
                                        <div className="w-full h-px bg-slate-100 my-4"></div>
                                        
                                        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-deep-navy text-white px-6 py-4 rounded-lg text-center font-semibold hover:bg-dark-blue transition-colors flex items-center justify-center gap-2 mx-auto w-full max-w-xs shadow-sm">
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
