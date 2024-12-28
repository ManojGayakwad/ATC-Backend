const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const app = express();

// Middleware
app.use(cors({
     origin:["https://anytime-chai-backend.vercel.app/"],
     methods:["POST", "GET", "PUT", "PATCH"],
     credentials:true
}));
app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
const beverageRoutes = require("./routes/beverageRoutes");
const orderRoutes = require("./routes/orderRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

app.use("/api/beverages", beverageRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/resources", resourceRoutes);

// Health check route
app.get("/", (req, res) => {
    res.send("Server is running successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
