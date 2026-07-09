const express = require("express");
const router = express.Router({ mergeParams: true });

const { 
  getAllRestaurants,
  createRestaurant,
  getRestaurant,
  deleteRestaurant,
  analyzeRestaurantReviews,
} = require("../controllers/restaurantController");

const { protect } = require("../controllers/authController");
const { authorizeRoles } = require("../middlewares/authorizeRoles");

const menuRoutes = require("./menu");

router
  .route("/")
  .get(getAllRestaurants)
  .post(protect, authorizeRoles("admin"), createRestaurant);

router
  .route("/:storeId")
  .get(getRestaurant)
  .delete(protect, authorizeRoles("admin"), deleteRestaurant);

router
  .route("/:storeId/analyze")
  .put(
    protect,
    authorizeRoles("admin"),
    analyzeRestaurantReviews
  );

  router.use("/:storeId/menus", menuRoutes);

module.exports = router;
