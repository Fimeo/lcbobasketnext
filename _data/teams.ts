import data from './ffbb_data.json';

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
