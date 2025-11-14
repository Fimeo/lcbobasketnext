import data from './ffbb_data.json';

import {
    d2_jpg,
    Pnf_jpg,
    pnm_jpg,
    r2f_jpg,
    R3_jpg,
    terrain_jpg as defImage,
    u11F_jpg,
    u11g_jpg,
    u13_jpg,
    u13f_jpg,
    u13m2_jpg,
    u15f1et2_jpg,
    u18g1_jpg,
    u7_2_2_jpg,
    u9f_jpg,
    u9g_jpg
} from '@/assets/index'

import {StaticImageData} from "next/image";

const CategorieSenior = "SE";

export interface Engagement {
    id: string;
    nom: string;
    numeroEquipe: string;
    idOrganisme?: Organisme;
    idPoule?: {
        id: string;
        nom: string;
    };
    idCompetition: Competition;
}

export interface Organisme {
    code: string;
    nom: string;
}

export interface Competition {
    id: string;
    nom: string;
    code: string;
    typeCompetition: string;
    saison: {
        id: string;
    };
    categorie: {
        code: string;
        ordre: number;
    };
}

export function TeamNumber(): number {
    return Teams().length
}

export function TeamByEngagementID(engagementID: string): Engagement | undefined {
    return Teams().find(({id}) => id === engagementID);
}

export function SeniorTeams(): Engagement[] {
    return Teams().filter((team: Engagement) => {
        return team.idCompetition.categorie.code === CategorieSenior
    })
}

export function YouthTeams(): Engagement[] {
    return Teams().filter((team: Engagement) => {
        return team.idCompetition.categorie.code !== CategorieSenior
    })
}

export function YouthTeamsByCategoryReducer(): Record<string, Engagement[]> {
    return YouthTeams().reduce((acc, team) => {
        const code = team.idCompetition.categorie.code
        if (code !== CategorieSenior) {
            if (!acc[code]) acc[code] = []
            acc[code].push(team)
        }
        return acc
    }, {} as Record<string, Engagement[]>)
}

export function Teams(): Engagement[] {
    return data.teams.sort((a, b) => b.idCompetition.categorie.ordre - a.idCompetition.categorie.ordre) as Engagement[]
}

export function TeamPictureByEngagementID(engagementID: string): StaticImageData {
    return {
        "200000005143527": pnm_jpg,
        "200000005143555": Pnf_jpg,
        "200000005146818": R3_jpg,
        "200000005153966": d2_jpg,
        "200000005179810": r2f_jpg,
        "200000005191633": u13_jpg,
        "200000005191706": u18g1_jpg,
        "200000005198886": u15f1et2_jpg,
        "200000005207609": u9f_jpg,
        "200000005207864": u9g_jpg,
        "200000005219400": u11F_jpg,
        "200000005219789": u11g_jpg,
        "200000005221375": u13f_jpg,
        "200000005221457": u15f1et2_jpg,
        "200000005221546": u13m2_jpg,
        "200000005221880": defImage,
        "u7": u7_2_2_jpg,
    }[engagementID] || defImage;
}
