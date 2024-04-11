import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import axios from "axios";
import '../Pages/Admin/Admin.css';

export default function AdminReservation() {

    const [reservation, setReservation] = useState([]);

    const loadReservation = async () => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/reservation`);
            setReservation(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        loadReservation();
    }, []);

    return (
        <>
            <center>
                <h2>Reservations</h2>
            </center>

            <div className=" reservation-list">
                {
                    reservation.map((item, index) => {
                        const { firstName, lastName, email, phone, date, time } = item;

                        return (
                            <div className=" reservation-item" key={index}>
                                <h3>Name : {firstName} {lastName}</h3>
                                <p>Email : {email}</p>
                                <p>Phone : {phone}</p>
                                <p>Reservation Date : {date}</p>
                                <p>Time : {time}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
