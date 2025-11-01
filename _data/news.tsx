import news20251017 from '@/assets/images/news/news20251017.jpeg';
import news20250923 from '@/assets/images/news/news20250923.jpeg';
import {GENERAL_INFO} from "@/data/const";

export function NEWS() {
    return [
        {
            title: "Octobre rose",
            date: "Dimanche 26 octobre 2025",
            image: news20251017,
            link: "https://www.instagram.com/p/DQREMBwgDjo/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
            location: GENERAL_INFO.address,
            description: <div>
                <p>🎀 Le dimanche 26 octobre, nous organisons une après-midi spéciale Octobre Rose 💕</p>

                <p>Nos équipes féminines joueront à domicile au profit du Collectif Triplettes Roses, association qui
                    lutte contre le cancer du sein triple négatif.</p>
                <p className="mt-2">🕑 Régionale 2 (SF2) – 14h00 : LCBO 🆚 Équeurdreville</p>
                <p className="mb-2">🕓 Pré-nationale (SF1) – 16h00 : LCBO 🆚 Caen Nord</p>
                <p>🍰 Il y aura une vente de crêpes, gâteaux et boissons dont l’intégralité des bénéfices sera reversée à
                    l’association</p>

                <p>Vous pouvez également faire un don à l&#39;association via ce lien ou en flashant le QR Code :
                    <span>
                        <a
                            href="https://www.helloasso.com/associations/lcbo-basket/formulaires/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-300 hover:text-red-600 transition-colors"> https://www.helloasso.com/associations/lcbo-basket/formulaires/1
                        </a> (une boite à dons sera également à disposition sur place)
                    </span>
                </p>

                <p>💗 On compte sur vous pour venir nombreux… et en rose ! 💗</p>
            </div>
        },
        {
            title: "Halloween Camp",
            date: "Du 20 au 24 octobre",
            image: news20250923,
            link: "https://www.instagram.com/p/DO8M2r5iHTY/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-300 hover:text-red-600 transition-colors"> https://www.helloasso.com/associations/lcbo-basket/evenements/halloween-camp-2025
                    </a>

                </p>
                <p>Nous ne prendrons en compte uniquement les inscriptions via Helloasso !</p>
                <p>⚠️La date limite d&#39;inscription est fixée au : 10 octobre à 12h⚠️</p>
                <p>Attention, les places sont limitées alors ne tardez pas !</p>
            </div>
        }
    ]
}