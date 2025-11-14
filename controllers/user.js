const User=require("../models/user");

module.exports.renderSignupform=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup=async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    const newUser = new User({email,username});//Yeh line ek naya user object banati hai jisme email aur username set hote hain (password nahi)Still user abhi database me save nahi hua hai.
    const registeredUser=await User.register(newUser,password);
    //Yeh line user ko register (save) karti hai aur password ko hash karke securely store karti hai Yani database me ab ek user record ban gaya jisme username, email, aur encrypted password hote hain.
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","welcome to wanderlust");
        res.redirect("/listings");
    })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginform=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=async(req,res)=>{
    req.flash("success","welcome to wanderlust! you are logged in!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })};