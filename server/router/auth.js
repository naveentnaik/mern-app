const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello from router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    res.status(422).json({ error: "please fill the fields properly" });
  } else if (password !== cpassword) {
    res.status(422).json({ error: "password is not matching" });
  } else {
    try {
      const userExist = await User.findOne({ email: email });

      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      } else {
        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });
        const userRegister = await user.save();
        if (userRegister) {
          res.status(201).json({ message: "user registered successfully" });
        } else {
          res.status(500).json({ error: "Failed to register" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "plz fill the data" });
    } else {
      const userData = await User.findOne({ email: email });
      if (userData) {
        const isMatch = await bcrypt.compare(password, userData.password);
        const token = await userData.generateAuthToken();

        if (isMatch) {
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
          });
          res.json({ message: "login sucessfull" });
        } else {
          res.status(400).json({ message: "wrong deatils" });
        }
      } else {
        res.json({ message: "wrong deatils" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      res.json({ message: "please fill the contact form" });
    } else {
      const userContact = await User.findOne({ _id: req.userID });

      if (userContact) {
        const userMessage = await userContact.addMessage(
          name,
          email,
          phone,
          message
        );
        await userContact.save();
        res.status(201).json({ message: "user contact successfull" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout',(req,res)=>{
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('User logout');
})

module.exports = router;
