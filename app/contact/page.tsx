'use client'

import {motion} from "motion/react";
import {Card, CardContent} from "@/components/ui/card";
import {Facebook, Instagram, Mail, MapPin} from "lucide-react";

import {GENERAL_INFO, SOCIAL_LINKS} from "@/data/const";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12"
                >
                    <h1 className="mb-4 text-red-600">Contactez-nous</h1>
                    <p className="text-black max-w-3xl mx-auto text-lg">
                        Une question ? Besoin d&#39;informations ? N&#39;hésitez pas à nous contacter.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{x: 30, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="space-y-6"
                    >
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-red-600 flex-shrink-0 mt-1" size={24}/>
                                    <div>
                                        <h3 className="mb-2 text-black">Adresse</h3>
                                        <p className="text-black">
                                            Gymnase de l&#39;Église
                                            <br/>
                                            Place de l&#39;Église
                                            <br/>
                                            14760 Bretteville sur Odon, France
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-red-600 flex-shrink-0 mt-1" size={24}/>
                                    <div>
                                        <h3 className="mb-2 text-black">Email</h3>
                                        <a
                                            href={"mailto:" + GENERAL_INFO.mail}
                                            className="text-black hover:text-red-600 transition-colors"
                                        >
                                            {GENERAL_INFO.mail}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Instagram className="text-red-600 flex-shrink-0 mt-1" size={24}/>
                                    <div>
                                        <h3 className="mb-2 text-black">Instagram</h3>
                                        <a
                                            href={SOCIAL_LINKS.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-red-600 transition-colors"
                                        >
                                            @lcbobasket
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Facebook className="text-red-600 flex-shrink-0 mt-1" size={24}/>
                                    <div>
                                        <h3 className="mb-2 text-black">Facebook</h3>
                                        <a
                                            href={SOCIAL_LINKS.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-red-600 transition-colors"
                                        >
                                            @LCBOBasket
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
