const { response, request } = require('express');
const config = require('../config');
const axios = require('axios');


const indicadoresGet = async (req, res) => {
    try {
        const response = await axios.get(config.ideconURL(req.query.indicatorName));
        return res.status(200).json(response.data)
    } catch (error) {
        return error
    }
}

module.exports = {
    indicadoresGet,
}