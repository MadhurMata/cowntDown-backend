const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.get('/', (req, res, next) => {
  User.find({})
  .then((name)=>{
    console.log('backend', name)
    res.json(name).status(200)
  })
  .catch(next)
})

router.post('/create', (req, res, next) => {
  const { name } = req.body;
  console.log('object', name)
  const user = new User ({ name })
  user.save()
  .then((data)=>{
    res.json(data).status(200)

  })
  .catch(next)
});

module.exports = router;
