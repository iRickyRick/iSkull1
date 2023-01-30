const axios = require("axios")

module.exports = (client) => {
    const instance = axios.create({
        baseURL: "https://disease.sh/v3/covid-19"
    })

    client.axios = instance
}