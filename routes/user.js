const express = require('express');
const router = express.Router();
const User = require("../models/user");



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.put('/',  (req, res, next) => {
//   const { name } = req.body;
//   User.find({ name })
//   .then((data)=>{
//     res.json(data).status(200);
//   })
//   .catch(next);
// });

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
