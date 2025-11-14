import type {MetadataRoute} from 'next'
import {GENERAL_INFO} from "@/data/const";
import {PATHS} from "@/data/routes";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: GENERAL_INFO.baseURL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.ACTUALITE.path,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.INFOS.path,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.TEAMS.path,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.CONTACT.path,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.2,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.HISTORY.path,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.2,
        },
        {
            url: GENERAL_INFO.baseURL + PATHS.SPONSORS.path,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ]
}