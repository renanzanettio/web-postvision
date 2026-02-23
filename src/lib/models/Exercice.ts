import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  muscleGroup: String,
});

export default mongoose.models.Exercise || mongoose.model("Exercise", ExerciseSchema);