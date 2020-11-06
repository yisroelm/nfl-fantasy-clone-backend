'use strict';
export default (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};