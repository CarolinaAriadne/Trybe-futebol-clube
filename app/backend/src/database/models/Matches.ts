import { DataTypes, Model } from "sequelize/types";
import db from ".";

class Matche extends Model {
  public id: number;
  public home_team: string;
  public home_team_goals: string;
  public away_team: string;
  public away_team_goals: string;
  public in_progress: boolean;
}

Matche.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    home_team: {
      type: DataTypes.STRING,
    },
    home_team_goals: {
      type: DataTypes.STRING,
    },
    away_team: {
      type: DataTypes.STRING,
    },
    away_team_goals: {
      type: DataTypes.STRING,
    },
    in_progresss: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "matches",
    timestamps: false,
  }
);
export default Matche;
