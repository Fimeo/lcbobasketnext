const https = require('https');
const fs = require('fs');

const CONFIG = {
    clubId: '11402',
    apiToken: '',
    baseUrl: 'api.ffbb.com',
    clubName: 'LE CLUB DE  BRETTEVILLE-SUR-ODON BASKET'
};

// Fonction pour faire un appel HTTPS
function httpsRequest(path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: CONFIG.baseUrl,
            path: path,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CONFIG.apiToken}`
            }
        };

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

// Fonction pour formater la date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];

    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}

// Fonction pour formater l'heure
function formatTime(dateStr) {
    const date = new Date(dateStr);
    return `${date.getHours()}h${date.getMinutes().toString().padStart(2, '0')}`;
}

// Fonction pour récupérer les données d'une poule
async function fetchPouleData(pouleId) {
    const fields = [
        'id', 'nom',
        'logo.id',
        'id_competition.organisateur.code',
        'id_competition.organisateur.nom',
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
        'rencontres.idEngagementEquipe1.nom',
        'rencontres.idEngagementEquipe1.idOrganisme.code',
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

    return await httpsRequest(path);
}

// Fonction principale
async function main() {
    try {
        console.log('🏀 Récupération des données du club...\n');

        // Étape 1: Récupérer les engagements du club
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

        const clubPath = `/items/ffbbserver_organismes/${CONFIG.clubId}?` +
            clubFields.map(f => `fields[]=${encodeURIComponent(f)}`).join('&') +
            `&deep[engagements][_limit]=1000&` +
            `deep[engagements][_filter][idCompetition][saison][id][_eq]=1036`;

        const clubData = await httpsRequest(clubPath);

        if (!clubData.data || !clubData.data.engagements) {
            throw new Error('Données du club non trouvées');
        }

        console.log(`✅ Club trouvé: ${clubData.data.nom}`);
        console.log(`📋 ${clubData.data.engagements.length} équipes trouvées\n`);

        const upcomingMatches = [];
        const lastMatches = [];
        const rankings = [];
        const now = new Date();

        // Étape 2: Pour chaque engagement, récupérer les données de la poule
        for (const engagement of clubData.data.engagements) {
            const pouleId = engagement.idPoule?.id;

            const competitionType = engagement.idCompetition.typeCompetition;
            if (competitionType !== "DIV") {
                continue
            }

            if (!pouleId) continue;

            const teamName = engagement.idCompetition.nom;
            const teamCode = engagement.idCompetition.code;

            console.log(`⚙️  Traitement: ${teamName} (${engagement.idCompetition.nom})`);

            try {
                const pouleData = await fetchPouleData(pouleId);

                if (!pouleData.data) continue;

                // Traiter les matchs
                const matches = pouleData.data.rencontres || [];
                for (const match of matches) {
                    const isHome = match.idEngagementEquipe1?.idOrganisme?.code === 'NOR0014042';
                    const opponent = isHome ? match.nomEquipe2 : match.nomEquipe1;
                    const matchDate = new Date(match.date_rencontre);

                    const matchData = {
                        team: teamName,
                        teamCode: teamCode,
                        opponent: opponent,
                        date: formatDate(match.date_rencontre),
                        time: formatTime(match.date_rencontre),
                        home: isHome
                    };

                    // Ajouter le score pour les matchs passés
                    if (match.joue) {
                        matchData.score = isHome
                            ? `${match.resultatEquipe1}-${match.resultatEquipe2}`
                            : `${match.resultatEquipe2}-${match.resultatEquipe1}`;
                    }

                    // Classer en futur ou passé
                    if (matchDate > now && !match.joue) {
                        upcomingMatches.push(matchData);
                    } else if (match.joue) {
                        lastMatches.push(matchData);
                    }
                }

                // Traiter le classement
                const classements = pouleData.data.classements || [];
                const myClassement = classements.find(c =>
                    c.idEngagement?.id === engagement.id
                );

                if (myClassement) {
                    rankings.push({
                        team: teamName,
                        teamCode: teamCode,
                        engagementID: engagement.id,
                        pouleId: pouleId,
                        division: engagement.idCompetition.nom,
                        position: `${myClassement.position}${myClassement.position === '1' ? 'er' : 'ème'}`,
                        points: `${myClassement.points} pts`,
                        played: parseInt(myClassement.matchJoues),
                        wins: parseInt(myClassement.gagnes),
                        losses: parseInt(myClassement.perdus)
                    });
                }

            } catch (error) {
                console.error(`  ❌ Erreur pour ${teamName}:`, error.message);
            }
        }

        // Trier les résultats
        upcomingMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
        lastMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
        rankings.sort((a, b) => parseInt(a.position) - parseInt(b.position));

        // Sauvegarder les résultats
        const results = {
            upcomingMatches: upcomingMatches.slice(0, 10), // Top 10 prochains matchs
            lastMatches: lastMatches.slice(0, 10), // Top 10 derniers matchs
            rankings: rankings,
        };

        fs.writeFileSync('ffbb_data.json', JSON.stringify(results, null, 2));

        console.log('\n✅ Données générées avec succès!');
        console.log(`📊 ${upcomingMatches.length} matchs à venir`);
        console.log(`📊 ${lastMatches.length} derniers matchs`);
        console.log(`📊 ${rankings.length} classements`);
        console.log('\n📁 Fichier généré: ffbb_data.json');

        // Afficher un aperçu
        console.log('\n--- APERÇU ---\n');
        console.log('Prochains matchs:');
        upcomingMatches.slice(0, 3).forEach(m => {
            console.log(`  ${m.team} vs ${m.opponent} - ${m.date} ${m.time} (${m.home ? 'Domicile' : 'Extérieur'})`);
        });

        console.log('\nClassements:');
        rankings.slice(0, 5).forEach(r => {
            console.log(`  ${r.team}: ${r.position} - ${r.points} (${r.division})`);
        });

    } catch (error) {
        console.error('❌ Erreur:', error.message);
        process.exit(1);
    }
}

// Exécuter le script
main();