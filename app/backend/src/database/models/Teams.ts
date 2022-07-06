import { DataTypes, Model } from "sequelize/types";
import db from ".";

class Team extends Model {
  public id: number;
  public team_name: string;
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
   team_name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "teams",
    timestamps: false,
  }
);
export default Team;
