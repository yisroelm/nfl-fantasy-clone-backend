'use strict';
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};