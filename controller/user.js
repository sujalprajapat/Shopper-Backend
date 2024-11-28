const user = require('../modal/user');
const bcrypt = require('bcrypt');
exports.signup = async (req , res) => {
    var b_pass =await bcrypt.hash(req.body.password,10);
    req.body.password = b_pass;
    try {
        const data = await user.create(req.body);
        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
