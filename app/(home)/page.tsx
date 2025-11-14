'use client'

import {motion} from "motion/react";
import {Calendar, ExternalLink, Instagram, Trophy, Users} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import NewsCard from "@/components/actu/NewsCard";

import {FormatTime, GENERAL_INFO, SOCIAL_LINKS} from "@/data/const";
import {FFBB_LINKS, IsHome, PositionLabel, RankingData, Rankings, Rencontre, UpcomingMatchesByDate} from "@/data/ffbb";
import {NEWS} from "@/data/news";
import {PATHS} from "@/data/routes";
import {GetSponsors} from "@/data/sponsors";
import {TeamByEngagementID, TeamPictureByEngagementID} from "@/data/teams";

import {terrain_jpg} from '@/assets/index';

const stats = [
    {icon: Users, label: "Licenciés", value: GENERAL_INFO.licenceNumber},
    {icon: Trophy, label: "Équipes", value: GENERAL_INFO.teamNumber},
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
                className="relative text-white py-20 md:py-32 overflow-hidden"
            >
                {/* Background images collage */}
                <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                        <Image
                            src={TeamPictureByEngagementID("200000005143527")}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src={TeamPictureByEngagementID("200000005143555")}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/*<div className="relative overflow-hidden">
                        <Image
                            src={TeamPictureByEngagementID("200000005146818")}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    */}
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black-900/90 via-black/20 to-black-900/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.2, duration: 0.6}}
                        className="text-center"
                    >
                        <h1 className="text-white mb-4 drop-shadow-2xl">LCBO Basket</h1>
                        <p className="text-white text-xl md:text-2xl mb-6 drop-shadow-lg">
                            Passion, Excellence, Esprit d&#39;Équipe
                        </p>
                        <p className="text-white text-lg mb-8 max-w-3xl mx-auto drop-shadow-lg">
                            Rejoignez un club où le basketball se vit pleinement, de l&#39;école de basket aux équipes
                            seniors.
                        </p>
                        <a
                            href={SOCIAL_LINKS.instagram}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
                        >
                            <Instagram size={20}/>
                            <span className="text-red-600">Suivez-nous sur Instagram</span>
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.6, duration: 0.6}}
                className="py-12 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: 0.8 + index * 0.1, duration: 0.4}}
                            >
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <div className="bg-red-600 p-4 rounded-full">
                                            <stat.icon className="text-white" size={32}/>
                                        </div>
                                        <div>
                                            <div className="text-3xl text-red-600">{stat.value}</div>
                                            <div className="text-black">{stat.label}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Teams & Rankings Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-red-600 mb-4">Classements et résultats</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Classements */}
                        <motion.div
                            initial={{x: -30, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-red-600 mb-4 flex items-center gap-2">
                                        <Trophy size={24} className="text-red-600"/>
                                        Classements
                                    </h3>
                                    <div className="space-y-4">
                                        {Rankings().map((rank: RankingData, index) => (
                                            <Link
                                                key={index}
                                                href={`${PATHS.TEAMS.path}/${rank.engagementID}`}
                                                className="text-red-600 hover:text-red-700 text-sm ml-3"
                                            >
                                                <div
                                                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center">
                                                            <p className="text-black">{TeamByEngagementID(rank.engagementID)?.idCompetition.code}</p>
                                                        </div>
                                                        <Badge className="bg-red-600 text-white hover:bg-red-700 shrink-0">
                                                            {PositionLabel(rank.position)}
                                                        </Badge>
                                                    </div>
                                                    <div
                                                        className="flex items-center justify-between text-sm text-gray-600">
                                                        <span>{TeamByEngagementID(rank.engagementID)?.idCompetition.nom}</span>
                                                        <span>{rank.points} pts</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href={FFBB_LINKS.club}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mt-4 text-sm"
                                    >
                                        <span>Voir toutes les stats sur FFBB</span>
                                        <ExternalLink size={16}/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Prochains matchs */}
                        <motion.div
                            initial={{x: 30, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-red-600 mb-4 flex items-center gap-2">
                                        <Calendar size={24} className="text-red-600"/>
                                        Prochains Matchs
                                    </h3>
                                    <div className="space-y-4">
                                        {/* Group matches by date */}
                                        {Object.entries(UpcomingMatchesByDate()).slice(0,2).map(([date, matches]) => (
                                            <div key={date}>
                                                <div className="text-lgtext-gray-800 font-medium mb-2">{date}</div>
                                                <div className="space-y-2">
                                                    {matches.map((match: Rencontre, index) => (
                                                        <Link
                                                            key={index}
                                                            href={`${PATHS.TEAMS.path}/${IsHome(match) ? match.idEngagementEquipe1.id : match.idEngagementEquipe2.id}`}
                                                            className="text-red-600 hover:text-red-700 text-sm ml-3"
                                                        >
                                                            <div
                                                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                            >
                                                                <div className="flex items-center justify-between mb-1">
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-black">
                                                                            {IsHome(match) ?
                                                                                TeamByEngagementID(match.idEngagementEquipe1.id)?.idCompetition.code :
                                                                                TeamByEngagementID(match.idEngagementEquipe2.id)?.idCompetition.code}
                                                                            {" "}
                                                                            <span
                                                                                className="text-sm text-gray-600">vs {IsHome(match) ? match.nomEquipe2 : match.nomEquipe1}</span>
                                                                        </p>
                                                                    </div>
                                                                    <Badge
                                                                        variant={IsHome(match) ? "default" : "outline"}
                                                                        className={`${IsHome(match) ? "bg-red-600 text-white" : ""} shrink-0 ml-2`}
                                                                    >
                                                                        {IsHome(match) ? "Dom." : "Ext."}
                                                                    </Badge>
                                                                </div>
                                                                <div
                                                                    className="text-sm text-gray-600">{FormatTime(match.date_rencontre)}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={PATHS.TEAMS.path}
                                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mt-4 text-sm"
                                    >
                                        <span>Voir toutes les équipes</span>
                                        <ExternalLink size={20}/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        className="text-center mb-12 text-red-600"
                    >
                        Actualités
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {NEWS().slice(0, 4).map((item, index) => (
                            <NewsCard key={index} news={item} index={index}/>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors Section*/}
            <motion.section
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.6, duration: 0.6}}
                className="py-12 bg-white">
                <motion.h2
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    className="text-center mb-12 text-red-600"
                >
                    Sponsors
                </motion.h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap overflow-hidden justify-around">
                    {GetSponsors().filter((e) => e.website != undefined).map((sponsor, index) => (
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
                                ) :
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-10 w-20 object-contain opacity-80"
                                />
                            }
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Court Image Section */}
            <motion.section
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="py-16 bg-gray-50"
            >
                <div className="w-2/3 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-8 text-red-600">Notre Salle</h2>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={terrain_jpg}
                            alt="LCBO Basket Court"
                            className="w-full h-1/2 object-cover object-center"
                        />
                    </div>
                </div>
            </motion.section>
        </div>
    );
}