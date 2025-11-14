import * as https from 'https';
import * as fs from 'fs';

// Configuration interface
interface Config {
    clubId: string;
    apiToken: string;
    baseUrl: string;
    clubName: string;
    clubCode: string;
}

// Configuration API Response
interface ConfigurationResponse {
    data: {
        date_created: string;
        date_updated: string;
        id: number;
        key_dh: string;
        key_ms: string;
        user_created: string;
        user_updated: string | null;
        ios_version: string;
        android_version: string;
        key_directus_website: string;
        key_directus_competitions: string | null;
    };
}

// CLI Options interface
interface CliOptions {
    clubId?: string;
    includeTypes?: string[];
    excludeTypes?: string[];
    outputFormat?: 'json' | 'csv' | 'markdown';
    outputFile?: string;
    verbose?: boolean;
}

// API Response interfaces
interface ApiResponse<T> {
    data: T;
}

interface Logo {
    id: string;
}

interface Organisme {
    code: string;
    nom: string;
}

interface Competition {
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

interface Engagement {
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

interface Salle {
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

interface Rencontre {
    id: string;
    numero: string;
    numeroJournee: string;
    idPoule: string;
    resultatEquipe1: number;
    resultatEquipe2: number;
    joue: boolean;
    nomEquipe1: string;
    nomEquipe2: string;
    date_rencontre: string;
    idEngagementEquipe1?: Engagement;
    idEngagementEquipe2?: Engagement;
    salle?: Salle;
}

interface Classement {
    id: string;
    idEngagement?: {
        nom: string;
        id: string;
    };
    matchJoues: string;
    points: string;
    position: string;
    gagnes: string;
    perdus: string;
}

interface Poule {
    id: string;
    nom: string;
    logo?: Logo;
    rencontres: Rencontre[];
    classements: Classement[];
}

interface Club {
    id: string;
    nom: string;
    engagements: Engagement[];
}

// Output interfaces
interface RankingData {
    engagementID: string;
    pouleId: string;
    position: number;
    points: number;
    played: number;
    wins: number;
    losses: number;
}

interface Results {
    matches: Rencontre[];
    teams: Engagement[];
    rankings: RankingData[];
    metadata?: {
        generatedAt: string;
        clubName: string;
        totalTeams: number;
        totalMatches: number;
    };
}

// Configuration
const CONFIG: Config = {
    clubId: '11402',
    apiToken: '', // Will be fetched automatically
    baseUrl: 'api.ffbb.com',
    clubName: 'LE CLUB DE  BRETTEVILLE-SUR-ODON BASKET',
    clubCode: 'NOR0014042'
};

// Parse command line arguments
function parseCliArgs(): CliOptions {
    const args = process.argv.slice(2);
    const options: CliOptions = {
        outputFormat: 'json',
        outputFile: 'ffbb_data',
        verbose: false,
        includeTypes: ['DIV'] // Default filter
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        switch (arg) {
            case '--club-id':
            case '-c':
                options.clubId = args[++i];
                break;
            case '--include-types':
            case '-i':
                options.includeTypes = args[++i].split(',');
                break;
            case '--exclude-types':
            case '-e':
                options.excludeTypes = args[++i].split(',');
                break;
            case '--format':
            case '-f':
                options.outputFormat = args[++i] as 'json'; //| 'csv' | 'markdown';
                break;
            case '--output':
            case '-o':
                options.outputFile = args[++i];
                break;
            case '--verbose':
            case '-v':
                options.verbose = true;
                break;
            case '--help':
            case '-h':
                printHelp();
                process.exit(0);
        }
    }

    return options;
}

// Print help message
function printHelp(): void {
    console.log(`
🏀 FFBB Data Fetcher - Options disponibles:

Usage: ts-node ffbb-script-enhanced.ts [options]

Options:
  -c, --club-id <id>             ID du club FFBB (défaut: ${CONFIG.clubId})
  -l, --limit <number>           Nombre de matchs à récupérer
  -i, --include-types <types>    Types de compétitions à inclure (défaut: DIV)
  -e, --exclude-types <types>    Types de compétitions à exclure
  -f, --format <format>          Format de sortie: json (défaut: json)
  -o, --output <file>            Nom du fichier de sortie (sans extension)
  -v, --verbose                  Mode verbeux
  --date-from <date>             Filtrer les matchs à partir de cette date (YYYY-MM-DD)
  --date-to <date>               Filtrer les matchs jusqu'à cette date (YYYY-MM-DD)
  -t, --team <teams>             Filtrer par équipes spécifiques (codes séparés par des virgules)
  -h, --help                     Afficher cette aide

Exemples:
  ts-node ffbb-script-enhanced.ts --club-id 11402 --limit 20 --format markdown
  ts-node ffbb-script-enhanced.ts --include-types DIV,COU --output results
  ts-node ffbb-script-enhanced.ts --date-from 2025-01-01 --verbose
  ts-node ffbb-script-enhanced.ts -c 11402 -i DIV,COU,TOU
    `);
}

// Fonction pour récupérer le token API
async function fetchApiToken(): Promise<string> {
    return new Promise((resolve, reject) => {
        const options: https.RequestOptions = {
            hostname: CONFIG.baseUrl,
            path: '/items/configuration',
            method: 'GET'
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const response: ConfigurationResponse = JSON.parse(data);
                    if (response.data && response.data.key_dh) {
                        resolve(response.data.key_dh);
                    } else {
                        reject(new Error('Token non trouvé dans la réponse de configuration'));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Fonction pour faire un appel HTTPS
function httpsRequest<T>(path: string, verbose: boolean = false): Promise<ApiResponse<T>> {
    return new Promise((resolve, reject) => {
        const options: https.RequestOptions = {
            hostname: CONFIG.baseUrl,
            path: path,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CONFIG.apiToken}`
            }
        };

        if (verbose) {
            console.log(`  🌐 Requête: https://${CONFIG.baseUrl}${path.substring(0, 100)}...`);
        }

        https.get(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Fonction pour récupérer les données d'une poule
async function fetchPouleData(pouleId: string, verbose: boolean = false): Promise<ApiResponse<Poule>> {
    const fields = [
        'id', 'nom',
        'logo.id',
        'rencontres.id',
        'rencontres.numero',
        'rencontres.numeroJournee',
        'rencontres.idPoule',
        'rencontres.resultatEquipe1',
        'rencontres.resultatEquipe2',
        'rencontres.joue',
        'rencontres.nomEquipe1',
        'rencontres.nomEquipe2',
        'rencontres.date_rencontre',
        'rencontres.idEngagementEquipe1.id',
        'rencontres.idEngagementEquipe1.nom',
        'rencontres.idEngagementEquipe1.idOrganisme.code',
        'rencontres.idEngagementEquipe2.id',
        'rencontres.idEngagementEquipe2.nom',
        'rencontres.idEngagementEquipe2.idOrganisme.code',
        'rencontres.salle.libelle',
        'rencontres.salle.commune.libelle',
        'classements.id',
        'classements.idEngagement.nom',
        'classements.idEngagement.id',
        'classements.matchJoues',
        'classements.points',
        'classements.position',
        'classements.gagnes',
        'classements.perdus'
    ];

    const path = `/items/ffbbserver_poules/${pouleId}?` +
        `deep[rencontres][_limit]=1000&` +
        `deep[rencontres][_filter][saison][actif]=true&` +
        `deep[rencontres][_sort][]=date_rencontre&` +
        fields.map(f => `fields[]=${encodeURIComponent(f)}`).join('&');

    return await httpsRequest<Poule>(path, verbose);
}

// Fonction pour récupérer les engagements d'un club
async function fetchClubEngagements(clubId: string, verbose: boolean = false): Promise<ApiResponse<Club>> {
    const clubFields = [
        'id', 'nom',
        'engagements.id',
        'engagements.nom',
        'engagements.numeroEquipe',
        'engagements.idPoule.id',
        'engagements.idPoule.nom',
        'engagements.idCompetition.id',
        'engagements.idCompetition.nom',
        'engagements.idCompetition.code',
        'engagements.idCompetition.typeCompetition',
        'engagements.idCompetition.saison.id',
        'engagements.idCompetition.categorie.code',
        'engagements.idCompetition.categorie.ordre'
    ];

    const clubPath = `/items/ffbbserver_organismes/${clubId}?` +
        clubFields.map(f => `fields[]=${encodeURIComponent(f)}`).join('&') +
        `&deep[engagements][_limit]=1000&` +
        `&deep[engagements][_filter][idCompetition][saison][id][_eq]=1036`;

    return await httpsRequest<Club>(clubPath, verbose);
}

// Save results with specified format
function saveResults(results: Results, options: CliOptions): void {
    const baseFileName = options.outputFile || 'ffbb_data';
    let content: string;
    let extension: string;

    switch (options.outputFormat) {
        case 'json':
        default:
            content = JSON.stringify(results, null, 2);
            extension = 'json';
            break;
    }

    const fileName = `${baseFileName}.${extension}`;
    fs.writeFileSync(fileName, content);
    console.log(`\n📁 Fichier généré: ${fileName}`);
}

// Fonction principale
async function main(): Promise<void> {
    const options = parseCliArgs();

    try {
        console.log('🔑 Récupération du token API...\n');

        // Récupérer le token API
        CONFIG.apiToken = await fetchApiToken();
        console.log('✅ Token API récupéré avec succès\n');

        console.log('🏀 Récupération des données du club...\n');

        if (options.verbose) {
            console.log('⚙️  Options:', JSON.stringify(options, null, 2));
        }

        // Use club ID from options or default
        const clubId = options.clubId || CONFIG.clubId;
        console.log(`📋 Club ID: ${clubId}\n`);

        // Récupérer les engagements du club
        const clubData = await fetchClubEngagements(clubId, options.verbose);

        if (!clubData.data || !clubData.data.engagements) {
            console.error('❌ Données du club non trouvées');
            process.exit(1);
        }

        console.log(`✅ Club trouvé: ${clubData.data.nom}`);
        console.log(`📋 ${clubData.data.engagements.length} équipes trouvées\n`);

        // Filter by competition type
        const teams = clubData.data.engagements.filter((e: Engagement) => {
            return options.includeTypes?.includes(e.idCompetition.typeCompetition) && !options.excludeTypes?.includes(e.idCompetition.typeCompetition)
        });

        console.log(`📋 ${teams.length} équipes filtrées\n`);

        if (options.verbose) {
            console.log('⚙️  Equipes filtrées:', JSON.stringify(teams, null, 2));
        }

        const allMatches: Rencontre[] = [];
        const rankings: RankingData[] = [];

        // Étape 2: Pour chaque engagement, récupérer les données de la poule
        for (const engagement of teams) {
            const pouleId = engagement.idPoule?.id;
            const competitionType = engagement.idCompetition.typeCompetition;
            const teamName = engagement.idCompetition.nom;

            if (!pouleId) continue;

            console.log(`⚙️  Traitement: ${teamName} (${competitionType})`);

            try {
                const pouleData = await fetchPouleData(pouleId, options.verbose);

                if (!pouleData.data) continue;

                if (options.verbose) {
                    console.log('⚙️  Traitement des matchs:', JSON.stringify(pouleData.data, null, 2));
                }

                for (const match of pouleData.data.rencontres) {
                    if (match.idEngagementEquipe1?.idOrganisme?.code === CONFIG.clubCode || match.idEngagementEquipe2?.idOrganisme?.code === CONFIG.clubCode) {
                        allMatches.push(match);
                    }
                }

                // Traiter le classement
                const classements = pouleData.data.classements || [];
                const myClassement = classements.find(c =>
                    c.idEngagement?.id === engagement.id
                );

                if (myClassement) {
                    rankings.push({
                        engagementID: engagement.id,
                        pouleId: pouleId,
                        position: parseInt(myClassement.position),
                        points: parseInt(myClassement.points),
                        played: parseInt(myClassement.matchJoues),
                        wins: parseInt(myClassement.gagnes),
                        losses: parseInt(myClassement.perdus),
                    });
                }
            } catch (error) {
                console.error(`  ❌ Erreur pour ${teamName}:`, (error as Error).message);
            }
        }

        // Sort all matches by date (ascending for upcoming, descending for past)
        allMatches.sort((a: Rencontre, b: Rencontre) => new Date(a.date_rencontre).getTime() - new Date(b.date_rencontre).getTime());
        rankings.sort((a: RankingData, b: RankingData) => a.position - b.position);

        // Sauvegarder les résultats
        const results: Results = {
            matches: allMatches,
            teams: teams,
            rankings: rankings,
            metadata: {
                generatedAt: new Date().toISOString(),
                clubName: clubData.data.nom,
                totalTeams: rankings.length,
                totalMatches: allMatches.length,
            }
        };

        saveResults(results, options);

        console.log('\n✅ Données générées avec succès!');
        console.log(`📊 ${teams.length} équipes au total`);
        console.log(`📊 ${allMatches.length} matchs au total`);
        console.log(`📊 ${rankings.length} classements`);

        // Afficher un aperçu
        console.log('\n--- APERÇU ---\n');

        const upcomingPreview = allMatches.filter(m => !m.joue).slice(0, 3);
        if (upcomingPreview.length > 0) {
            console.log('Prochains matchs:');
            upcomingPreview.forEach(m => {
                const dateStr = new Date(m.date_rencontre).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
                const timeStr = new Date(m.date_rencontre).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
                console.log(`  ${m.nomEquipe1} vs ${m.nomEquipe2} - ${dateStr} ${timeStr} (${m.idEngagementEquipe1?.idOrganisme?.code === CONFIG.clubCode ? 'Domicile' : 'Extérieur'})`);
            });
        }

    } catch (error) {
        console.error('❌ Erreur:', (error as Error).message);
        if (options.verbose && error instanceof Error && error.stack) {
            console.error(error.stack);
        }
        process.exit(1);
    }
}

// Exécuter le script
main();