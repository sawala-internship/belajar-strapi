"use strict";

/**
 * product service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = {
  async customFind(params) {
    // Implementasi logika custom Anda di sini
    return strapi.query("product").find(params);
  },
};
