const User = require("../Models/Users");

exports.createAndUpdateUser = async (req, res) => {
  //   console.log('controller', req.user)

  const { name, email } = req.user;
  const user = await User.findOneAndUpdate({ email }, { name }, { new: true });
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await User({
      email,
      name,
    }).save();
    console.log("CREATED USER", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Current User Error!!");
  }
};
