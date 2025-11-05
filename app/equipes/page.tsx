'use client'

import teamWhite from "@/assets/images/33410bc9d885a3076cf9982e6d01ad10ab906fe8.png";

import {motion} from "motion/react";
import {Calendar, ExternalLink, MapPin} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {FFBB_LINKS, IsHome, NextMatchByEngagement, PositionLabel, RankingFromEngagement} from "@/data/ffbb";
import {FormatShortDate, FormatTime, GENERAL_INFO} from "@/data/const";
import {Engagement, SeniorTeams, YouthTeamsByCategoryReducer} from "@/data/teams";

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
                        {SeniorTeams().map((team: Engagement, index) => {
                            const ranking = RankingFromEngagement(team.id);
                            const nextMatch = NextMatchByEngagement(team.id);
                            return (
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
                                            src={teamWhite}
                                            alt={team.idCompetition.nom}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:col-span-2 p-6">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-black mb-2">{team.idCompetition.nom}</h3>
                                                <Badge className="bg-red-600 text-white hover:bg-red-700 mb-2">
                                                    {team.idCompetition.code}
                                                </Badge>
                                            </div>
                                            {ranking !== undefined && (
                                                <div className="bg-red-50 px-4 py-2 rounded-lg">
                                                    <p className="text-sm text-gray-600">Classement</p>
                                                    <p className="text-red-600">{PositionLabel(ranking.position)}</p>
                                                </div>
                                            )}
                                        </div>

                                        {nextMatch !== undefined && (
                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar size={16} className="text-red-600"/>
                                                    <p className="text-black">Prochain match</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <Badge variant={IsHome(nextMatch) ? "default" : "outline"}
                                                           className={IsHome(nextMatch) ? "bg-red-600 text-white" : ""}>
                                                        {IsHome(nextMatch) ? "Domicile" : "Extérieur"}
                                                    </Badge>
                                                    <span className="text-gray-600">vs {IsHome(nextMatch) ? nextMatch.nomEquipe2 : nextMatch.nomEquipe1}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <span className="text-gray-600">{FormatShortDate(nextMatch.date_rencontre)} {FormatTime(nextMatch.date_rencontre)}</span>
                                                </div>
                                                {nextMatch.salle != undefined && (
                                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                                        <MapPin size={14} className="text-red-600"/>
                                                        <span>{nextMatch.salle.libelle} {nextMatch.salle.commune.libelle}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <a
                                            href={FFBB_LINKS.lbcodetailequipe + team.id}
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
                        )})}
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

                    {Object.entries(YouthTeamsByCategoryReducer()).map(([categoryCode, teams], categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h3 className="text-black mb-6">{categoryCode}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {teams.map((team, teamIndex) => (
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
                                                src={teamWhite}
                                                alt={team.idCompetition.nom}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h4 className="text-black mb-2">{team.idCompetition.nom}</h4>
                                            <div className="inline-flex items-center gap-2">
                                                <Badge className="bg-red-600 text-white hover:bg-red-700 mb-3">
                                                    {team.idCompetition.code}
                                                </Badge>
                                                <a
                                                    href={FFBB_LINKS.lbcodetailequipe + team.id}
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