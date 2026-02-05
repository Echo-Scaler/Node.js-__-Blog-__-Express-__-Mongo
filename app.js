require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");


const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static('public')); /* middleware အဖြစ်သုံးထားတာပါ။ */


//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main"); //default layout file name is maine.js
app.set("view engine", "ejs");

// EJS မှာ layout system မပါဘူး
// Header / Footer ကို page တစ်ခုချင်း include မလုပ်ချင်တဲ့အခါ
// Common layout တစ်ခုတည်းကို pages အားလုံးမှာ အသုံးချချင်လို့ သုံးပါတယ် -->


// separate routes in server/routes/main.js
app.use("/", require("./server/routes/main"));


















app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});