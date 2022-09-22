const adminSchema = require('../schemas/adminSchema');

const adminValidation = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const { error } = adminSchema.validate({ name, email, password, role });

  if (!error) return next();

  return res.status(400).json({ message: error.message });
};

module.exports = adminValidation;