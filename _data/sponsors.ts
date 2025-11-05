import logoDefault from '@/assets/images/logo/lcbo_logo.png';
import logoCA from "@/assets/images/logo/logo_CA.png";
import logoSupply from "@/assets/images/logo/logo_supp.png";
import logoTMC from "@/assets/images/logo/logo_tmc.png";
import logoBSO from "@/assets/images/logo/logo_bso.png";
import logoConseil from "@/assets/images/logo/logo_conseil_dep.jpeg";
import logoComite from "@/assets/images/logo/logo_comite_calvados.png";
import logoLigue from "@/assets/images/logo/logo_ligue_nor.png";
import logoJeff from "@/assets/images/logo/logo_jeff.png";
import logoPreau from "@/assets/images/logo/logo_lepreau.jpeg";
import logoVin1000 from "@/assets/images/logo/logo_vin_1000.jpeg";
import logoCave from "@/assets/images/logo/logo_cave_etienne.jpg";
import logoHSD from "@/assets/images/logo/logo_hsd.png";
import logoPubNPose from "@/assets/images/logo/logo_pubnpose.svg";
import logoBatitec from "@/assets/images/logo/logo_batitec.jpg";
import logoDRD from "@/assets/images/logo/logo_drd.svg";
import logoSerrurerier from "@/assets/images/logo/logo_serrurerie_voisin.svg";
import logoMacDo from "@/assets/images/logo/logo_mcdo.png";
import logoLaserGame from "@/assets/images/logo/logo_laser_game.svg";
import logoJerome from "@/assets/images/logo/logo_jerome_formation.png";
import logoE2SE from "@/assets/images/logo/logo_e2se.svg";
import logoEquipClub from "@/assets/images/logo/logo_equip_club.svg";
import logoKinesio from "@/assets/images/logo/logo_kinesio.svg";
import logoAutovision from "@/assets/images/logo/logo_autovision.jpeg";
import logoCTA from "@/assets/images/logo/logo_cta14.svg";
import logoProfilPlus from "@/assets/images/logo/logo_profilplus.jpeg";
import {StaticImageData} from "next/image";

export interface SponsorType {
    name: string;
    logo: StaticImageData,
    website?: string;
    description?: string;
    address?: string;
    phone?: string;
    category?: string;
    facebook?: string;
}


export function GetSponsors(): SponsorType[] {
    const sponsors: SponsorType[] = [];
    sponsors.push(...MajorSponsors())
    sponsors.push(...OfficialSponsors())
    sponsors.push(...OtherSponsors())
    return sponsors;
}

export function MajorSponsors(): SponsorType[] {
    return [
        {
            name: "Crédit Agricole",
            logo: logoCA,
            description: "Le Crédit agricole, anciennement surnommé la« Banque verte » du fait de son activité d’origine au service du monde agricole, est le plus grand réseau de banques coopératives et mutualistes au monde.",
            address: "12 Longue Vue des photographes, 14111 Louvigny",
            phone: "02 31 55 13 01",
            website: "https://www.credit-agricole.fr/ca-normandie/particulier.html",
        },
        {
            name: "SUPPLY SHOP / SUPPLY WEB",
            logo: logoSupply,
            description: "Supplyshop met les commerces de proximité caennais à portée de clic ! Start-up lancée en 2018, Supplyshop est un concept imaginé par des caennais pour les caennais.",
            address: "9 Rue Melingue, 14000 Caen",
            phone: "02 46 88 00 24",
            website: "https://supplyshop.fr/",
        },
        {
            name: "TMC",
            logo: logoTMC,
            description: "Traitement des Métaux du Calvados est une entreprise familiale fondée en 1999 à Verson. Ils proposent une large gamme de traitements sur Aluminium, Acier, Inox, Cuivre, Laiton et Bronze.",
            address: "19 Rue du Bel air, 14790 Verson",
            phone: "02 31 71 00 99",
            website: "https://tmc-verson.com/",
        }
    ]
}

export function OfficialSponsors(): SponsorType[] {
    return [
        {
            name: "Bretteville sur Odon",
            logo: logoBSO,
            website: "http://www.brettevillesurodon.fr",
        },
        {
            name: "Conseil départemental",
            logo: logoConseil,
            website: "https://www.calvados.fr/accueil.html",
        },
        {
            name: "Comité calvados basketball",
            logo: logoComite,
            website: "https://www.comitebasket14.fr",
        },
        {
            name: "Ligue normandie basketball",
            logo: logoLigue,
            website: "https://normandiebasketball.fr",
        }
    ]
}

export function OtherSponsors(): SponsorType[] {
    return [
        {
            name: "Jeff de Bruges",
            logo: logoJeff,
            address: "22 Rue Saint-Jean, 14000 Caen",
            phone: "02 31 38 84 28",
            website: "https://www.jeff-de-bruges.com/jeff-de-bruges-caen-saint-jean",
            category: "Biscuiterie – chocolatier",
        },
        {
            name: "Le préau",
            address: "14 Rue Arcisse de Caumont, 14000 Caen",
            phone: "09 67 50 90 46",
            facebook: "https://www.facebook.com/p/Le-Pr%C3%A9au-100083423166561/",
            category: "Boissons – Vins – Bars",
            logo: logoPreau,
        },
        {
            name: "Vins 1000 lieux",
            address: "134 Rue du Général Leclerc, 14790 Verson",
            category: "Boissons – Vins – Bars",
            phone: "02 31 85 67 74",
            website: "https://www.vins1000lieux.com",
            logo: logoVin1000,
        },
        {
            name: "Cave Saint Etienne",
            address: "92 Boulevard André Detolle, 14000 Caen",
            phone: "02 31 38 26 80",
            website: "https://www.cavesaintetienne.com/",
            logo: logoCave,
            category: "Boissons – Vins – Bars",
        },
        {
            name: "HSD",
            address: "24 Rue Villons les Buissons, 14000 Caen",
            phone: "06 08 25 23 63",
            website: "https://hsdprecisiondesign.fr",
            logo: logoHSD,
            category: "Enseignes - Sérigraphie",
        },
        {
            name: "PUB N' POSE",
            address: "17 Rue des 4 Vents, 14790 Verson",
            phone: "02 31 26 21 63",
            website: "https://www.pubnpose.com",
            logo: logoPubNPose,
            category: "Enseignes - Sérigraphie",
        },
        {
            name: "BATITEC",
            logo: logoBatitec,
            address: "5 Rue des 4 Vents, 14790 Verson",
            phone: "02 31 26 06 26",
            website: "https://www.batitec-sa.fr",
            category: "Architecture - Construction",
        },
        {
            name: "Martina Lebeau",
            address: "16 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "02 31 75 22 85",
            website: "https://www.lebeau-martina.fr",
            category: "Chauffage - Électricité - Plomberie",
            logo: logoDefault,
        },
        {
            name: "DRD",
            category: "Portail – Fenêtre",
            website: "https://www.drdmenuiserie.fr",
            phone: "02 31 73 30 60",
            address: "4 Rue du Long Douet, 14760 Bretteville-Sur-Odon",
            logo: logoDRD,
        },
        {
            name: "Serrurerie Voisin",
            category: "Serrurerie",
            address: "88 Quai Vendeuvre, 14000 Caen",
            phone: "02 31 84 68 21",
            website: "https://www.serrurerie-voisin-caen.fr/",
            logo: logoSerrurerier,
        },
        {
            name: "McDonald's",
            category: "Restaurants",
            address: "1 Avenue du Fresne, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 64 27",
            website: "https://www.restaurants.mcdonalds.fr/restaurants/mcdonalds-bretteville-sur-odon/917",
            logo: logoMacDo,
        },
        {
            name: "Laser games",
            address: "19 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "02 31 74 44 92",
            website: "https://www.lasergames-caen.com/",
            logo: logoLaserGame,
            category: "Loisirs",
        },
        {
            name: "Jérôme formation",
            category: "Auto-école",
            address: "33 Rue Guillaume le Conquérant, 14000 Caen",
            phone: "02 31 50 25 27",
            logo: logoJerome,
            website: "http://autoecolejerome.fr/",
        },
        {
            name: "E2SE",
            category: "Éducation",
            address: "4 Rue des Mouettes, 14000 Caen",
            phone: "02 31 53 30 30",
            logo: logoE2SE,
            website: "https://www.e2se.fr/",
        },
        {
            name: "Équip'Club",
            category: "Équipementier",
            address: "74 Rue des Rosiers, 14000 Caen",
            phone: "02 31 86 66 67",
            logo: logoEquipClub,
            facebook: "https://www.facebook.com/equipclubcaen",
        },
        {
            name: "Cosseron Marie & Fils",
            category: "Pompes Funèbres",
            address: "8 Rue froide, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 60 06",
            website: "https://www.cosseronpfdelodon.com/",
            logo: logoDefault,
        },
        {
            name: "Karine LEFEVRE - Kinésiologue",
            category: "Soin",
            address: "7 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "06 15 18 61 62",
            logo: logoKinesio,
            website: "http://karinekinesiologie.e-monsite.com/",
        },
        {
            name: "Autovision",
            category: "Garage - Carrosserie - Autres",
            address: "120 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 87 87",
            website: "https://www.cta14.com/",
            logo: logoAutovision,
        },
        {
            name: "CTA 14",
            category: "Garage - Carrosserie - Autres",
            address: "120 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 87 87",
            logo: logoCTA,
            website: "https://www.cta14.com/",
        },
        {
            name: "Profil +",
            category: "Garage - Carrosserie - Autres",
            address: "12 Rue du Fresne, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 52 00",
            logo: logoProfilPlus,
            website: "https://www.profilplus.fr/agence/153-bretteville-sur-odon",
        },
        {
            name: "MHGM",
            category: "Transports",
            address: "26 Avenue de thiès, 14000 Caen",
            logo: logoDefault,
        }
    ];
}
