const {
    Pool
} = require('pg')
const dotenv = require('dotenv')

dotenv.config();

const {
    DATA_BASE
} = process.env

const production = {
    DATA_BASE
}

const development = {
    DATA_BASE
}

const conf = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return production;

        case 'development':
            return development;
    }
}

const pool = new Pool(conf())

module.exports = pool