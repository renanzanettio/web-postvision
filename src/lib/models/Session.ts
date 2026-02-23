import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise", required: true },
  date: { type: Date, default: Date.now },
  durationInSeconds: Number,
  landmarksPath: String,
  report: {
    correctReps: Number,
    incorrectReps: Number,
    averageAccuracy: Number,
    comment: {
      text: String,
    },
  },
});

export default mongoose.models.Session || mongoose.model("Session", SessionSchema);