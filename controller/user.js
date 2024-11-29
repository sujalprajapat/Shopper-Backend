const user = require('../modal/user');
const bcrypt = require('bcrypt');
const storage = require('node-persist');

storage.initSync( /* options ... */ );

exports.signup = async (req, res) => {
    var b_pass = await bcrypt.hash(req.body.password, 10);
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

exports.login = async (req, res) => {
    var { email, password } = req.body;
    const user_detail = await storage.getItem('user');
    if(user_detail == undefined){
        var data = await user.find({'email': email });
        if (data.length !== 0) {
            var result =await bcrypt.compare(password, data[0].password)
            if (result == true) {
                res.status(200).json({
                    status:true,
                    msg:'Login Succesfully',
                    data,
                })
                await storage.setItem('user',data)
            }
            else {
                res.status(200).json({
                    status:false,
                    msg: 'check you password',
                })
            }
        }
        else {
            res.status(200).json({
                status:false,
                msg:'check you email'
            })
        }
    }
    else {
        res.status(200).json({
            status:false,
            msg:'User is already login',
        })
    }
}

exports.logout = async (req,res)=>{
   await storage.removeItem('user');
   res.status(200).json({
    msg:'Logout successfully'
   })
} 