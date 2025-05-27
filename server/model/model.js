import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const signupSchema = mongoose.Schema({
  name: { type: String, required: true },  // fixed "require" -> "required"
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
signupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Define instance method correctly using `methods`, not `method`
signupSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const signupCollection = mongoose.model("signups", signupSchema);
export default signupCollection;
