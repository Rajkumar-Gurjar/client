import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }


  }, [isLoggedIn, navigate, user]);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/booking/mybookings", {

      });
      console.log('data=', res)
      setBookings(res.data.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch bookings");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [])
  if (!isLoggedIn) return null;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.course.
                  title}</td>
                <td>₹{booking.course.price}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyBooking;