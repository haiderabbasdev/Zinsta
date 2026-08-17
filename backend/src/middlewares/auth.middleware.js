const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require('jsonwebtoken');


async function authFoodPartnerMiddleware(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please Login First"
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decodedToken.id);

        req.foodPartner = foodPartner;

        next();

    } catch (err) {

        console.log(err);
        return res.status(401).json({
            message: "Internal server error"
        });
    }
};

module.exports = {
    authFoodPartnerMiddleware
};
