function message(req, res, next) {
    console.log("This message its coming from the middleware");
    next();
}

module.exports = {message};