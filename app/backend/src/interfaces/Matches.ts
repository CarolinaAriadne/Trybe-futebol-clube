interface IMatche{
    id?: number;
    homeTeam: string;
    homeTeamGoals: string;
    awayTeam: string;
    awayTeamGoals: string;
    inProgress?: boolean;
}

export default IMatche;