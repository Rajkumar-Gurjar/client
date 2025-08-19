import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function Coursedetils() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  // check login status from "user" in local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  // fetch course details (moved inside useEffect)
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await API.get(`/course/view/${id}`, {
          withCredentials: true,
        });
        setCourse(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [id]); // only depends on id

  // book now handler
  const handleBookNow = async () => {
    if (!isLoggedIn) {
      navigate("/login"); // redirect if not logged in
      return;
    }

    try {
      setLoading(true);
      const res = await API.post(
        `/booking/create/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (res.data.booking) {
        alert("Booking successful!");
        navigate("/mybooking"); // ya koi confirmation page
      } else {
        alert(res.data.message || "Booking failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return <div className="text-center my-5">Loading....</div>;
  }

  return (
    <>
      <img
        src="https://pninfosys.org/bannerFinal.jpg"
        alt=""
        className="w-100"
        style={{ height: "200px" }}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={course?.image.url}
              alt={course?.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <p>
              <strong>Price:</strong> ₹{course?.price}
            </p>
            <button
              className="btn btn-success"
              onClick={handleBookNow}
              disabled={loading}
            >
              {loading
                ? "Booking..."
                : isLoggedIn
                ? "Book Now"
                : "Login to Book"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursedetils;
