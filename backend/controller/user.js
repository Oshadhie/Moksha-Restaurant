import {User} from "../models/user.js";
import { generateToken } from "../utils/jwtToken.js";
import ErrorHandler from "../middlewares/error.js";

export const userRegister = async (req, res, next) => {

  const { name, email, password } = req.body;

    if(
        !name ||
        !email ||
        !password
    ) {
        return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    
    const isRegistered = await User.findOne({ email });
      if (isRegistered) {
        return next(new ErrorHandler("User already Registered!", 400));
    }

    const user = await User.create({
        name,
        email,
        password,
        role: "User",
    });
    generateToken(user, "User Registered!", 200, res);

}



//login to the webside admin and user
export const login = async (req, res, next) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return next( new ErrorHandler("Please Fill Full Form!", 400));
    }
  
    if (password !== confirmPassword) {
      return next( new ErrorHandler("Password & Confirm Password Do Not Match!", 400));
    }
    
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next( new ErrorHandler("Invalid Email Or Password!", 400));
    }
    
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return next( new ErrorHandler("Invalid Email Or Password!", 400));        
    }
    
    const role = user.role;
    
    generateToken(user, "Login Successfully!", 201, res, { role });
      
};


// add new admin
export const addNewAdmin = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
  
    try {
      const isRegistered = await User.findOne({ email });
      if (isRegistered) {
        return next(new ErrorHandler("Admin With This Email Already Exists!", 400));
      }
  
      const admin = await User.create({
        name,
        email,
        password,
        role: "Admin",
      });
  
      res.status(200).json({
        success: true,
        message: "New Admin Registered",
        admin,
      });
    } catch (error) {
      next(error);
    }
  };


// Logout function for dashboard admin
export const logoutAdmin = async (req, res, next) => {
  res
    .status(201)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logged Out Successfully.",
    });
};
  