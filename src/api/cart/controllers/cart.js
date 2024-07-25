"use strict";

/**
 * cart controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = {
  async findAllCarts(ctx) {
    try {
      const carts = await strapi.db.query("api::cart.cart").findMany();
      ctx.body = {
        data: carts,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        error: error.message,
      };
    }
  },
  async createCart(ctx) {
    try {
      const { productId } = ctx.params;
      const { qty } = ctx.request.body;
      const product = await strapi.db
        .query("api::product.product")
        .findOne({ where: { id: productId } });
      if (!product) {
        ctx.status = 404;
        ctx.body = {
          error: "Product not found",
        };
        return;
      }

      //jika product ada
      const cart = await strapi.db.query("api::cart.cart").create({
        data: {
          price: product.price * qty,
          qty: qty,
          products: product.id
          ,
        },
      });
      ctx.status = 201;
      ctx.body = {
        message: "Create successfuly",
        data: cart,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        error: error.message,
      };
    }
  },
};
