import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  await queryInterface.createTable('Demo3s', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // Use DataTypes.INTEGER instead of Sequelize.INTEGER
    },
    name: {
      type: DataTypes.STRING, // Use DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE, // Use DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE, // Use DataTypes.DATE
    },
  });
};

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable('Demo3s');
};
