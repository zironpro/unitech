import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#fafafa] border-t border-slate-100 py-16 lg:py-20 mt-auto">
            <div className="container-master mx-auto px-4 md:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/Unitech-Logo.png"
                                alt="Unitech Logo"
                                width={180}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed pr-4">
                            Infrastructure that connects.<br />
                            Technology that performs.
                        </p>
                    </div>

                    {/* Solutions Column */}
                    <div className="col-span-1 flex flex-col gap-4">
                        <h3 className="font-semibold text-zinc-900 text-lg mb-2 font-[family-name:var(--font-ansage)]">Solutions</h3>
                        <Link href="/solutions/structured-cabling" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Structured Cabling</Link>
                        <Link href="/solutions/datacenter-solution" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Data Centers</Link>
                        <Link href="/solutions/cctv" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Security & Surveillance</Link>
                        <Link href="/solutions/ups" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Power Protection</Link>
                        <Link href="/solutions/wireless" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Wireless & LTE</Link>
                        <Link href="/solutions/fiber-optic" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Fiber Optics</Link>
                    </div>

                    {/* General Column */}
                    <div className="col-span-1 flex flex-col gap-4">
                        <h3 className="font-semibold text-zinc-900 text-lg mb-2 font-[family-name:var(--font-ansage)]">General</h3>
                        <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">About Us</Link>
                        <Link href="/solutions" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Solutions</Link>
                        <Link href="/industries" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Industries</Link>
                        <Link href="/contact" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Contact Us</Link>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
                        <h3 className="font-semibold text-zinc-900 text-lg mb-2 font-[family-name:var(--font-ansage)]">Contact</h3>

                        <div className="flex items-start gap-4">
                            <svg className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+971504243288" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">+971 50 424 3288</a>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:Info@unitechdistribution.com" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors break-all">
                                Info@unitechdistribution.com
                            </a>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-medium text-zinc-500">Dubai, United Arab Emirates</span>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium text-zinc-500">Mon - Fri 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold text-zinc-400">
                    <p>
                        &copy; {new Date().getFullYear()} Unitech Distribution. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
