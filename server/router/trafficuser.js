const express = require('express');

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// const User = require('../modal/User');
// const Dmuser = require('../modal/DM');
// const Hospuser = require('../modal/Hospitaluser');
const Trafficuser = require('../modal/Trafficuser');
const router = express.Router();

router.post(
  '/trafficregister',
  [
    check('username', 'Please Enter a Valid Username').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const body = req.body;

    console.log(req);
    const username = body.username;
    const email = body.email;
    const password = body.password;

    try {
      let trafficuser = await Trafficuser.findOne({
        email,
      });
      if (trafficuser) {
        return res.status(400).json({
          msg: 'DM User Already Exists',
        });
      }

      trafficuser = new Trafficuser({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      trafficuser.password = await bcrypt.hash(password, salt);

      await trafficuser.save();

      const payload = {
        trafficuser: {
          id: trafficuser.id,
        },
      };

      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Error in Saving');
    }
  }
);
router.post(
  '/trafficlogin',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const body = req.body;
    const email = body.email;
    const password = body.password;

    try {
      let trafficuser = await Trafficuser.findOne({
        email,
      });
      if (!trafficuser) {
        return res.status(400).json({
          msg: 'traffic User Not Registered',
        });
      }

      const isMatch = await bcrypt.compare(password, trafficuser.password);

      if (!isMatch) {
        return res.status(401).json({
          msg: 'Incorrect Password',
        });
      }

      const payload = {
        hospuser: {
          id: trafficuser.id,
        },
      };

      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
