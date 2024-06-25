import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await axios.get('http://localhost:8070/api/v1/reservations');
        setReservations(data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching reservations');
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            <strong>{reservation.firstName} {reservation.lastName}</strong> - {reservation.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservation;
