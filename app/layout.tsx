import type {Metadata} from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import {Toaster} from "sonner";

export const metadata: Metadata = {
    metadataBase: new URL('https://lcbobasket.appro.ovh/'),
    title: { default: 'LCBO Basket', template: '%s | LCBO Basket' },
    description: 'LCBO Basket - Passion, Excellence, Esprit d\'Équipe',
    openGraph: {
        title: 'LCBO Basket',
        description: 'LCBO Basket - Passion, Excellence, Esprit d\'Équipe',
        url: 'https://lcbobasket.appro.ovh/',
        images: [{ url: 'https://lcbobasket.appro.ovh/logo.png' }]
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        </head>

        <body>
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation/>
            <main className="flex-1">
                {children}
            </main>
            <Footer/>
            <Toaster/>
        </div>
        <script defer data-domain="lcbobasket.appro.ovh"
                src="https://plausible.appro.ovh/js/script.outbound-links.js"></script>
        </body>
        </html>
    );
}
