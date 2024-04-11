import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
};

connectDB();

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is up and running"
    })
});

// Reservation form api

import Reservation from "./models/Reservation.js";

app.post("/reservation", async (req, res) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    try {
        const newReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            data: newReservation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create reservation",
            error: error.message
        });
    }
});

app.get("/reservation", async (req, res) => {
    try {
        const reservations = await Reservation.find();
        
        res.json({
            success: true,
            message: "Reservations fetched successfully",
            data: reservations
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch reservations",
            error: error.message
        });
    }
});










app.listen(PORT, () => console.log(
    `Server running on port: ${PORT}`
));