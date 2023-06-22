import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    book: [{
      title: String,
      author: String,
      dates: String
    }]
  });
const bookModal = mongoose.model("test", bookSchema);
export default bookModal;