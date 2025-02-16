var express = require('express');
var router = express.Router();
const cart = require('../model/cart')
const register = require('../model/register')
const bcrypt = require('bcrypt');
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
var nodemailer = require('nodemailer');
const multer = require('multer')
const upload = multer({ dest: 'public/images' })
const otps = {};
const test = Joi.object({
  email: Joi.string().required(),
  newPassword: Joi.string().required(),
  confirm_pass: Joi.ref('newPassword')
})

// function generateOTP() {
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp.toString();
// }

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/add', async function (req, res, next) {
  try {
    var crypt = await bcrypt.hash(req.body.password, 10)
    const obj = {
      username: req.body.username,
      email: req.body.email,
      password: crypt
    }
    var data = await register.create(obj);
    res.status(200).json({
      status: "sucess",
      data
    })
  } catch (err) {
    res.status(401).json({
      status: "err",
      err
    })
  }
});
router.post('/send_image', upload.single('image'), async function (req, res, next) {
  try {
    const obj = {
      image: 'req.file',
      product_name: 'req.body',
      quantity: 'req.body',
      price: 'req.body'
    }
    var data = await register.create(obj);
    res.status(200).json({
      status: "sucess",
      obj
    })
  } catch (err) {
    res.status(401).json({
      status: "error",
      err
    })
  }
});
router.get('/get', async function (req, res, next) {
  try {
    var data = await register.find()
    res.status(200).json({
      status: "sucess",
      data
    })
  } catch (err) {
    res.status(401).json({
      status: "sucess",
      err
    })
  }
});
router.get('/find/:id', async function (req, res, next) {
  try {
    var data = await register.findById(req.params.id)
    res.status(200).json({
      status: "sucess",
      data
    })
  } catch (err) {
    res.status(401).json({
      status: "sucess",
      err
    })
  }
});
router.delete('/del/:id', async function (req, res, next) {
  try {
    var data = await register.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "sucess",
      data
    })
  } catch (err) {
    res.status(401).json({
      status: "sucess",
      err
    })
  }
});
router.patch('/upd/:id', async function (req, res, next) {
  try {
    var data = await register.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      status: "sucess",
      data
    })
  } catch (err) {
    res.status(401).json({
      status: "sucess",
      err
    })
  }
});



router.post('/log', async function (req, res, next) {
  try {
    var data = await register.findOne({ email: req.body.email });
    if (data != null) {
      var encrypt = await bcrypt.compare(req.body.password, data.password)
      if (encrypt == true) {
        console.log('success');
        res.status(200).json({
          status: "sucess",
          data
        })
      } else {
        console.log('password');
        res.status(401).json({
          status: "err",
          message: "please enter correct password"
        })
      }
    }
    else {
      console.log('email');
      res.status(401).json({
        status: "err",
        message: "please enter correct email"
      })
    }
  }
  catch (err) {
    res.status(401).json({
      status: "err",
      err
    })
  }
});

async function sendOTPEmail(userEmail, otp) {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ishvavekariya027@gmail.com',
      pass: 'ztgq soqz zill ahtu',
    },
  });

  let mailOptions = {
    from: 'ishvavekariya027@gmail.com',
    to: userEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
}

router.post('/forget', async function (req, res, next) {
  try {
    var data = await register.findOne({ email: req.body.email });
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    otps[email] = { otp, expiry: Date.now() + 300000 };
    console.log(otp);
    if (data != null) {
      await sendOTPEmail(email, otp);
      res.status(200).json({
        status: "success",
        message: 'OTP sent to email',
        data
      })
    }
  }
  catch (err) {
    res.status(401).json({
      status: "err",
      err
    })
  }
});
router.post('/verify-otp', async function (req, res, next) {
  try {
    const { email, otp } = req.body;

    if (!otps[email]) {
      return res.status(400).send('Invalid email');
    }

    const { otp: storedOtp, expiry } = otps[email];
    console.log(storedOtp);
    console.log(parseInt(otp, 10));
    if (Date.now() > expiry) {
      return res.status(400).send('OTP expired');
    }

    if (storedOtp === parseInt(otp, 10)) {
      res.status(200).send('OTP match');
    } else {
      res.status(400).send('Invalid OTP');
    }

  }
  catch (err) {
    res.status(401).json({
      status: "err",
      err
    })
  }
});
router.post('/updpass', validator.body(test), async function (req, res, next) {
  const { email, newPassword } = req.body;
  try {
    var data = await register.findOne({ email });

    if (data != null) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      data.password = hashedPassword;
      // console.log(req.body);
      // console.log(data.password);
      // console.log(hashedPassword);
      await data.save();
      res.status(200).json
        ({
          message: 'Password updated successfully'
        });
    }

  }
  catch (err) {
    res.status(401).json({
      status: "err",
      err
    })
  }
});

module.exports = router;
