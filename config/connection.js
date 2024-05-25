import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    storage: 'path/to/database.sqlite'
});

export default sequelize