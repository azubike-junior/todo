const {
    Pool
} = require('pg')
const dotenv = require('dotenv')

dotenv.config();

const {
    DATABASE_URL,
    DATA_BASE
} = process.env

const production = {
    connectionString: DATABASE_URL
}

const development = {
    connectionString: DATA_BASE
}

const conf = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return production;

        default:
            return development;
    }
}

const pool = new Pool(conf())

module.exports = pool