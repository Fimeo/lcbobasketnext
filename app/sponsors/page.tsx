'use client'

import {motion} from "motion/react";
import {MAJOR_SPONSORS, OFFICIAL_SPONSORS, SPONSORS} from "@/data/sponsors";
import {GENERAL_INFO} from "@/data/const";
import {Mail} from "lucide-react";
import SponsorCard from "./components/SponsorCard";
import SponsorCardLite from "./components/SponsorCardLite";

export default function SponsorsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12"
                >
                    <h1 className="mb-4 text-red-600">Nos Partenaires</h1>
                    <p className="text-black max-w-3xl mx-auto text-lg">
                        Le LCBO Basket est un club avec pour valeurs principales : convivialité, esprit familial et
                        compétitivité.
                        Être partenaire de notre club, c’est vous offrir une visibilité aux niveaux local, départemental
                        et régional !
                    </p>
                </motion.div>

                {/* Partenaires Majeurs */}
                <motion.section
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-red-600">Partenaires Majeurs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {MAJOR_SPONSORS.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{scale: 0.95, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                            >
                                <SponsorCard sponsor={sponsor}/>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Partenaires Officiels */}
                <motion.section
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-red-600">Partenaires Officiels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {OFFICIAL_SPONSORS.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{y: 20, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                            >
                                <SponsorCardLite sponsor={sponsor}/>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Autres Partenaires */}
                <motion.section
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-red-600">Autres Partenaires</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SPONSORS.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{y: 20, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                            >
                                <SponsorCardLite sponsor={sponsor}/>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Devenir Partenaire */}
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-12 rounded-lg shadow-xl"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-4">Devenez Partenaire</h2>
                        <p className="text-white mb-6 text-lg">
                            Rejoignez nos partenaires et soutenez le développement du basketball local.
                            Ensemble, développons les talents de demain et faisons rayonner notre club.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
                            <h3 className="text-white mb-4">Pourquoi devenir partenaire ?</h3>
                            <ul className="text-left text-white space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Visibilité auprès de nos {GENERAL_INFO.licenceNumber}+ licenciés et leurs familles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Présence lors de nos événements et matchs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Communication sur nos réseaux sociaux et notre site web</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-white">•</span>
                                    <span>Soutien à une association sportive locale</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex items-center gap-2 text-white">
                                <Mail size={20}/>
                                <span><a href={"mailto:" + GENERAL_INFO.mail}>{GENERAL_INFO.mail}</a></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}