import type {Metadata} from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import {Toaster} from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import {GENERAL_INFO} from "@/data/const";

export const metadata: Metadata = {
    metadataBase: new URL(GENERAL_INFO.baseURL),
    title: { default: 'LCBO Basket', template: '%s | LCBO Basket' },
    description: 'LCBO Basket - Passion, Excellence, Esprit d\'Équipe',
    openGraph: {
        title: 'LCBO Basket',
        description: 'LCBO Basket - Passion, Excellence, Esprit d\'Équipe',
        url: GENERAL_INFO.baseURL,
        images: [{ url: GENERAL_INFO.baseURL+'/logo.png' }]
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
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        </head>

        <body>
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation/>
            <main className="flex-1">
                <ScrollToTop />
                {children}
            </main>
            <Footer/>
            <Toaster/>
        </div>
        <script defer data-domain="lcbobasket.fr" src={GENERAL_INFO.statsPlausibleURL}></script>
        </body>
        </html>
    );
}
