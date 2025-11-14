import { notFound } from "next/navigation";
import type {Metadata} from "next";
import {Engagement, TeamByEngagementID, TeamPictureByEngagementID, Teams} from "@/data/teams";
import Link from "next/link";
import Image from "next/image";
import {ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Trophy} from "lucide-react";
import {PATHS} from "@/data/routes";
import {Card, CardContent} from "@/components/ui/card";
import {FFBB_LINKS, IsHome, MatchByEngagement, RankingFromEngagement, Rencontre} from "@/data/ffbb";
import {Badge} from "@/components/ui/badge";
import {FormatShortDate, FormatTime} from "@/data/const";

type TeamPageProps = {
    params: Promise<{ engagement: string }>
};

export async function generateMetadata(
    { params }: TeamPageProps,
): Promise<Metadata> {
    const { engagement } = await params

    const team = TeamByEngagementID(engagement)
    if (!team) return { title: "Équipe introuvable" };

    return {
        title: `${team.idCompetition.code} | Nos équipes`,
        description: `Découvrez les informations sur l’équipe ${team.idCompetition.code}.`,
        openGraph: {
            images: [TeamPictureByEngagementID(team.id).src],
        },
    }
}

export default async function TeamPage({ params }: TeamPageProps) {
    const { engagement } = await params
    const teams = Teams()
    const team = teams.find((t:Engagement) => t.id === engagement);

    if (!team) notFound();

    return (
        <main className="p-6 sm:p-3">
            <TeamDetailComponent team={team} />
        </main>
    );
}

type TeamDetailsCardProps = {
    team: Engagement;
}

export function TeamDetailComponent({team}: TeamDetailsCardProps) {
    const ranking = RankingFromEngagement(team.id)
    const matches = MatchByEngagement(team.id)
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Version desktop */}
            <div className="hidden md:block overflow-x-auto">
                <section className="relative h-[100vh] sm:h-[70vh] lg:h-[70vh] overflow-hidden">
                    <Image
                        src={TeamPictureByEngagementID(team.id)}
                        alt={team.idCompetition.nom}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                        <div className="max-w-7xl mx-auto">
                            <Link
                                href={PATHS.TEAMS.path}
                                className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors mb-4"
                            >
                                <ArrowLeft size={20} />
                                <span>Retour aux équipes</span>
                            </Link>
                            <h1 className="text-white mb-4">
                                {team.idCompetition.nom}
                            </h1>
                            <Badge className="bg-red-600 text-white hover:bg-red-700">
                                {team.idCompetition.code}
                            </Badge>
                        </div>
                    </div>
                </section>
            </div>
            {/* Version mobile */}
            <div className="md:hidden space-y-4">
                <section className="relative overflow-hidden">
                    <Image
                        src={TeamPictureByEngagementID(team.id)}
                        alt={team.idCompetition.nom}
                        className="w-full h-full object-cover"
                    />
                    <div className="max-w-7xl mx-auto">
                        <h1>
                            {team.idCompetition.nom}
                        </h1>
                    </div>
                </section>
            </div>

            {/* Contenu principal */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-12">
                {/* Informations de l'équipe */}
                <div className="mb-12">
                    <Card>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-red-600 mb-4">Informations</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-gray-600">Division</p>
                                            <p>
                                                <span className="text-black">{team.idCompetition.code}</span> - <span className="text-gray-600">{team.idCompetition.nom}</span>
                                            </p>
                                        </div>
                                        {team.idPoule && (
                                            <div>
                                                <p className="text-sm text-gray-600">Poule</p>
                                                <p className="text-gray-600">{team.idPoule?.nom}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {ranking && (
                                    <div>
                                        <h3 className="text-red-600 mb-4 flex items-center gap-2">
                                            <Trophy size={24} className="text-red-600" />
                                            Classement Actuel
                                        </h3>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-gray-600">Position</p>
                                                    <p className="text-red-600">{ranking.position}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Points</p>
                                                    <p className="text-black">{ranking.points}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Matchs joués</p>
                                                    <p className="text-black">{ranking.played}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Victoires</p>
                                                    <p className="text-black">{ranking.wins}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Défaites</p>
                                                    <p className="text-black">{ranking.losses}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Ratio</p>
                                                    <p className="text-black">
                                                        {((ranking.wins / ranking.played) * 100).toFixed(0)}%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <Link
                                                href={FFBB_LINKS.teamDetail + team.id}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm mb-3"
                                            >
                                                <span>Voir le classement complet sur FFBB</span>
                                                <ExternalLink size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Calendrier et Résultats dans un tableau */}
                <div className="mb-12">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-red-600 mb-6">Calendrier et Résultats</h3>

                            {/* Version desktop */}
                            <div className="hidden md:block overflow-x-auto">
                                <div className="space-y-2">
                                    {matches.map((match, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-8 gap-4 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            {/* Numéro de journée */}
                                            <div className="col-span-1">
                                                <span className="text-red-600">
                                                  #J{match.numeroJournee}
                                                </span>
                                            </div>

                                            {/* Date et heure */}
                                            <div className="col-span-1">
                                                <p className="text-black">
                                                    <span className="text-gray-600">{FormatShortDate(match.date_rencontre)}</span><br/>
                                                    <span className="text-gray-600">{FormatTime(match.date_rencontre)}</span>
                                                </p>
                                            </div>

                                            {/* Reception */}
                                            <div className="col-span-2">
                                                <p className="text-black">{match.nomEquipe1}</p>
                                            </div>

                                            {/* Adversaire */}
                                            <div className="col-span-2">
                                                <p className="text-black">{match.nomEquipe2}</p>
                                            </div>

                                            {/* Score ou À venir */}
                                            <div className="text-right col-span-2">
                                                {match.joue && match.resultatEquipe1 && match.resultatEquipe2 ? (
                                                    <div className="flex items-center justify-end gap-3">
                                                        <span className={`${match.resultatEquipe1 > match.resultatEquipe2 ? 'text-red-600' : 'text-gray-400'}`}>
                                                          {match.resultatEquipe1}
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            {match.resultatEquipe1 > match.resultatEquipe2 ? (
                                                                <ChevronLeft size={16} className="text-red-600" />
                                                            ) : (
                                                                <ChevronRight size={16} className="text-gray-400" />
                                                            )}
                                                            <span className="text-black">VS</span>
                                                            {match.resultatEquipe1 < match.resultatEquipe2 ? (
                                                                <ChevronRight size={16} className="text-red-600" />
                                                            ) : (
                                                                <ChevronLeft size={16} className="text-gray-400" />
                                                            )}
                                                        </div>
                                                        <span className={`${match.resultatEquipe2 > match.resultatEquipe1 ? 'text-red-600' : 'text-gray-400'}`}>{match.resultatEquipe2}</span>
                                                    </div>
                                                ) : (
                                                    <Badge className="bg-red-600 text-white hover:bg-red-700">
                                                        À venir
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Version mobile */}
                            <div className="md:hidden space-y-4">
                                {matches.map((match: Rencontre, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-4"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                              <span className="text-red-600">
                                                #J{match.numeroJournee}
                                              </span>
                                            <Badge
                                                className={IsHome(match) ? "bg-red-600 text-white hover:bg-red-700" : ""}
                                            >
                                                {IsHome(match)? "Domicile" : "Extérieur"}
                                            </Badge>
                                        </div>

                                        <div className="mb-2">
                                            <p className="text-sm text-gray-600">{FormatShortDate(match.date_rencontre)}</p>
                                        </div>

                                        <div className="mb-3">
                                            <p className="text-black">vs {IsHome(match) ? match.nomEquipe2 : match.nomEquipe1}</p>
                                        </div>

                                        {match.joue && match.resultatEquipe1 && match.resultatEquipe2 ? (
                                            <div className="flex items-center justify-center gap-4 py-2">
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600 mb-1">LCBO</p>
                                                    <p className={`text-2xl ${match.resultatEquipe1 > match.resultatEquipe2 ? 'text-red-600' : 'text-gray-400'}`}>
                                                        {match.resultatEquipe1}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {match.resultatEquipe1 > match.resultatEquipe2 ? (
                                                        <ChevronLeft size={20} className="text-red-600" />
                                                    ) : (
                                                        <ChevronRight size={20} className="text-gray-400" />
                                                    )}
                                                    <span className="text-gray-600">VS</span>
                                                    {match.resultatEquipe1 < match.resultatEquipe2 ? (
                                                        <ChevronRight size={20} className="text-red-600" />
                                                    ) : (
                                                        <ChevronLeft size={20} className="text-gray-400" />
                                                    )}
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600 mb-1">Adv.</p>
                                                    <p className={`text-2xl ${match.resultatEquipe2 > match.resultatEquipe1 ? 'text-red-600' : 'text-gray-400'}`}>
                                                        {match.resultatEquipe2}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <Badge variant="outline" className="border-red-600 text-red-600">
                                                    À venir
                                                </Badge>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
