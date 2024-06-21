const express = require("express");
const router = express.Router();
const {
  userLogin,
  Register,
  adminLogin,
  adminprofile,
  cartPost,
  getCartItems,
  deletecart,
  deleteOrder,
  cartremove,
  cartUpdate,
} = require("../controllers/TaskControllers");
const {
  forgotPassword,
  passwordSet,
} = require("../controllers/TaskControllers");
const {
  categoryGet,
  categoryPost,
  categoryDelete,
  categoryGetById,
  categoryUpdate,
} = require("../controllers/TaskControllers");
const {
  subcategoryCreate,
  subcategoryGet,
  subcategoryGetById,
  subcategoryUpdate,
  subcategoryDelete,
} = require("../controllers/TaskControllers");
const {
  colorGetById,
  colorUpdate,
  colorPost,
  colorGet,
  colorDelete,
} = require("../controllers/TaskControllers");
const {
  AddProduct,
  getProductId,
  getProducts,
  getProductCategory,
  deleteProduct,
  updateProduct,
  getSelectedsubcategory,
} = require("../controllers/TaskControllers");
const {
  createPayment,
  Shipping,
  getShipping,
} = require("../controllers/TaskControllers");

const { orderPost, getOrder } = require("../controllers/TaskControllers");
//Login
router.post("/userLogin", userLogin);
router.post("/userregister", Register);

//Forgotpassword
router.post("/forgotpassword", forgotPassword);
router.post("/passwordset", passwordSet);

//admin
router.post("/adminlogin", adminLogin);
router.post("/adminProfile", adminprofile);
// category
router.get("/categoryget", categoryGet);
router.post("/categorypost", categoryPost);
router.delete("/categorydelete/:id", categoryDelete);
router.get("/categorygetbyid/:id", categoryGetById);
router.put("/categoryupdate/:id", categoryUpdate);

//subcategory
router.get("/subcategoryget", subcategoryGet);
router.post("/subcategorypost", subcategoryCreate);
router.get("/subcategorygetbyid/:id", subcategoryGetById);
router.put("/subcategoryupdate/:id", subcategoryUpdate);
router.delete("/subcategorydelete/:id", subcategoryDelete);

//colors
router.get("/colorsget", colorGet);
router.post("/colorspost", colorPost);
router.get("/colorsgetbyid/:id", colorGetById);
router.put("/colorsupdate/:id", colorUpdate);
router.delete("/colorsdelete/:id", colorDelete);

//product
router.post("/addproduct", AddProduct);
router.get("/getselectsubcat", getSelectedsubcategory);
router.get("/products", getProducts);
router.get("/getproductbyid/:id", getProductId);
router.post("/getProductcategory", getProductCategory);
router.put("/productupdate/:id", updateProduct);
router.delete("/productdelete/:id", deleteProduct);

//cart
router.post("/addcart", cartPost);
router.get("/getcart", getCartItems);
router.put("/cartupdate/:id", cartUpdate);
router.delete("/cartremove/:id", cartremove);
router.delete("/cartdelete", deletecart);

//
router.post("/orderpost", orderPost);
router.get("/getorder", getOrder);
router.delete("/deleteOrder", deleteOrder);
// payment
router.post("/payment", createPayment);

// shipping
router.post("/shipping", Shipping);
router.get("/getshipping", getShipping);

module.exports = router;
