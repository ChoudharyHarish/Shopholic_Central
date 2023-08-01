import User from "../Models/user.js";

const signUp = async (req, res) => {
    const {name,  email, password, confirmPassword } = req.body; 
    // console.log(req.body);

    //Implement address and Contact number functionality by accepting it here and then if user wants to update create endpoint for that

    if (confirmPassword !== password) res.status(404).json({ msg: "Password not matches" })
    try {
        const exists = await User.findOne({email});
        if(exists){
            return res.status(404).json({msg:"Email Already in Use Try Another"});
        }
        const user = await User.create({ name, email, password });
        const token = user.createJWT();
        // console.log(user);
        res.status(200).json({ name: user.name, email:user.email, userId: user._id, token });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" })
    }
}


const signIn = async (req, res) => {
    const { email, password } = req.body;

    // console.log(req.body);

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(202).json({ msg: "Invalid Email" });
    }
    // console.log(user);
    const isCorrect = user.comparePassword(password);
    if (!isCorrect) {
        res.status(202).json({ msg: "Invalid Credentials" });
    } 
    const token = user.createJWT();
    res.status(200).json({ name: user.name, email:user.email, userId: user._id, token })
}

export { signUp,signIn };

