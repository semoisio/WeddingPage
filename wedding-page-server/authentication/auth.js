
module.exports = {
    autUser:  (req, res, next) => {
        console.log("Auth user: ",req.session.user);
        if (req.session.user == null){
            res.status(403);
            return res.send({ status: "NOT OK", error_msg: "Kirjaudu eka sisään"})
        }
    
        next();
    }
}