const admin = require("../config/firebase");

exports.authCheck = async (req, res, next) => {
//   console.log("hello middleware", req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

      req.user = firebaseUser

    //   console.log('firebaseUser ', req.user)
    next();
  } catch (err) {
    console.log(err);
  }
};
