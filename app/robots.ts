import type {MetadataRoute} from 'next'
import {GENERAL_INFO} from "@/data/const";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
            },
        ],
        sitemap: GENERAL_INFO.baseURL + '/sitemap.xml',
    }
}