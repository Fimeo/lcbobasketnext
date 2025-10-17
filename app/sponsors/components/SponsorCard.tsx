import {Card, CardContent} from "@/components/ui/card";
import {ExternalLink, MapPin, Phone} from "lucide-react";
import Image from 'next/image'
import { StaticImageData } from 'next/image'

export type MajorSponsor = {
    name: string;
    logo: StaticImageData;
    description: string;
    address: string;
    phone: string;
    website: string;
}

type SponsorCardProps = {
    sponsor: MajorSponsor;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
    return (
        <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            <CardContent className="p-6">
                <h3 className="text-black mb-2">{sponsor.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{sponsor.description}</p>

                <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                        <MapPin size={16} className="text-red-600 mt-1 flex-shrink-0"/>
                        <span className="text-gray-600">{sponsor.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-red-600 flex-shrink-0"/>
                        <span className="text-gray-600">{sponsor.phone}</span>
                    </div>
                </div>

                {sponsor.website && (
                    <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
                    >
                        <span>Visiter le site web</span>
                        <ExternalLink size={14}/>
                    </a>
                )}
            </CardContent>
        </Card>
    );
}
