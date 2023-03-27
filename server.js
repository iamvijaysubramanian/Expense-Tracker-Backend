require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/connectDb");
const userRoute=require("./routes/userRoute");
const transectionRoutes=require("./routes/transectionRoutes");


//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin:"*",
})
);

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files
// app.use(express.static(path.resolve(__dirname, "../build")));

// app.get("*", function(req,res){
//   res.sendFile(path.resolve(__dirname,"../build","/index.html"));
// });

//port
const PORT =process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});