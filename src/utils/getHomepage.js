const { GetHomePageError } = require("../errors/getHomepage");

async function getHomepage({ makeError = false }) {
  console.log(makeError);

  if (makeError) {
    throw new GetHomePageError("Custom error was throwed");
  }

  return { status: "ok" };
}

exports.getHomepage = getHomepage;
