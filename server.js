const app = require("./app");

const PORT = process.env.PORT || 3002;

const service = app.listen(PORT, () => {
  console.info(`server app running on port ${PORT}`);
});

service.on("error", (err) => console.error(err));
