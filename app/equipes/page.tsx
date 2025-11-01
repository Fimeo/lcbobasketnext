'use client'

import {motion} from "motion/react";
import {Calendar, ExternalLink, MapPin} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {FFBB_LINKS} from "@/data/ffbb";
import {GENERAL_INFO} from "@/data/const";
import {SENIORS_TEAMS, YOUTH_TEAMS} from "@/data/teams";
import Image from 'next/image';

export default function TeamsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12"
                >
                    <h1 className="mb-4 text-red-600">Nos Équipes</h1>
                    <p className="text-black max-w-3xl mx-auto text-lg">
                        Du baby basket aux équipes seniors, découvrez les {GENERAL_INFO.teamNumber} équipes qui
                        composent
                        LCBO Basket et portent nos couleurs avec fierté.
                    </p>
                </motion.div>

                {/* Équipes Seniors */}
                <motion.section
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-red-600">Équipes Seniors</h2>
                    <div className="space-y-8">
                        {SENIORS_TEAMS.map((team, index) => (
                            <motion.div
                                key={index}
                                initial={{x: index % 2 === 0 ? -30 : 30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.6}}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                                    <div className="md:col-span-1 h-64 md:h-auto">
                                        <Image
                                            src={team.image}
                                            alt={team.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:col-span-2 p-6">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-black mb-2">{team.name}</h3>
                                                <Badge className="bg-red-600 text-white hover:bg-red-700 mb-2">
                                                    {team.division}
                                                </Badge>
                                            </div>
                                            {team.position && (
                                                <div className="bg-red-50 px-4 py-2 rounded-lg">
                                                    <p className="text-sm text-gray-600">Classement</p>
                                                    <p className="text-red-600">{team.position}</p>
                                                </div>
                                            )}
                                        </div>

                                        {team.nextMatch && (
                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar size={16} className="text-red-600"/>
                                                    <p className="text-black">Prochain match</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <Badge variant={team.nextMatch.home ? "default" : "outline"}
                                                           className={team.nextMatch.home ? "bg-red-600 text-white" : ""}>
                                                        {team.nextMatch.home ? "Domicile" : "Extérieur"}
                                                    </Badge>
                                                    <span className="text-gray-600">vs {team.nextMatch.opponent}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <span className="text-gray-600">{team.nextMatch.date}</span>
                                                </div>
                                                {team.nextMatch.home && (
                                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                                        <MapPin size={14} className="text-red-600"/>
                                                        <span>Salle Yvan Mainini, Bretteville-sur-Odon</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <a
                                            href={FFBB_LINKS.lbcodetailequipe + team.engagementID}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                                        >
                                            <span>Suivre les stats sur FFBB</span>
                                            <ExternalLink size={16}/>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Équipes Jeunes */}
                <motion.section
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="mb-8 text-red-600">Équipes Jeunes</h2>

                    {YOUTH_TEAMS.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h3 className="text-black mb-6">{category.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.teams.map((team, teamIndex) => (
                                    <motion.div
                                        key={teamIndex}
                                        initial={{y: 20, opacity: 0}}
                                        whileInView={{y: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{delay: teamIndex * 0.1, duration: 0.5}}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                    >
                                        <div className="h-48 overflow-hidden">
                                            <Image
                                                src={team.image}
                                                alt={team.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h4 className="text-black mb-2">{team.name}</h4>
                                            <div className="inline-flex items-center gap-2">
                                                <Badge className="bg-red-600 text-white hover:bg-red-700 mb-3">
                                                    {team.division}
                                                </Badge>
                                                <a
                                                    href={FFBB_LINKS + team.engagementID}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm mb-3"
                                                >
                                                    <span>Stats FFBB</span>
                                                    <ExternalLink size={14}/>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.section>

                {/* Rejoignez-nous */}
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-12 rounded-lg shadow-xl text-center"
                >
                    <h2 className="text-white mb-4">Rejoignez-nous !</h2>
                    <p className="text-white mb-6 max-w-2xl mx-auto text-lg">
                        Que vous soyez débutant ou joueur confirmé, enfant ou adulte,
                        il y a une place pour vous au LCBO Basket. Venez découvrir notre club
                        et intégrer l&#39;une de nos équipes !
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                            <p className="text-white mb-2">Inscriptions ouvertes</p>
                            <p className="text-white">Septembre - Octobre 2025</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                            <p className="text-white mb-2">Essais gratuits</p>
                            <p className="text-white">Toute l&#39;année</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}