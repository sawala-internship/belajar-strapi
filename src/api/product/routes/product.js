"use strict";

/**
 * product router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products",
      handler: "product.customAction",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/products",
      handler: "product.createCustom",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/products/:id",
      handler: "product.deleteCustom",
    },
    {
      method: "PATCH",
      path: "/products/:id",
      handler: "product.updateCustom",
    },
  ],
};
