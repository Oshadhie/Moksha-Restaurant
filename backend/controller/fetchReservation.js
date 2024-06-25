import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const fetch_reservations = async (req, res, next) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json({
        success: true,
        count: reservations.length,
        data: reservations,
      });
    } catch (error) {
      next(error);
    }
  };


export default fetch_reservations;
