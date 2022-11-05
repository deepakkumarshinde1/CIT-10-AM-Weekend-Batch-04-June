const router = require("express").Router();
const collection = require("../app/Controller/CollectionController");

router.get("/", (request, response) => {
  response.status(200).send({ status: true });
}); // home route

router.get("/api/get-collection-list", collection.getCollectionData);
/*
router.put()
router.post()
router.delete()*/

module.exports = router;
