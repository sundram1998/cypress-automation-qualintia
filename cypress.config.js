const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const environment = config.env.HOST_ENV || "prod";
      const baseUrls = {
        prod: "https://magento.softwaretestingboard.com/",
        qa1: "https://www.example.com",
      };
      config.baseUrl = baseUrls[environment];
      return config;
    },
  },
  defaultCommandTimeout: 10000,
});
