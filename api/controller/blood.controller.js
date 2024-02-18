import User from "../models/user.model.js"
export const detials=async(req,res)=>{
    try {
        const users = await User.find({}, 'username bloodgroup mobile city state');
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
 };