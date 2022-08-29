const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
	return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "365d" });
};
