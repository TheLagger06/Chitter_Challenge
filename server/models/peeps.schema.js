import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const peepsSchema = new Schema({
   
    content: { type: String, required: true },
  
});

export default peepsSchema;