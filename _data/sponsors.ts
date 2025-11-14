import {StaticImageData} from "next/image";

import {
    a_tri_home_png,
    arttif_png,
    bso_png,
    comite_calvados_png,
    cphoto_png,
    cre_habitat_png,
    desbont_png,
    drd_png,
    emzel_png,
    Foissier_CMJN_contour_png,
    fossey_png,
    freres_chaussettes_png,
    hG_png,
    home_me_png,
    hortense_png,
    immoservices_png,
    kinesio_png,
    kokomo_png,
    lasergame_png,
    lcbo_logo_png,
    lebeau_martina_png,
    ligue_nor_png,
    locevasion_png,
    logo_calvados_png,
    logo_festyland_png,
    LOGO_FFBB_png,
    logo_fiducial_png,
    logo_letablier_600_png,
    market_png,
    mcdo_png,
    minute_blonde_png,
    pompes_funebres_png,
    REALISM_logo_quadri_bleu_orange_png,
    serrurerie_voisin_png,
    service_civique_png,
    united_avocats_png,
    zecarrosserie_png,
} from '@/assets/index'

export interface SponsorType {
    name: string;
    logo: StaticImageData,
    website?: string;
    description?: string;
    address?: string;
    phone?: string;
    email?: string;
    category?: string;
    facebook?: string;
    instragram?: string;
}

export function GetSponsors(): SponsorType[] {
    const sponsors: SponsorType[] = [];
    sponsors.push(...MainSponsors())
    sponsors.push(...TechnicalPartners())
    sponsors.push(...OfficialSponsors())
    sponsors.push(...Partners())
    return sponsors;
}

export function Partners(): SponsorType[] {
    return [
        {
            name: "Desbont Sarl",
            logo: desbont_png,
            address: "9 Rue du Long Douet, 14760 Bretteville-sur-Odon",
            phone: "02 31 74 41 07"
        },
        {
            name: "Horthense Père et Fils Sarl",
            category: "Plomberie - Chauffagiste",
            logo: hortense_png,
            website: "https://www.horthense-pere-fils.fr/",
            address: "5 bis Av. de la Voie au Coq, 14760 Bretteville-sur-Odon",
            phone: "09 85 09 15 35"
        },
        {
            name: "Art'tif",
            category: "Coiffure",
            logo: arttif_png,
            address: "110 Rte de Bretagne, 14760 Bretteville-sur-Odon",
            phone: "02 31 74 59 52",
            website: "https://www.planity.com/arttif-14760-bretteville-sur-odon"
        },
        {
            name: "Market Bretteville-Sur-Odon",
            category: "Alimentation",
            address: "12 Rue des Forques, 14760 Bretteville-sur-Odon",
            phone: "02 31 74 20 60",
            logo: market_png,
            website: "https://www.carrefour.fr/magasin/market-bretteville-sur-odon"
        },
        {
            name: "Publicité Fossey",
            website: "https://pubfossey.fr/",
            logo: fossey_png,
            category: "Publicité - Communication",
            phone: "02 31 52 08 56",
            email: "Pubfossey@wanadoo.fr",
            address: "Rue des Frères Lumière ZI3, 14540 Grentheville"
        },
        {
            name: "JTD Débosselage et ZE Carrosserie",
            logo: zecarrosserie_png,
            website: "https://www.zecarrossery.fr/carrossier/garage-carrosserie-caen-carpiquet",
            category: "Carroserie",
            phone: "02 31 22 36 14",
            email: "carpiquet@zecarrossery.pro"
        },
        {
            name: "A Tri Home",
            website: "https://a-tri-home.fr/",
            address: "43 rue de Caen, 14740 Bretteville l'Orgeuilleuse",
            phone: "06 48 17 34 04",
            logo: a_tri_home_png,
            category: "Immobilier"
        },
        {
            name: "Cré-Habitat",
            website: "https://www.cre-habitat.fr/",
            logo: cre_habitat_png,
            phone: "02 31 93 51 65",
            address: "40 route de Bretagne, 14760 Bretteville-sur-Odon",
            category: "Construction - Habitat"
        },
        {
            name: "Fiducial",
            website: "https://www.fiducial.fr/",
            logo: logo_fiducial_png,
            category: "Services informatique"
        },
        {
            name: "United Avocat",
            website: "https://www.united-avocats.fr/",
            logo: united_avocats_png,
            address: "19 Av. de l'Hippodrome, 14000 Caen",
            phone: "02 31 85 30 10",
            category: "Cabinet d'avocats"
        },
        {
            name: "La minute blonde",
            address: "541 Rue Yvonne Guégan, 14760 Bretteville-sur-Odon",
            phone: "02 31 28 76 81",
            logo: minute_blonde_png,
            category: "Caviste",
            facebook: "https://www.facebook.com/p/La-minute-blonde-Bretteville-sur-Odon-61572893277575/"
        },
        {
            name: "DRD",
            category: "Portail – Fenêtre",
            website: "https://www.drdmenuiserie.fr",
            phone: "02 31 73 30 60",
            address: "4 Rue du Long Douet, 14760 Bretteville-Sur-Odon",
            logo: drd_png,
        },
        {
            name: "Serrurerie Voisin",
            category: "Serrurerie",
            address: "88 Quai Vendeuvre, 14000 Caen",
            phone: "02 31 84 68 21",
            website: "https://www.serrurerie-voisin-caen.fr/",
            logo: serrurerie_voisin_png,
        },
        {
            name: "Karine LEFEVRE - Kinésiologue",
            category: "Soin",
            address: "7 Avenue de la Voie au Coq, 14760 Bretteville-Sur-Odon",
            phone: "06 15 18 61 62",
            logo: kinesio_png,
            website: "http://karinekinesiologie.e-monsite.com/",
        },
        {
            name: "Pompes funèbres de l’Odon",
            website: "https://www.cosseronpfdelodon.com/",
            logo: pompes_funebres_png,
            phone: "02 31 73 60 06",
            address: "8 rue Froide, 14760 Bretteville-sur-Odon"
        },
        {
            name: "Lebeau Martina",
            category: "Electricité générale",
            address: "16 Av. de la Voie au Coq, 14760 Bretteville-sur-Odon",
            phone: "02 31 75 22 85",
            logo: lebeau_martina_png,
            website: "https://www.lebeau-martina.fr/"
        }
    ]
}

export function TechnicalPartners(): SponsorType[] {
    return [
        {
            name: "Les frères chaussettes",
            logo: freres_chaussettes_png,
            website: "https://lesfrereschaussettes.com/",
            category: "Habillement",
            email: "contact@lesfrereschaussettes.com",
            phone: "07 49 91 13 48"
        },
        {
            name: "Kokomo",
            logo: kokomo_png,
            facebook: "https://www.facebook.com/KokomoCaen/",
            category: "Restauration - Bar",
            phone: "02 31 93 66 80",
            address: "47 Rue de Geôle, 14000 Caen"
        },
        {
            name: "2C2T RENOVATION",
            address: "26 Chemin de l'Arguilly, 14760 Bretteville sur Odon",
            logo: lcbo_logo_png,
            category: "Travaux de menuiserie bois et PVC"
        },
        {
            name: "REALISM'",
            logo: REALISM_logo_quadri_bleu_orange_png,
            phone: "07 87 01 36 43",
            email: "contact@realism-renovation.com",
            address: "26 rue du Général Leclerc, 14790 Verson",
            category: "Construction - BTP"
        },
        {
            name: "LOC'EVASION 14",
            logo: locevasion_png,
            website: "https://www.loc-evasion14.fr/",
            address: "69 rue Valérie André, 14760 Bretteville-sur-Odon",
            category: "Transport",
            email: "caen@loc-evasion14.fr",
            phone: "02 31 85 93 71"
        },
        {
            name: "CPhotographie",
            logo: cphoto_png,
            website: "https://www.cphotographie.com/",
            category: "Photographie",
            email: "pouchincamille.cphotographie@gmail.com",
            instragram: "https://www.instagram.com/cphotographiie"
        },
        {
            name: "Festyland",
            logo: logo_festyland_png,
            website: "https://festyland.com/",
            address: "Route de Caumont, 14652 CARPIQUET",
            phone: "02 31 75 04 04",
            category: "Parc d'attraction"
        }
    ]
}

export function OfficialSponsors(): SponsorType[] {
    return [
        {
            name: "Ville de Bretteville sur Odon",
            logo: bso_png,
            website: "http://www.brettevillesurodon.fr",
        },
        {
            name: "Conseil Général Calvados",
            logo: logo_calvados_png,
            website: "https://www.calvados.fr/accueil.html",
        },
        {
            name: "Service civique",
            logo: service_civique_png,
            website: "https://www.service-civique.gouv.fr/",
        },
        {
            name: "Comité Département Basket Calvados",
            logo: comite_calvados_png,
            website: "https://www.comitebasket14.fr",
        },
        {
            name: "Ligue régionale normandie basketball",
            logo: ligue_nor_png,
            website: "https://normandiebasketball.fr",
        },
        {
            name: "Fédération Francaise Basket-Ball",
            logo: LOGO_FFBB_png,
            website: "https://www.ffbb.com/",
        }
    ]
}

export function MainSponsors(): SponsorType[] {
    return [
        {
            name: "Foissier SAS",
            logo: Foissier_CMJN_contour_png,
            address: "Rue de l’Europe, 14460 Colombelles",
            phone: "02 31 35 00 60",
            website: "https://www.reseau-le-saint.com/foissier/",
            category: "Alimentation",
        },
        {
            name: "Home Me",
            logo: home_me_png,
            address: "16 bis Quai Amiral Hamelin, 14000 Caen",
            email: "contact@home-me.fr",
            website: "https://home-me.fr/",
            category: "Immobilier"
        },
        {
            name: "McDonald's",
            category: "Restaurants",
            address: "1 Avenue du Fresne, 14760 Bretteville-Sur-Odon",
            phone: "02 31 73 64 27",
            website: "https://www.restaurants.mcdonalds.fr/restaurants/mcdonalds-bretteville-sur-odon/917",
            logo: mcdo_png,
        },
        {
            name: "Le Tablier",
            logo: logo_letablier_600_png,
            category: "Restauration",
            address: "16 Rue Martin Luther King, 14280 Saint-Contest",
            phone: "02 31 44 60 24",
            website: "https://restaurant-letablier-caen.fr/"
        },
        {
            name: "Emzel",
            logo: emzel_png,
            address: "5 Chemin dit de lion 14610 Epron",
            phone: "06 66 40 12 86",
            category: "Marketing",
            website: "https://emzel.fr/"
        },
        {
            name: "H&G Gestion Privée - Gestion de patrimoine",
            logo: hG_png,
            address: "60 rue Philippe Livry-level, 14760 Bretteville-sur-Odon",
            phone: "06 27 48 35 26",
            website: "https://www.financiere-du-cedre.fr/",
            category: "Financier"
        },
        {
            name: "Laser game",
            logo: lasergame_png,
            website: "https://www.lasergames-caen.com/",
            phone: "02 31 74 44 92",
            address: "19, avenue voie du Coq, 14760 Bretteville/Odon",
            email: "lasergames.caen@gmail.com",
            category: "Divertissement"
        },
        {
            name: "Immo Services",
            logo: immoservices_png,
            address: "4 rue de Daguerre 14540 Grentheville",
            phone: "02 31 74 01 00",
            category: "Plomberie, serrurerie, électricité"
        },
    ];
}
