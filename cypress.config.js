const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 1,
    // notebooks: {
    //     viewportHeight: 1366,
    //     viewportWidth: 768
    // },
    // mobile: {
    //     viewportHeight: 360,
    //     viewportWidth: 800
    // }
  },

  // mobile: {
  //   baseUrl: "http://localhost:3000",
  //   retries: 1,
  //   viewportHeight: 360,
  //   iewportWidth: 800,
  // },
});

// module.exports = notebooks({
//   baseUrl: "http://localhost:3000",
//   retries: 1,
//   viewportHeight: 1366,
//   viewportWidth: 768,
// });
