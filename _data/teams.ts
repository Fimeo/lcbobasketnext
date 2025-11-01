import teamWhite from "@/assets/images/33410bc9d885a3076cf9982e6d01ad10ab906fe8.png";

export function TeamNumber(): number {
    let i = SENIORS_TEAMS.length;
    YOUTH_TEAMS.map((category) => (
        i += category.teams.length
    ))
    return i
}

export const SENIORS_TEAMS = [
    {
        name: "Pré nationale féminine",
        division: "PNF",
        engagementID: "200000005143555",
        pouleId: "200000003018387",
        image: teamWhite,
        position: "1er",
        nextMatch: {
            opponent: "Hérouville BC",
            date: "Dim 13 Oct - 15h00",
            home: true,
        },
    },
    {
        name: "Pré nationale masculine",
        division: "PNM",
        engagementID: "200000005143527",
        pouleId: "200000003018384",
        image: teamWhite,
        position: "2ème",
        nextMatch: {
            opponent: "Hérouville BC",
            date: "Dim 13 Oct - 15h00",
            home: true,
        },
    },
    {
        name: "Régionale féminine seniors - Division 2",
        division: "RF2",
        engagementID: "200000005179810",
        pouleId: "200000003023367",
        image: teamWhite,
        position: "5ème",
        nextMatch: {
            opponent: "Hérouville BC",
            date: "Dim 13 Oct - 15h00",
            home: true,
        },
    },
    {
        name: "Départementale masculine seniors - Division 2",
        division: "DM2",
        engagementID: "200000005153966",
        pouleId: "200000003019809",
        image: teamWhite,
        position: "5ème",
        nextMatch: {
            opponent: "Hérouville BC",
            date: "Dim 13 Oct - 15h00",
            home: true,
        },
    },
    {
        name: "Régionale masculine seniors - Division 3",
        division: "RM3",
        engagementID: "200000005146818",
        pouleId: "200000003018873",
        image: teamWhite,
        position: "1er",
        nextMatch: {
            opponent: "Hérouville BC",
            date: "Dim 13 Oct - 15h00",
            home: true,
        },
    },
];

export const YOUTH_TEAMS = [
    {
        category: "U13 - U18",
        teams: [
            {
                name: "Régionale masculine U18",
                division: "RMU18",
                engagementID: "200000005191706",
                pouleId: "200000003025071",
                image: teamWhite
            },
            {
                name: "Départementale masculine U18 - Division 3",
                division: "DMU18-3",
                engagementID: "200000005221880",
                pouleId: "200000003029278",
                image: teamWhite
            },
            {
                name: "Régionale féminine U15",
                division: "RFU15",
                engagementID: "200000005198886",
                pouleId: "200000003026059",
                image: teamWhite,
            },
            {
                name: "Départementale féminine U15",
                division: "DFU15",
                engagementID: "200000005221457",
                pouleId: "200000003029187",
                image: teamWhite,
            },
            {
                name: "Régionale masculine U13",
                division: "RMU13",
                engagementID: "200000005191633",
                pouleId: "200000003025061",
                image: teamWhite,
            },
            {
                name: "Départementale masculine U13 - Division 2",
                division: "DMU13-2",
                engagementID: "200000005221546",
                pouleId: "200000003029204",
                image: teamWhite,
            },
            {
                name: "Départementale féminine U13",
                division: "DFU13",
                engagementID: "200000005221375",
                pouleId: "200000003029169",
                image: teamWhite,
            }
        ],
    },
    {
        category: "École de Basket",
        teams: [
            {
                name: "Départementale masculine U11",
                division: "DMU11",
                engagementID: "200000005221546",
                pouleId: "200000003028970",
                image: teamWhite,
            },
            {
                name: "Départementale féminine U11",
                division: "DFU11",
                engagementID: "200000005219400",
                pouleId: "200000003028926",
                image: teamWhite,
            },
            {
                name: "Départementale féminine U9",
                division: "DFU9",
                image: teamWhite,
                pouleId: "200000003027255",
                engagementID: "200000005207609"
            },
            {
                name: "Départementale masculine U9",
                division: "DMU9",
                image: teamWhite,
                pouleId: "200000003027293",
                engagementID: "200000005207864"
            },
        ],
    },
];