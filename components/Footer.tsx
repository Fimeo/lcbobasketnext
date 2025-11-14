import {Facebook, Instagram, Mail, MapPin} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {GENERAL_INFO, SOCIAL_LINKS} from "@/data/const";
import {MainSponsors} from "@/data/sponsors";
import {PATHS} from "@/data/routes";

export default async function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo et description */}
                    <div className="col-span-1">
                        <Image
                            src={GENERAL_INFO.logo}
                            alt="LCBO Basket Logo"
                            className="w-24 h-24 object-contain mb-4"
                        />
                        <p className="text-gray-400 text-sm">
                            Passion, Excellence, Esprit d&#39;Équipe depuis 1972
                        </p>
                    </div>

                    {/* Liens utiles */}
                    <div>
                        <h3 className="text-white mb-4">Liens Utiles</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={PATHS.HOME.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.HOME.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.ACTUALITE.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.ACTUALITE.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.HISTORY.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.HISTORY.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.SPONSORS.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.SPONSORS.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.TEAMS.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.TEAMS.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.INFOS.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.INFOS.label}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PATHS.CONTACT.path}
                                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                                >
                                    {PATHS.CONTACT.label}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail size={16} className="text-red-600"/>
                                <span><a href={"mailto:" + GENERAL_INFO.mail}>{GENERAL_INFO.mail}</a></span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400 text-sm">
                                <MapPin size={16} className="text-red-600 mt-1 flex-shrink-0"/>
                                <span>{GENERAL_INFO.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <h3 className="text-white mb-4">Suivez-nous</h3>
                        <a
                            href={SOCIAL_LINKS.instagram}
                            target="_blank"
                            className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors text-sm mb-4"
                        >
                            <Instagram size={20}/>
                            <span>@lcbobasket</span>
                        </a>
                        <a href={SOCIAL_LINKS.facebook}
                           target="_blank"
                           className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors text-sm mb-4"
                        >
                            <Facebook size={20}/>
                            <span>LCBO Basket</span>
                        </a>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <h4 className="text-white text-center mb-4 text-sm">Nos Partenaires Principaux</h4>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {MainSponsors().map((sponsor, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 rounded-lg hover:scale-105 transition-transform"
                            >
                                {sponsor.website ? (
                                    <Link href={sponsor.website}>
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="h-10 w-20 object-contain opacity-80"
                                        />
                                    </Link>
                                ):(
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="h-10 w-20 object-contain opacity-80"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; 2025 LCBO Basket. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
