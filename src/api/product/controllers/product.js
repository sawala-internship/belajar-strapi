"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = {
  async customAction(ctx) {
    try {
      // Menggunakan strapi.query untuk mengakses model
      const products = await strapi.db.query("api::product.product").findMany();
      ctx.body = {
        data: products,
      };
    } catch (err) {
      ctx.send({ error: err.message });
    }
  },
  async createCustom(ctx) {
    try {
      const { name, price, description } = ctx.request.body;
      const product = await strapi.db.query("api::product.product").create({
        data: { name, price, description, publishedAt: new Date() },
      });
      ctx.body = {
        message: "Create successfuly",
        data: product,
      };
    } catch (error) {
      ctx.send({ error: error.message });
    }
  },
  async updateCustom(ctx) {
    try {
      const data = { ...ctx.request.body };
      const { id } = ctx.params;
      const product = await strapi.db.query("api::product.product").update({
        data: data,
        where: { id: id },
      });
      if (!product) {
        ctx.status = 404;
        ctx.body = {
          error: "Product not found",
        };
        return;
      }
      ctx.body = {
        message: "Update successfuly",
        data: product,
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        error: error.message,
      };
    }
  },
  async deleteCustom(ctx) {
    try {
      const { id } = ctx.params;
      const product = await strapi.db.query("api::product.product").delete({
        where: {
          id: id,
        },
      });
      if (!product) {
        ctx.status = 404;
        ctx.body = {
          error: "Product not found",
        };
        return;
      }
      ctx.body = {
        message: "Delete successfuly",
      };
    } catch (error) {
      ctx.body = {
        error: error.message,
      };
      ctx.status(400);
    }
  },
};
