
module.exports = {
    autUser:  (req, res, next) => {
        console.log("Auth user: ",req.session.user);
        if (req.session.user == null){
            res.status(403);
            return res.send("Kirjaudu eka sisään")
        }
    
        next();
    }
}