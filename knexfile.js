module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./lambda.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
