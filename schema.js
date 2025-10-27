const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.object({
      filename: Joi.string().default('listing_image').allow("", null),
      url: Joi.string().default("https://images.unsplash.com/photo-1631988700156-0920ca45c8b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3").allow("", null)
    }).allow(null) // agar image pura object hi missing ho
  }).required(),
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required(),
})