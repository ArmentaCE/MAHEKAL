import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTicket,
  deleteTicket,
  getTicket,
  getTickets,
  updateTicket,
  getTicketsUser
} from "../controllers/tickets.controller.js";

const router = Router();

// Show all tickets
router.get("/tickets", authRequired, getTickets);

// Show all tickets for a user
router.get("/ticketsUser", authRequired, getTicketsUser);

// Show a ticket by ID
router.get("/tickets/:id", authRequired, getTicket);

// Create a new ticket
router.post("/tickets", authRequired, createTicket);

// Update a ticket by ID
router.put("/tickets/:id", authRequired, updateTicket);

// Delete a ticket by ID
router.delete("/tickets/:id", authRequired, deleteTicket);

export default router;