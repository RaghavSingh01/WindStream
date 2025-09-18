import mongoose from "mongoose";
import jwt from "jsonwebtoken";


export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB connection established");
  }
   catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;


export const createJWT = async (res, userId) => {
  const user = await mongoose.model('User').findById(userId).select('isAdmin');
  const token = jwt.sign(
    { userId, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.cookie("token", token, { 
    httpOnly: true, 
    secure: false, // Set to false for development
    sameSite: "lax", // Changed to lax for development
    maxAge: 1 * 24 * 60 * 60 * 1000,   // 1 day
    path: '/' // Ensure cookie is available for all paths
  });
}