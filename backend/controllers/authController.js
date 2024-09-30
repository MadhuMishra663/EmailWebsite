
exports.loginSuccess = (req, res) => {
    if (req.user) {
      res.status(200).json({
        message: "User successfully authenticated",
        user: req.user,
      });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  };
  
  exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
  };
  