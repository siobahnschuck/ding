require('dotenv').config()

module.exports = {
  development: {
    database: 'ding_database_development',
    dialect: 'postgres'
  },
  test: {
    database: 'ding_database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
