import data from './ffbb_data.json';

import Pnf from '@/assets/images/teams/Pnf.jpg';
// import Pnfsponsor from '@/assets/images/teams/Pnfsponsor.jpg';
import R3 from '@/assets/images/teams/R3.jpg';
import d2 from '@/assets/images/teams/d2.jpg';
import pnm from '@/assets/images/teams/pnm.jpg';
import r2f from '@/assets/images/teams/r2f.jpg';
import u11F from '@/assets/images/teams/u11F.jpg';
import u11g from '@/assets/images/teams/u11g.jpg';
import u13 from '@/assets/images/teams/u13.jpg';
import u13f from '@/assets/images/teams/u13f.jpg';
import u13m2 from '@/assets/images/teams/u13m2.jpg';
import u15f1et2 from '@/assets/images/teams/u15f1et2.jpg';
import u18g1 from '@/assets/images/teams/u18g1.jpg';
import u7 from '@/assets/images/teams/u7-2-2.jpg';
import u9f from '@/assets/images/teams/u9f.jpg';
import u9g from '@/assets/images/teams/u9g.jpg';

import defImage from '@/assets/images/misc/terrain.png';

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
        "200000005143527": pnm,
        "200000005143555": Pnf,
        "200000005146818": R3,
        "200000005153966": d2,
        "200000005179810": r2f,
        "200000005191633": u13,
        "200000005191706": u18g1,
        "200000005198886": u15f1et2,
        "200000005207609": u9f,
        "200000005207864": u9g,
        "200000005219400": u11F,
        "200000005219789": u11g,
        "200000005221375": u13f,
        "200000005221457": u15f1et2,
        "200000005221546": u13m2,
        "200000005221880": defImage,
        "u7": u7,
    }[engagementID] || defImage;
}
