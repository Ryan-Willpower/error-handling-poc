class GetHomePageError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

exports.GetHomePageError = GetHomePageError;
