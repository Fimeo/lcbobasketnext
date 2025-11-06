import {Engagement} from "@/data/teams";
import data from './ffbb_data.json';
import {FormatShortDate, GENERAL_INFO} from "@/data/const";

export const FFBB_LINKS = {
    "lcboclub": "https://competitions.ffbb.com/ligues/nor/comites/0014/clubs/nor0014042",
    "lbcodetailequipe": "https://competitions.ffbb.com/ligues/nor/comites/0014/clubs/nor0014042/equipes/"
}

export interface Rencontre {
    id: string;
    numero: string;
    numeroJournee: string;
    idPoule: string;
    resultatEquipe1?: number | null;
    resultatEquipe2?: number | null;
    joue: boolean;
    nomEquipe1: string;
    nomEquipe2: string;
    date_rencontre: string;
    idEngagementEquipe1: Engagement;
    idEngagementEquipe2: Engagement;
    salle?: Salle;
}

export interface Salle {
    libelle: string;
    adresse?: string;
    commune: {
        codePostal?: string;
        libelle: string;
    };
    cartographie?: {
        latitude: number;
        longitude: number;
    }
}

export interface RankingData {
    engagementID: string;
    pouleId: string;
    position: number;
    points: number;
    played: number;
    wins: number;
    losses: number;
}

export function UpcomingMatchesByDate(): Record<string, Rencontre[]> {
    return Matches().filter((e) => new Date(e.date_rencontre) >= new Date()).reduce((acc, match: Rencontre) => {
        (acc[FormatShortDate(match.date_rencontre)] ||= []).push(match);
        return acc;
    }, {} as Record<string, Rencontre[]>);
}

export function IsHome(rencontre: Rencontre): boolean {
    return rencontre.idEngagementEquipe1?.idOrganisme?.code === GENERAL_INFO.clubCode
}

export function PositionLabel(n: number): string {
    return `${n}${n === 1 ? 'er' : 'ème'}`
}

export function Rankings(): RankingData[] {
    return data.rankings as RankingData[];
}

export function Matches(): Rencontre[] {
    return data.matches as Rencontre[];
}

export function RankingFromEngagement(engagement: string): RankingData|undefined {
    return Rankings().find((ranking: RankingData) => {
        return ranking.engagementID === engagement;
    })
}

export function NextMatchByEngagement(engagement: string): Rencontre|undefined {
    return Matches().filter((e) => new Date(e.date_rencontre) >= new Date()).find((e) => !e.joue &&(e.idEngagementEquipe1.id === engagement || e.idEngagementEquipe2.id === engagement))
}

export function MatchByEngagement(engagement: string): Rencontre[] {
    return Matches().filter((e) => e.idEngagementEquipe1.id === engagement || e.idEngagementEquipe2.id === engagement)
}
