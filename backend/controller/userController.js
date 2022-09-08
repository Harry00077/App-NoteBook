const User = require("../model/userModel");
const generateToken = require("../config/generateToken");

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    console.log(req.file);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      image: req.file.filename,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
    console.log(`${user.name} Signed In Successfully!!`);
  } else {
    console.log(`Invalid Email or Password`);
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
};

module.exports = { registerUser, authUser };
