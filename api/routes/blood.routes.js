import express from 'express'

import { detials } from "../controller/blood.controller.js";

const router=express.Router();



router.get("/blooddetials",detials)

export default router