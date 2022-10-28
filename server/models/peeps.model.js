import mongoose from 'mongoose';
import peepsSchema from './peeps.schema.js';


const PeepsProfile = mongoose.model(`Peeps`, peepsSchema);
export default PeepsProfile;