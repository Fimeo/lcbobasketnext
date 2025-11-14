import {
    news20251017_jpg,
    news20250923_jpg,
    news20251105_jpg,
    news20251102_jpg
} from '@/assets/index'
import {GENERAL_INFO} from "@/data/const";
import {StaticImageData} from "next/image";
import {ReactElement} from "react";

export type News = {
    slug: string;
    title: string;
    date: string;
    image: StaticImageData;
    link: string;
    location: string;
    description: ReactElement;
}

export function NEWS(): News[] {
    return [
        {
            slug: "boutique-ouverte-2025",
            title: "Ouverture de la boutique",
            date: "Samedi 15 novembre 2025",
            link: "https://www.instagram.com/lcbobasket",
            image: news20251105_jpg,
            location: GENERAL_INFO.address,
            description: <div>
                <p>La boutique du LCBO Basket est désormais ouverte !</p>

                <p>Vous pouvez dès maintenant commander la nouvelle collection PUMA aux couleurs du club 😍</p>

                <p>📅 Les commandes sont ouvertes jusqu’au 28 novembre 2025</p>
                <p>🎁Toutes les commandes seront livrées avant Noël!</p>

                <p>Voici le lien de la boutique (vous pouvez seulement commander en ligne) :
                    <span>
                        <a href="https://b1.intersport-boutique-club.fr/2828-LCBOBASKET"
                           target="_blank"> https://b1.intersport-boutique-club.fr/2828-LCBOBASKET</a>
                    </span>
                </p>
                ￼
                <p>Nous vous proposons 2 créneaux au gymnase pour essayer les différents produits :</p>
                <ul>
                    <li>Lundi 10 novembre de 17h30 à 19h</li>
                    <li>Mercredi 19 novembre de 17h à 19h</li>
                </ul>
                <p>+ vous pourrez également venir essayer lors de la soirée de présentation des équipes le 15 novembre</p>
            </div>
        },
        {
            slug: "presentation-equipes-2025",
            title: "Présentation des équipes",
            date: "Samedi 15 novembre 2025",
            image: news20251102_jpg,
            link: "https://www.instagram.com/p/DQmoSmZlI4L",
            location: GENERAL_INFO.address,
            description: <div>
                <p>Le samedi 15 novembre prochain aura lieu notre soirée de présentation des équipes. 🔴⚪</p>

                <p>La présentation des équipes se déroulera à 20h10 avant le début du match de notre pré-nationale
                    masculine qui affrontera Ouistreham.</p>

                <p>🥪 Lors de la soirée, il y aura une buvette avec des formules repas.
                    Si vous souhaitez en prendre, nous vous conseillons de les pré-réserver directement sur Hello asso
                    (cela vous fera gagner du temps et vous serez sur d&#39;avoir une formule !).
                    Voici le lien pour les pré-réserver :
                    <span>
                        <a href="https://www.helloasso.com/associations/lcbo-basket/evenements/formules-presentation-des-equipes-2025"
                           target="_blank"> https://www.helloasso.com/associations/lcbo-basket/evenements/formules-presentation-des-equipes-2025
                        </a>
                    </span>
                </p>

                <p>Il y aura également une tombola avec des lots à gagner (2€ le ticket) 🎁</p>

                <p>Nous comptons sur vous pour être présents lors de la soirée ! 🔥</p>
            </div>
        },
        {
            slug: "octobre-rose-2025",
            title: "Octobre rose",
            date: "Dimanche 26 octobre 2025",
            image: news20251017_jpg,
            link: "https://instagram.com/p/DQREMBwgDjo",
            location: GENERAL_INFO.address,
            description: <div>
                <p>🎀 Le dimanche 26 octobre, nous organisons une après-midi spéciale Octobre Rose 💕</p>

                <p>Nos équipes féminines joueront à domicile au profit du Collectif Triplettes Roses, association qui
                    lutte contre le cancer du sein triple négatif.</p>
                <p>🕑 Régionale 2 (SF2) – 14h00 : LCBO 🆚 Équeurdreville</p>
                <p>🕓 Pré-nationale (SF1) – 16h00 : LCBO 🆚 Caen Nord</p>
                <p>🍰 Il y aura une vente de crêpes, gâteaux et boissons dont l’intégralité des bénéfices sera reversée à
                    l’association</p>

                <p>Vous pouvez également faire un don à l&#39;association via ce lien ou en flashant le QR Code :
                    <span>
                        <a
                            href="https://www.helloasso.com/associations/lcbo-basket/formulaires/1"
                            target="_blank"> https://www.helloasso.com/associations/lcbo-basket/formulaires/1
                        </a> (une boite à dons sera également à disposition sur place)
                    </span>
                </p>

                <p>💗 On compte sur vous pour venir nombreux… et en rose ! 💗</p>
            </div>
        },
        {
            slug: "halloween-camp-2025",
            title: "Halloween Camp",
            date: "Du 20 au 24 octobre",
            image: news20250923_jpg,
            link: "https://instagram.com/p/DO8M2r5iHTY",
            location: GENERAL_INFO.address,
            description: <div>
                <p>Le club organise un stage pendant les vacances de la Toussaint, du 20 au 24 octobre.🎃</p>

                <p>Ce stage est à la demi-journée :</p>
                <ul>
                    <li>Matin (9h-12h) → U9 - U11</li>
                    <li>Après-midi (14h-17h) → U13 - U15 - U18</li>
                </ul>
                <p>👉 Accueil 30 min avant le début de chaque demi-journée</p>

                <p>Le tarif est de :</p>
                <ul>
                    <li>65 € pour les licenciés LCBO</li>
                    <li>75 € pour les licenciés hors LCBO</li>
                </ul>

                <p>Vous pouvez désormais inscrire votre enfant via ce lien helloasso :
                    <a
                        href="https://www.helloasso.com/associations/lcbo-basket/evenements/halloween-camp-2025"
                        target="_blank"> https://www.helloasso.com/associations/lcbo-basket/evenements/halloween-camp-2025
                    </a>

                </p>
                <p>Nous ne prendrons en compte uniquement les inscriptions via Helloasso !</p>
                <p>⚠️La date limite d&#39;inscription est fixée au : 10 octobre à 12h⚠️</p>
                <p>Attention, les places sont limitées alors ne tardez pas !</p>
            </div>
        }
    ]
}