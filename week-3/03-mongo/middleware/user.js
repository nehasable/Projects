const { User }=require("../db")
async function userMiddleware(req, res, next) {
    // Implement user auth logic

    //define the parameters to be used for this middleware
    const { username, password } = req.headers;
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
const user=await User.findOne({
    username:username,
    password:password
})
if(user){
    next()
}else{
    res.status(403).json({
        msg:"User doesn't exist"
    })
}
    //check if user exists by accessing it from the db

}

module.exports = userMiddleware;