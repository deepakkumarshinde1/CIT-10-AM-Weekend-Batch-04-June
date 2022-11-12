const CollectionModel = require("../Model/CollectionModel");

// function
module.exports.getCollectionData = async (request, response) => {
  try {
    // get a data
    let result = await CollectionModel.find();
    response.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error: error,
    });
  }
};
