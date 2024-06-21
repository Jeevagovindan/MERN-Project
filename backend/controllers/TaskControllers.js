const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Jeev@1366289",
  database: "100percentpure",
});

module.exports.userLogin = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password, "login");
  const sql = "SELECT * FROM customer WHERE email_id=? AND password=?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (data.length > 0) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(401).json({ message: "account_not_found" });
    }
  });
};

module.exports.Register = (req, res) => {
  console.log("server got an values");
  const sql = `INSERT INTO customer (name, email_id, password, gender, dob, country, mobile_no) VALUES (?)`;
  const VALUES = [
    req.body.name,
    req.body.email_id,
    req.body.password,
    req.body.gender,
    req.body.dob,
    req.body.country,
    req.body.mobile_no,
  ];
  db.query(sql, [VALUES], (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Registration failed. Please try again later." });
    }
    return res.status(200).json({ message: "Registration successful." });
  });
};
//forgotpassword

module.exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  console.log(email, "login serverside");
  const sql = "SELECT * FROM customer WHERE email_id=?";
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (data.length > 0) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(401).json({ message: "account_not_found" });
    }
  });
};

module.exports.passwordSet = (req, res) => {
  const { password, email } = req.body;
  console.log(email, password, "login serverside");
  const sql = "UPDATE customer SET password = ? WHERE email_id=?";
  db.query(sql, [password, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (data.changedRows > 0) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(401).json({ message: "account_not_found" });
    }
  });
};

//admin
module.exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM admin WHERE email_id=? AND password=?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (data.length > 0) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(401).json({ message: "account_not_found" });
    }
  });
};
module.exports.adminprofile = (req, res) => {
  const { email } = req.body;
  console.log(email, "backend");
  const sql = "SELECT * FROM admin WHERE email_id=?";
  db.query(sql, [email], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (data.length > 0) {
      const adminData = {
        firstName: data[0].f_name,
        lastName: data[0].l_name,
        email: data[0].email_id,
        role: data[0].role,
        mobileNo: data[0].mobile_no,
        age: data[0].age,
        address: data[0].address,
      };

      return res.status(200).json(adminData);
    } else {
      return res.status(401).json({ message: "account_not_found" });
    }
  });
};

// category
module.exports.categoryGet = (req, res) => {
  const sql = "SELECT * FROM category";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.categoryPost = (req, res) => {
  const { id, name } = req.body;
  const sqlInsert =
    "INSERT INTO category(category_id,category_name)VALUES (?,?)";
  db.query(sqlInsert, [id, name], (error, result) => {
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.categoryDelete = (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM category WHERE category_id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
};
module.exports.categoryGetById = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM category WHERE category_id = ?";
  db.query(sqlGet, id, (error, result) => {
    // console.log(result);
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.categoryUpdate = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sqlUpdate =
    "UPDATE category SET category_name = ? WHERE category_id = ?";
  db.query(sqlUpdate, [name, id], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.send(result);
  });
};

//subcategory
module.exports.subcategoryGet = (req, res) => {
  const sql = "SELECT * FROM subcategory";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(result);
  });
};

module.exports.subcategoryCreate = (req, res) => {
  const { id, subcategory, category } = req.body;
  console.log(id, subcategory, category);
  const sql =
    "INSERT INTO subcategory (subcategory_id,subcategory_name, category_name) VALUES (?, ?,?)";
  db.query(sql, [id, subcategory, category], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(201).json({ message: "Subcategory created successfully" });
  });
};

module.exports.subcategoryGetById = (req, res) => {
  const subcategoryId = req.params.id;
  const sql = "SELECT * FROM subcategory WHERE subcategory_id = ?";
  db.query(sql, [subcategoryId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    return res.json(result);
  });
};

module.exports.subcategoryUpdate = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql =
    "UPDATE subcategory SET subcategory_name=? WHERE subcategory_id=?";
  db.query(sql, [name, id], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.send(result);
  });
};

module.exports.subcategoryDelete = (req, res) => {
  const { id } = req.params;
  console.log(id, "backend");
  const sql = "DELETE FROM subcategory WHERE subcategory_id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.status(200).json({ message: "Subcategory deleted successfully" });
  });
};

//colors

module.exports.colorGet = (req, res) => {
  const sql = "SELECT * from colors";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.colorPost = (req, res) => {
  const { color_id, color_name } = req.body;
  const sql = "INSERT INTO colors (color_id,color_name) VALUES (?,?)";
  db.query(sql, [color_id, color_name], (error, result) => {
    if (error) {
      console.log(error);
      console.log(result);
    }
    return res.json(result);
  });
};

module.exports.colorGetById = (req, res) => {
  const color_id = req.params.id;
  const sql = "SELECT * FROM colors WHERE color_id = ?";
  db.query(sql, [color_id], (error, result) => {
    // console.log(result);
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.colorUpdate = (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  const sql = "UPDATE colors SET color_name = ? WHERE color_id = ?";
  db.query(sql, [req.body.name, id], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.send(result);
  });
};

module.exports.colorDelete = (req, res) => {
  const colorId = req.params.id;
  const sql = "DELETE FROM colors WHERE color_id = ?";
  db.query(sql, [colorId], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
};

//product
// module.exports.AddProduct = (req, res) => {
//   const {
//     product_name,
//     product_description,
//     product_price,
//     quantity,
//     category_id,
//     subcategory_id,
//     color_id,
//   } = req.body;
//   const sql =
//     "INSERT INTO products (product_name, product_description, product_price, images, quantity, category_id, subcategory_id, color_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//   db.query(
//     sql,
//     [
//       product_name,
//       product_description,
//       product_price,

//       quantity,
//       category_id,
//       subcategory_id,
//       color_id,
//     ],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: "Internal Server Error" });
//       }
//       return res.status(200).json({ message: "Product added successfully" });
//     }
//   );
// };

module.exports.AddProduct = (req, res) => {
  const {
    name,
    price,
    category,
    productdescription,
    productid,
    color,
    stock,
    selectedSubCategory,
    image,
  } = req.body;
  console.log(
    name,
    price,
    category,
    productdescription,
    productid,
    color,
    stock,
    selectedSubCategory,
    image,
    "backend image"
  );
  const sql =
    "INSERT INTO products (product_id,product_name, product_description,product_price,quantity, category,color,subcategory,image) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";
  db.query(
    sql,
    [
      productid,
      name,
      productdescription,
      price,
      stock,
      category,
      color,
      selectedSubCategory,
      image,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res.status(200).json({ message: "Product added successfully" });
    }
  );
};
module.exports.getSelectedsubcategory = (req, res) => {
  const { categoryName } = req.query;
  const sqlgetsubcatpro =
    "SELECT subcategory_name FROM subcategory WHERE category_name=?";
  db.query(sqlgetsubcatpro, [categoryName], (err, results) => {
    if (err) {
      console.error("Error fetching subcategories:", err);
      res.status(500).json({ error: "Failed to fetch subcategories" });
      return;
    }
    res.json({ subcategories: results });
  });
};

module.exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json(results);
  });
};

module.exports.getProductId = (req, res) => {
  const productId = req.params.id;
  const sql = "SELECT * FROM products WHERE product_id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(result[0]);
  });
};

// module.exports.updateProduct = (req, res) => {
//   const productId = req.params.id;
//   const {
//     product_name,
//     product_description,
//     product_price,
//     images,
//     quantity,
//     category_id,
//     subcategory_id,
//     color_id,
//   } = req.body;
//   const sql =
//     "UPDATE products SET product_name = ?, product_description = ?, product_price = ?, images = ?, quantity = ?, category_id = ?, subcategory_id = ?, color_id = ? WHERE product_id = ?";
//   db.query(
//     sql,
//     [
//       product_name,
//       product_description,
//       product_price,
//       images,
//       quantity,
//       category_id,
//       subcategory_id,
//       color_id,
//       productId,
//     ],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: "Internal Server Error" });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Product not found" });
//       }
//       return res.status(200).json({ message: "Product updated successfully" });
//     }
//   );
// };

module.exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const {
    product_name,
    product_price,
    category,
    subcategory,
    color,
    product_description,
    quantity,
  } = req.body;
  const sql =
    "UPDATE products SET product_name = ?, product_price = ?, category = ?, subcategory = ?, color = ?, product_description = ?, quantity = ? WHERE product_id = ?";
  db.query(
    sql,
    [
      product_name,
      product_price,
      category,
      subcategory,
      color,
      product_description,
      quantity,
      productId,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: "Product updated successfully" });
    }
  );
};

module.exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  const sql = "DELETE FROM products WHERE product_id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product Deleted successfully" });
  });
};

//category based products
module.exports.getProductCategory = (req, res) => {
  const { categoryName } = req.body;
  // console.log(categoryName, "backend");
  const sql = "SELECT * FROM products WHERE category = ?";
  db.query(sql, [categoryName], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(result);
  });
};

// shipping
module.exports.Shipping = (req, res) => {
  const { fname, lname, mobile, address, country, state, city, pin } = req.body;
  console.log(address, "fname");
  const sql =
    "INSERT INTO shipping1 (fname, lname, mobile, address, country, state, city, pin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [fname, lname, mobile, address, country, state, city, pin],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res
        .status(200)
        .json({ message: "Shipping details added successfully" });
    }
  );
};
module.exports.getShipping = (req, res) => {
  const sql = "SELECT * FROM shipping1 order by id desc limit 1";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json(results);
  });
};

// payment
module.exports.createPayment = (req, res) => {
  const { paymentMethod, cardNumber, nameOnCard, expiryDate, securityCode } =
    req.body;
  const sql =
    "INSERT INTO payment1 (payment_method,card_number,Name_on_card,Expiry_date,security_code) VALUES (?, ?,?,?,?)";
  db.query(
    sql,
    [paymentMethod, cardNumber, nameOnCard, expiryDate, securityCode],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res
        .status(200)
        .json({ message: "Payment details added successfully" });
    }
  );
};

//cart
module.exports.cartPost = (req, res) => {
  const { name, price, product_id, image } = req.body;
  console.log(image, "cart image");
  const sqlInsert =
    "INSERT INTO cart1 (product_name, product_price,product_id,image) VALUES (?,?,?,?)";
  db.query(sqlInsert, [name, price, product_id, image], (error, result) => {
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.json(result);
  });
};

module.exports.getCartItems = (req, res) => {
  const sql = "SELECT * FROM cart1";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json(results);
  });
};

module.exports.cartUpdate = (req, res) => {
  const Id = req.params.id;
  const { quantity, product_price } = req.body;

  const sql = "UPDATE cart1 SET quantity = ?, product_price = ? WHERE id = ?";
  db.query(sql, [quantity, product_price, Id], (error, result) => {
    if (error) {
      console.log(error);
      // You can handle the error response here
      return res
        .status(500)
        .json({ error: "An error occurred while updating the cart item." });
    }

    // Cart item updated successfully
    return res.json({ message: "Cart item updated successfully." });
  });
};

module.exports.cartremove = (req, res) => {
  const Id = req.params.id;
  const sql = "DELETE FROM cart1 WHERE product_id = ?";
  db.query(sql, [Id], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
};
module.exports.deletecart = (req, res) => {
  const sql = "DELETE FROM cart1";

  db.query(sql, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to delete data from cart1" });
    }

    return res.json({ message: "First row deleted from cart1" });
  });
};

//order
module.exports.orderPost = (req, res) => {
  const { orderData } = req.body;
  orderData.forEach((item) => {
    const { product_id, product_name, total_cost, quantity, image } = item;
    const query =
      "INSERT INTO orders1 (product_id, product_name, total_cost, quantity,image) VALUES (?, ?, ?, ?,?)";
    db.query(
      query,
      [product_id, product_name, total_cost, quantity, image],
      (error, results) => {
        if (error) {
          console.log("Error inserting order:", error);
          return res.status(500).json({ error: "Error inserting order" });
        }
      }
    );
  });
  res.sendStatus(200);
};

module.exports.getOrder = (req, res) => {
  const sqlSelect = "SELECT * FROM orders1";
  db.query(sqlSelect, (error, result) => {
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.json(result);
  });
};

module.exports.deleteOrder = (req, res) => {
  const sql = "DELETE FROM orders1";
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json(results);
  });
};
