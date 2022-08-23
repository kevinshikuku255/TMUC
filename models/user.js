import mongoose from "mongoose";

/**
 * User schema
 */
const userSchema = new mongoose.Schema({
  name: String,
  admition: String,
  phone: String,
});

/** Posts model */
const User = mongoose.model("Students", userSchema);

export default User;
