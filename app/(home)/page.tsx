'use client'

import {motion} from "motion/react";
import {Calendar, ExternalLink, Instagram, Trophy, Users} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import courtImage from "@/assets/images/8d37ddb376b97fb051abd9bdd74bc88ce72494c7.png";
import teamWhite from "@/assets/images/33410bc9d885a3076cf9982e6d01ad10ab906fe8.png";
import teamFemale from "@/assets/images/90b46e3c499205bcfacf092af5cc74d1d49d6dc2.png";
import teamRed from "@/assets/images/e7353762a053488b29a711785b45c60f2350fa31.png";

import {GENERAL_INFO, SOCIAL_LINKS} from "@/data/const";
import {FFBB, FFBB_LINKS} from "@/data/ffbb";
import {NEWS} from "@/data/news";
import {PATHS} from "@/data/routes";

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
                <div className="absolute inset-0 grid grid-cols-3">
                    <div className="relative overflow-hidden">
                        <Image
                            src={teamWhite}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src={teamFemale}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden">
                        <Image
                            src={teamRed}
                            alt="LCBO Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-black/70 to-red-900/85"></div>

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
                            rel="noopener noreferrer"
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
                        <h2 className="text-red-600 mb-4">Nos Équipes</h2>
                        <Link
                            href={PATHS.TEAMS.path}
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                        >
                            <span>Voir toutes les équipes</span>
                            <ExternalLink size={20}/>
                        </Link>
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
                                        {FFBB.rankings.map((rank, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <p className="text-black mb-1">{rank.team}</p>
                                                    <p className="text-sm text-gray-600">{rank.division}</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Badge className="bg-red-600 text-white hover:bg-red-700">
                                                        {rank.position}
                                                    </Badge>
                                                    <span className="text-sm text-gray-600">{rank.points}</span>
                                                    <a
                                                        href={FFBB_LINKS.lbcodetailequipe + rank.engagementID}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-red-600 hover:text-red-700 text-sm"
                                                    >
                                                        <ExternalLink size={16}/>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href={FFBB_LINKS.lcboclub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mt-4 text-sm"
                                    >
                                        <span>Voir sur FFBB</span>
                                        <ExternalLink size={16}/>
                                    </a>
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
                                        {FFBB.upcomingMatches.map((match, index) => (
                                            <div
                                                key={index}
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <p className="text-black">{match.team}</p>
                                                    <Badge variant={match.home ? "default" : "outline"}
                                                           className={match.home ? "bg-red-600 text-white" : ""}>
                                                        {match.home ? "Domicile" : "Extérieur"}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-1">
                                                    vs {match.opponent}
                                                </p>
                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <span>{match.date}</span>
                                                    <span>•</span>
                                                    <span>{match.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
                        {NEWS().map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{y: 30, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                                    {item.image && (
                                        <div className="overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover hover:scale-98 rounded-md transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 text-red-600 mb-2">
                                            <Calendar size={16}/>
                                            <span className="text-red-600 text-sm">{item.date}</span>
                                        </div>
                                        <h3 className="mb-2 text-black">{item.title}</h3>
                                        {item.location && (
                                            <p className="text-black mb-2">{item.location}</p>
                                        )}
                                        {item.description}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                            src={courtImage}
                            alt="LCBO Basket Court"
                            className="w-full h-1/2 object-cover object-center"
                        />
                    </div>
                </div>
            </motion.section>
        </div>
    );
}