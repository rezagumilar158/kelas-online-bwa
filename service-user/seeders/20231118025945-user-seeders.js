'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [
      {
        name: "Reza",
        profession: "Admin Micro",
        role: "admin",
        email: "reza@admin.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Bebi",
        profession: "Front End Developer",
        role: "student",
        email: "bebi@mail.com",
        password: await bcrypt.hash('bebi12345', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('users', null, {});
  }
};
