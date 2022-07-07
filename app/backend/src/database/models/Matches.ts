import { DataTypes, Model } from 'sequelize';
import db from '.';

class Matche extends Model {
  public id: number;
  public homeTeam: string;
  public homeTeamGoals: string;
  public awayTeam: string;
  public awayTeamGoals: string;
  public inProgress: boolean;
}

Matche.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeam: {
      type: DataTypes.STRING,
    },
    homeTeamGoals: {
      type: DataTypes.STRING,
    },
    awayTeam: {
      type: DataTypes.STRING,
    },
    awayTeamGoals: {
      type: DataTypes.STRING,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
  },
);
export default Matche;
