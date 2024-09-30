exports.sendReply = (req, res) => {
    const { from, to, subject, body } = req.body;
    res.status(200).json({ message: "Reply sent" });
  };
  