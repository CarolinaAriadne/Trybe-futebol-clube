import CustomError from '../interfaces/custom.error';
// import ITeam from '../interfaces/Teams';
import Teams from '../database/models/Teams';


export default class TeamService{
    public getAllTeamsService = async () => {
        const teams = await Teams.findAll();
        return teams;
    };
};

export {TeamService};
