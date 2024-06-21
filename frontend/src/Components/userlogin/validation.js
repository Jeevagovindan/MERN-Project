function Validation(values) {
  let error = {};
  const email_pattern = new RegExp("[a-z0-9]+@[a-z]+[a-z]{2,3}");
  const password_pattern = new RegExp("[a-zA-Z0-9]{6,}");

  if (values.email === "") {
    console.log(values.email);
    error.email = "Name should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    console.log(values.password);
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;
