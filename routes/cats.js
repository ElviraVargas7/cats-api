const express = require("express")
const catController = require("../controller/catsController")
const router = express.Router()

router.get("/", catController.getCats)
router.post("/", catController.createCat)
router.put("/:id", catController.updateCat)
router.delete("/:id", catController.deleteCat)
router.get("/:id", catController.getCat)

module.exports = router
