'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'quizzes',
      'time',
      {type: Sequelize.INTEGER}
  );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('quizzes', 'time');
  }
};
