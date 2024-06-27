import express from "express";
import {send_reservation, fetch_reservations, updateReservationStatus, updateArrivalStatus} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/fetch", fetch_reservations);
router.put("/update/:id", updateReservationStatus)
router.put("/arrival/:id", updateArrivalStatus);


export default router;