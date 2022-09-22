const ErrHndlr = (error, _req, res, _next) => {
    // console.log(error);
    res.status(error.status || 400).json({ message: error.message });
};

module.exports = ErrHndlr;