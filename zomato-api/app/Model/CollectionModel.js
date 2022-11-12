// how create a schema ?

// import a mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema
const CollectionSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});

// create model
const CollectionModel = mongoose.model(
  "collection",
  CollectionSchema,
  "collections"
);

// export model
module.exports = CollectionModel;
