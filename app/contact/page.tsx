'use client'

import {motion} from "motion/react";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Instagram, Mail, MapPin} from "lucide-react";
import {useState} from "react";
import {toast} from "sonner";

import {GENERAL_INFO, SOCIAL_LINKS} from "@/data/const";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                    {/* Contact Form */}
                    <motion.div
                        initial={{x: -30, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="mb-6 text-red-600">Envoyez-nous un message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-black">
                                            Nom complet *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jean Dupont"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-black">
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jean.dupont@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-black">
                                            Téléphone
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+33 6 12 34 56 78"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-black">
                                            Sujet *
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Inscription, renseignement..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-2 text-black">
                                            Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Votre message..."
                                            rows={6}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                                    >
                                        Envoyer le message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
