
import User from "../models/authModel.js";
import jwt from "jsonwebtoken";
import Peeps from "../models/peeps.js";



const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "TheLagger super secret key", {
    expiresIn: maxAge,
  });
};


const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

 const register =  async (req, res, next) => {
  try {
    const { email, password, username, name } = req.body;
    const user = await User.create({ email, password, username, name });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }

 };

 const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true, email:user.email });
    console.log(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
 };

const register1 =  async (req, res, ) => {
  
  const comment = new Peeps({
    user: req.body.user,
    content: req.body.content,

    });
  
  try {
        const savedComment = await comment.save();
        const savedCommentWithUserData = await Peeps.findById(savedComment._id);
        res.send(savedCommentWithUserData); 
console.log(savedCommentWithUserData);
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }

 }; 



export  { register, login, register1 }
