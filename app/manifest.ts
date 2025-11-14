import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        "name": "LCBO Basket - Club de Basketball",
        "short_name": "LCBO Basket",
        "description": "Club de basketball à Bretteville-sur-Odon depuis 1972.",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#dc2626",
        "orientation": "portrait-primary",
        "icons": [
            {
                "src": "/icon-192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any"
            },
            {
                "src": "/icon-512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any"
            }
        ],
        "categories": ["sports", "basketball"],
        "lang": "fr-FR"
    }
}