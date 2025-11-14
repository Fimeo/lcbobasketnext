'use client'

import {motion} from "motion/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Clock, Euro, ExternalLink, MapPin} from "lucide-react";
import {planning20252026_jpg} from '@/assets/index';
import {PATHS} from "@/data/routes";
import {GYMNASES, TARIFS} from "@/data/infos";
import Link from 'next/link';
import Image from "next/image";

export default function InfosPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12"
                >
                    <h1 className="text-red-600 mb-4">Informations Pratiques</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Toutes les informations dont vous avez besoin pour rejoindre le LCBO Basket :
                        tarifs des licences, planning des entraînements et nos différents gymnases.
                    </p>
                </motion.div>

                {/* Tarifs Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Euro className="text-red-600" size={32}/>
                        <h2 className="text-red-600">Tarifs des licences - Saison 2025/2026</h2>
                    </div>

                    <Card className="shadow-lg">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-red-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Catégorie</th>
                                        <th className="px-6 py-4 text-left">Année de naissance</th>
                                        <th className="px-6 py-4 text-right">Tarif</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {TARIFS.map((tarif) => (
                                        <tr
                                            key={tarif.category}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                            {tarif.category}
                          </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{tarif.birthYears}</td>
                                            <td className="px-6 py-4 text-right text-red-600">
                                                {tarif.price}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <div
                        className="mt-4 text-gray-600 text-sm"
                    >
                        <p>
                            * Ces tarifs incluent la licence FFBB, l&#39;assurance et l&#39;accès à tous les
                            entraînements de la saison.
                            Des facilités de paiement sont disponibles sur demande.
                        </p>
                    </div>
                </motion.section>

                {/* Gymnases Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-red-600" size={32}/>
                        <h2 className="text-red-600">Nos Gymnases</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {GYMNASES.map((gymnase, index) => (
                            <motion.div
                                key={gymnase.name}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-red-600 flex items-center gap-2">
                                            <MapPin size={20}/>
                                            {gymnase.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-3">{gymnase.address}</p>
                                        <a
                                            href={`https://www.google.com/maps?q=${gymnase.lat},${gymnase.lng}`}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
                                        >
                                            Ouvrir dans Google Maps
                                            <ExternalLink size={16}/>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Planning Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-red-600" size={32}/>
                        <h2 className="text-red-600">Planning des entraînements</h2>
                    </div>

                    <Card className="shadow-lg overflow-hidden">
                        <CardContent className="p-6">
                            <p className="text-gray-600 mb-6">
                                Retrouvez ci-dessous le planning hebdomadaire des entraînements de toutes nos équipes.
                                Les entraînements se déroulent dans nos trois gymnases selon les disponibilités.
                            </p>

                            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-6">
                                <Image
                                    src={planning20252026_jpg}
                                    alt="Planning des entraînements LCBO Basket"
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <strong className="text-red-600">Note :</strong> Les horaires peuvent être sujets
                                    à modification. En cas de doute, n&#39;hésitez pas à nous contacter ou à consulter
                                    nos réseaux sociaux pour les dernières mises à jour.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center"
                >
                    <Card className="bg-red-600 text-white shadow-xl">
                        <CardContent className="py-12 px-6">
                            <h2 className="text-white mb-4">Prêt à nous rejoindre ?</h2>
                            <p className="mb-6 max-w-2xl mx-auto">
                                Venez nous rencontrer lors d&#39;un entraînement !
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    href={PATHS.CONTACT.path}
                                    className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
                                >
                                    Nous contacter
                                </Link>
                                <Link
                                    href={PATHS.TEAMS.path}
                                    className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
                                >
                                    Découvrir nos équipes
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </div>
        </div>
    );
}
