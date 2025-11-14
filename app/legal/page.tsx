import styles from './legal.module.css';

export default function MentionsLegales() {
    return (
        <div className={styles.container}>
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-2">Mentions légales</h1>

                    <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site LCBO Basket l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

                    <h2 className="mt-12 mb-2">Edition du site</h2>

                    <p>Le présent site, accessible à l’URL <a href="https://lcbobasket.fr/">https://lcbobasket.fr/</a> (le « Site »), est édité par :</p>

                    <p>L’association loi 1901 LE CLUB DE BRETTEVILLE-SUR-ODON BASKET, enregistrée auprès de la préfecture/sous-préfecture de 14 - Préfecture Caen sous le numéro W142017496 en date du 3 avril 2023, ayant son siège situé à Place de l Eglise 14760 Bretteville-sur-Odon, représentée par OLIVIER LE GOURRIEREC, en sa qualité de Présidente, dûment habilitée.</p>

                    <h2 className="mt-12 mb-2">Hébergement</h2>

                    <p>Le Site est hébergé par la société OVH SAS, située 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1. (Service client : 1007)</p>

                    <h2 className="mt-12 mb-2">Directeur de publication</h2>

                    <p>Le Directeur de la publication du Site est le Président de l'Association.</p>

                    <h2 className="mt-12 mb-2">Nous contacter</h2>
                    <ul>
                        <li>Par téléphone : +33622129840</li>
                        <li>Par email : lcbobasket@laposte.net</li>
                        <li>Par courrier : Place de l Eglise 14760 Bretteville-sur-Odon</li>
                    </ul>

                    <h2 className="mt-12 mb-2">Propriété intellectuelle</h2>

                    <p>L’ensemble des contenus présents sur le Site (textes, photographies, logos, graphismes, vidéos, documents, ainsi que la structure générale du Site) est la propriété exclusive de l’association LE CLUB DE BRETTEVILLE-SUR-ODON BASKET, sauf mentions contraires.</p>

                    <p>Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle, du Site ou de son contenu, par quelque procédé que ce soit, est interdite sans l’autorisation écrite préalable de l’association.</p>

                    <p>Toute exploitation non autorisée du Site ou de son contenu engage la responsabilité de l’utilisateur et est susceptible d’entraîner des poursuites judiciaires.</p>

                    <h2 className="mt-12 mb-2">Responsabilité</h2>

                    <p>L’association s’efforce de fournir sur le Site des informations aussi précises et à jour que possible. Toutefois, elle ne saurait garantir l’exactitude, la complétude ou l’actualité des informations mises à disposition.</p>

                    <p>En conséquence, l’association LE CLUB DE BRETTEVILLE-SUR-ODON BASKET ne pourra être tenue responsable :</p>
                    <ul>
                        <li>des erreurs, omissions ou éventuelles inexactitudes ;</li>
                        <li>d’un manque de disponibilité du Site ;</li>
                        <li>de tout dommage direct ou indirect résultant de l’accès au Site ou de l’utilisation des informations qu’il contient.</li>
                    </ul>
                    <p>L’utilisateur du Site s’engage à accéder au Site avec un matériel récent, ne contenant pas de virus, et avec un navigateur mis à jour.</p>

                    <h2 className="mt-12 mb-2">Donnée personnelles</h2>
                    <p>Le Site ne collecte aucune donnée personnelle permettant d’identifier directement les utilisateurs, sauf si ces derniers choisissent de nous contacter volontairement via les moyens de contact mis à disposition (email, téléphone ou courrier).</p>
                    <p>Aucune base de données de comptes utilisateurs ou de formulaires n’est utilisée.</p>

                    <h2 className="mt-12 mb-2">Statistiques et mesure d’audience</h2>

                    <p>Le Site utilise l’outil de mesure d’audience Plausible Analytics.</p>

                    <p>Plausible est un service conforme au RGPD, respectueux de la vie privée et ne déposant aucun cookie.</p>
                    <p>Les données collectées sont totalement anonymisées, ne permettent pas l’identification des visiteurs, et sont utilisées exclusivement pour mesurer la fréquentation du Site.</p>

                    <p>Les informations recueillies comprennent uniquement des statistiques générales (pages vues, origine géographique approximative, type d’appareil, etc.), sans aucune donnée personnelle.</p>

                    <h2 className="mt-12 mb-2">Exercice des droits</h2>

                    <p>Conformément au RGPD, les utilisateurs disposent d’un droit d’accès, de rectification, de limitation et de suppression concernant les données personnelles qu’ils pourraient nous transmettre volontairement (ex : par email).</p>

                    <p>Toute demande peut être adressée à : lcbobasket@laposte.net</p>
                </div>
            </div>
        </div>
    )
}
