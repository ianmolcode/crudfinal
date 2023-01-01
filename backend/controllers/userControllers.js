const User = require("../model/user");

// create user route
exports.createUser = async (req, res) => {
  try {
    const { name, phone, age } = req.body;
    // check if all the details are present
    if (!name || !phone || !age) {
      throw new Error("Name,phone and age are required");
    }
    // check if user existed or not
    const existedUser = await User.findOne({ phone });
    if (existedUser) {
      throw new Error("User is Existed");
    }
    // Insert into the database
    const user = await User.create({ name, phone, age });
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
