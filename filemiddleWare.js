module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Provide Your Age");
    } else {
        next();
    }
}