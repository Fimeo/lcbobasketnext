'use client'

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from "motion/react";
import {Menu, X} from "lucide-react";
import {PATHS} from "@/data/routes";
import Image from 'next/image'
import {GENERAL_INFO} from "@/data/const";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return location === "/";
        }
        return location === path;
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={GENERAL_INFO.logo}
                            alt="LCBO Basket logo"
                            className="h-12 w-12 object-contain"
                        />
                        <span className="text-red-600">LCBO Basket</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6">
                        {Object.values(PATHS).map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-3 py-2 transition-colors ${
                                    isActive(item.path)
                                        ? "text-red-600 border-b-2 border-red-600"
                                        : "text-black hover:text-red-600"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {Object.values(PATHS).map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block w-full text-left px-3 py-2 ${
                                            isActive(item.path)
                                                ? "text-red-600 bg-red-50"
                                                : "text-black"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}