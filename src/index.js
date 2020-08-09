const express = require("express");

const { getHomepage } = require("./utils/getHomepage");
const { GetHomePageError } = require("./errors/getHomepage");

const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await getHomepage();

    return res.json(data);
  } catch (error) {
    console.error(error);

    console.log(
      `is error instanceof GetHomePageError: ${
        error instanceof GetHomePageError
      }`
    );
    console.log(`is error instanceof Error: ${error instanceof Error}`);

    return res.status(500).json({
      status: "not ok"
    });
  }
});

app.listen(8080, () => {
  console.log(`server is started!!`);
});
