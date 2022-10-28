import mongoose from "mongoose";
const Schema = mongoose.Schema;

const peepSchema = new Schema({
  content: { type: String, required: true },
  user: {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
  }
},{
    timestamps : true,
});


const Peep = mongoose.model("Peep", peepSchema);

export default Peep;