import peepsProfile from '../models/peeps.model.js';
//import mongoose from 'mongoose';

const getAllpeeps = async(req,res)=>{
    const peeps = await peepsProfile.find();

    if (!peeps){
        return res.status(404).json({error: 'No peeps Found'})
    }

    res.status(200).json(peeps);

}

const PeepsControls = {getAllpeeps};

export default PeepsControls;