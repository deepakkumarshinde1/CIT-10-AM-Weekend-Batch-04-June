const router = require("express").Router();

router.get("/", (request, response) => {
  response.status(200).send({ status: true });
}); // home route
/*
router.put()
router.post()
router.delete()*/

module.exports = router;
