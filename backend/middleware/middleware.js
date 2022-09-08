const multer = require("multer");

const checkingSignUpData = (req, res, next) => {
  if (!req.body.firstname) {
    res.status(400).json({ message: "First Name is Required" });
    return;
  }
  if (!req.body.lastname) {
    res.status(400).json({ message: "Last Name is Required" });
    return;
  }
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Requied" });
    return;
  }
  next();
};

const checkingLogInData = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Required" });
    return;
  }
  next();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage }).single("avatar");

module.exports = { checkingSignUpData, checkingLogInData, upload };
