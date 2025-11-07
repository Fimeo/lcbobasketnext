import {Card, CardContent} from "@/components/ui/card";
import {ExternalLink, Facebook, MapPin, Phone} from "lucide-react";
import {GENERAL_INFO} from "@/data/const";
import Image from 'next/image';
import {SponsorType} from "@/data/sponsors";

type SponsorCardProps = {
    sponsor: SponsorType;
}

export default function SponsorCardLite({sponsor}: SponsorCardProps) {
    return (
        <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden gap-1">
            <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                <Image
                    src={sponsor.logo || GENERAL_INFO.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            <CardContent className="p-6">
                <h3 className="text-black mb-2">{sponsor.name}</h3>
                {sponsor.category && (
                    <p className="text-gray-600 text-sm mb-4">{sponsor.category}</p>
                )}
                <div className="space-y-2 mb-4">
                    {sponsor.address && (
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin size={16} className="text-red-600 mt-1 flex-shrink-0"/>
                            <span className="text-gray-600">{sponsor.address}</span>
                        </div>
                    )}
                    {sponsor.phone && (
                        <div className="flex items-center gap-2 text-sm">
                            <Phone size={16} className="text-red-600 flex-shrink-0"/>
                            <span className="text-gray-600">{sponsor.phone}</span>
                        </div>
                    )}
                </div>
                {sponsor.website && (
                    <a
                        href={sponsor.website}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
                    >
                        <span>Visiter le site web</span>
                        <ExternalLink size={14}/>
                    </a>
                )}
                {sponsor.facebook && (
                    <a
                        href={sponsor.facebook}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
                    >
                        <Facebook size={20}/>
                        <span>Page facebook</span>
                    </a>
                )}
            </CardContent>
        </Card>
    );
}
