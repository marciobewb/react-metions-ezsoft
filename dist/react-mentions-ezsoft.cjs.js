'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-mentions-ezsoft.cjs.prod.js");
} else {
  module.exports = require("./react-mentions-ezsoft.cjs.dev.js");
}
