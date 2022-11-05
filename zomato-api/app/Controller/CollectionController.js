// call a data from model
let collectionData = require("../Model/collection.json");

// function
module.exports.getCollectionData = (request, response) => {
  response.status(200).send({
    status: true,
    collections: collectionData,
  });
};
