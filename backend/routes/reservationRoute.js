import express from "express";
import send_reservation from "../controller/reservation.js";
import fetch_reservations from "../controller/fetchreservation.js";

const router = express.Router();

router.post("/send", send_reservation);

router.get("/fetch", fetch_reservations);


export default router;