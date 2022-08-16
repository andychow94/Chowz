const userList = require('../../database/models/userList');

module.exports.saveStore = (req, res) => {
  const store = req.body;
  console.log('Store in addStore:', store);
  // res.sendStatus(200);
  userList.create(req.body)
    .then((result) => {
      // console.log('Saved:', result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in saving:', err);
    });
};

module.exports.deleteStore = (req, res) => {
  console.log('Delete req.body:', req.body);
  userList.findOneAndDelete({ _id: req.body._id })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Deletion err:', err);
    });
};

module.exports.findList = (req, res) => {
  userList.find({})
    .then((result) => {
      // console.log('Found List:', result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log('Error in finding list:', err);
    });
};
