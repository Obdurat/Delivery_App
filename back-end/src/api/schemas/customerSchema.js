const Joi = require('joi');

const customerSchema = Joi.object({
  name: Joi.string().min(12).required().messages({
    'string.min': 'Name must be at least 12 characters long',
    'any.required': 'Name is required',
    'string': 'Name must be a string',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
});

module.exports = customerSchema;