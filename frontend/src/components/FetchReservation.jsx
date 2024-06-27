import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FetchReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await axios.get('http://localhost:8070/api/v1/reservation/fetch');
        setReservations(data.data);
      } catch (error) {
        setError('Error fetching reservations');
      }
    };

    fetchReservations();
  }, []);

  //logout from page
  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:8070/api/v1/user/adminlogout', {
        withCredentials: true,
      });
      toast.success(response.data.message);
      navigateTo('/login'); 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (error) return <div>{error}</div>;

  //update status
  const handleUpdateStatus = async (reservationId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8070/api/v1/reservation/update/${reservationId}`,
        { status },
        { withCredentials: true }
      );
      setReservations((prevReservations) =>
        prevReservations.map((appointment) =>
          appointment._id === reservationId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //update arrived time
  const handleUpdateArrivalStatus = async (id, isCome) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8070/api/v1/reservation/arrival/${id}`,
        { isCome },
        { withCredentials: true }
      );
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation._id === id
            ? { ...reservation, isCome, arrivedTime: isCome ? new Date() : null }
            : reservation
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteReservation = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:8070/api/v1/reservation/delete/${id}`, { withCredentials: true });
      setReservations(reservations.filter(reservation => reservation._id !== id));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div className="Login-Nav">
        <button className="first-home" onClick={() => navigateTo("/addadmin")}> Add Admin </button>
        <button className="first-home2" onClick={handleLogout}> Logout </button>
      </div>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <div className="content">
              <div>
                <p>Hello Admin,</p>
              </div>
              <p>
                Your hard work and dedication are truly appreciated. Thank you for all that you do to keep things running smoothly!
              </p>
            </div>
          </div>
        </div>
        <div className="banner">
          <h5>Reservation</h5>
          {reservations.length === 0 ? (
            <div>No reservations found</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Arrived Time</th>
                  <th>Iscome</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation._id}>
                    <td>{`${reservation.firstName} ${reservation.lastName}`}</td>
                    <td>{reservation.date.substring(0, 16)}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.email}</td>
                    <td>{reservation.phone}</td>
                    <td>
                      <select
                        className={`value-${reservation.status.toLowerCase()}`}
                        value={reservation.status}
                        onChange={(e) =>
                          handleUpdateStatus(reservation._id, e.target.value)
                        }
                      >
                        <option value="Reservated" className="value-reservated">Reservated</option>
                        <option value="cancelled" className="value-cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      {reservation.arrivedTime
                        ? formatTime(reservation.arrivedTime)
                        : ""}
                    </td>
                    <td>
                      <select
                        className={`value-${reservation.isCome ? 'yes' : 'no'}`}
                        value={reservation.isCome ? "Yes" : "No"}
                        onChange={(e) =>
                          handleUpdateArrivalStatus(reservation._id, e.target.value === "Yes")
                        }
                      >
                        <option value="Yes" className="value-no">Yes</option>
                        <option value="No" className="value-yes">No</option>
                      </select>
                    </td>
                    <td>
                      <button className="delete-button" onClick={() => handleDeleteReservation(reservation._id)}> Delete </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default FetchReservation;
