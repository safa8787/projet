const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema({
  name: { type: String, required: true },

  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default:"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"},
  category: { type: String, default:"user"}
});

module.exports = mongoose.model("user", userschema);
