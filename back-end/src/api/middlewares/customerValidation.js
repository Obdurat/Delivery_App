const customerSchema = require('../schemas/customerSchema');

const customerValidation = async (req, res, next) => {
  const { name, email, password } = req.body;
  const { error } = customerSchema.validate({ name, email, password });

  if (!error) return next();

  return res.status(400).json({ message: error.message });
};

module.exports = customerValidation;