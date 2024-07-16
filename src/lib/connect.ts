/**
* Import modules
*/
import 'dotenv/config';
import { Sequelize } from "sequelize";
var sequelize;

if (process.env.URL_CON_DB) {
  /**
   * Conexao com o BD via string
  */
  sequelize = new Sequelize(process.env.URL_CON_DB);

} else {
  /**
  * CONNECTION DB LOCAL
  */
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
  });
}

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}