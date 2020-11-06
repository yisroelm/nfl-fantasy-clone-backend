'use strict';
export default (sequelize, DataTypes) => {
  const game = sequelize.define('game', {
    total_points: DataTypes.INTEGER
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};