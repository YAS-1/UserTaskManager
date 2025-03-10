import User from "../models/users.model.js";
import bcrypt from "bcryptjs"; // For encrypting passwords
import { generateTokenAndSetCookie } from "../lib/generateToken.js";

export const signup = async (req, res) =>{
    try{
        const { fullName, username, email, password } = req.body; // The user is going to provide their details in the body

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to set the format of the email

        if (!emailRegex.test(email)){ // The emailRegex is used to check if the entered email is valid
            return res.status(400).json({ error: "Invalid email format"});
        }

        // Checking if the entered username already exists in the system
        const existingUser = await User.findOne({username});
        if (existingUser){
            return res.status(400).json({ error: "Username already exists"});
        }

        // Checking if the email already exists in the system
        const existingEmail = await User.findOne({email});
        if (existingEmail){
            return res.status(400).json({ error: "Email already exists"});
        }

        // Hashing / encrypting password using bcrypt
        if (password.length < 6){
            return res.status(400).json({ error: "Password must be at least 6 characters long"});
        }
        const salt = await bcrypt.genSalt(10); // generates a random salt that is applied before hashing the password.The salt makes similar passwords to have different hashing
        const hashedPassword = await bcrypt.hash(password, salt); // applying the hash and the salt to the salt       


        // creating the new user using the User model
        const newUser = new User({
            fullName:fullName,
            username:username,
            email:email,
            password:hashedPassword,
        });

        if (newUser){
            generateTokenAndSetCookie(newUser._id, res); // The generated token is used to authenticate the user
            await newUser.save();

            res.status(201).json({
                message: "User created successfully"
            });
        }
        else{
            res.status(400).json({ error: "Failed to create user" });
        }
    }
    catch(error){
        console.log(`Error in signup controller: ${error.message}`);

        res.status(500).json({ error: "Server error"});
    }

};


// function for the login endpoint
export const login = async (req, res) => {
    try{
        const {username, password }= req.body; // The user is going to provide their details in the body
        const user = await User.findOne({username}); // Checking if the entered username exists in the database
        const isPasswordValid = await bcrypt.compare(password, user?.password || ''); // Comparing the entered password with the hashed password in the database

        if (!user){
            return res.status(400).json({error: "Invalid username"}); // If the username is incorrect
        }
        if (!isPasswordValid){
            return res.status(400).json({error: "Invalid password"}); // If the password is incorrect
        }

        generateTokenAndSetCookie(user._id, res); // The generated token is used to authenticate the user

        res.status(200).json({
            message: "Login successful"
        });
    }
    catch(error){
        console.log(`Error in login controller: ${error.message}`);
        res.status(500).json({ error: "Server error"});
    }
};


// function for the logout endpoint
export const logout = async (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0}); // The cookie is set to expire immediately
        res.status(200).json({message: 'Logout successful'});
    }
    catch(error){
        console.log(`Error in logout controller: ${error.message}`);
        res.status(500).json({ error: "Server error"});
    }
};