"use strict";

/**
 * cart router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/products/:productId/carts",
      handler: "cart.createCart",
    },
    {
      method: "GET",
      path: "/carts",
      handler: "cart.findAllCarts",
    },
  ],
};
