import mongoose from "mongoose";

/**
 * User schema
 */
const studentSchema = new mongoose.Schema({
  name: String,
  admition: String,
  phone: String,
});

/** Posts model */
const Student = mongoose.model("Students", studentSchema);

export default Student;
