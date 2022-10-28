import express from 'express';
import peepsControls from '../controllers/peepsProfileController.js';

const {getAllpeeps} = peepsControls;
export const router = express.Router();


router.route(`/`)
    .get(getAllpeeps);

