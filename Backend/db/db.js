// db/db.js
const mongoose = require("mongoose");

function connectToDB() {
  const dbURI = process.env.DB_CONNECT;

  if (!dbURI) {
    console.error("❌ DB_CONNECT not found in .env");
    process.exit(1);
  }

  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to Database"))
    .catch((err) => {
      console.error("❌ Database connection error:", err);
      process.exit(1);
    });
}

// ✅ ঠিকভাবে এক্সপোর্ট করো
module.exports = connectToDB;
