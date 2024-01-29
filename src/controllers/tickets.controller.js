import Ticket from "../models/tickets.model.js";

// Show all tickets
export const getTickets = async (req, res) => {
  const tickets = await Ticket.find().populate('user');
  res.json(tickets);
};

// Show all tickets for a user
export const getTicketsUser = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user.id }).populate('user');
  res.json(tickets);
};

// Create a new ticket
export const createTicket = async (req, res) => {
  const { name } = req.body;
  const newTicket = new Ticket({
    name,
    user: req.user.id
  });
  const ticketSaved = await newTicket.save();
  res.json(ticketSaved);
};

// Show a ticket by ID
export const getTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate('user');
  if (!ticket) return res.status(404).json({ message: "Ticket Not Found" });
  res.json(ticket);
};

// Delete a ticket by ID
export const deleteTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  if (!ticket) return res.status(404).json({ message: "Ticket Not Found" });
  return res.sendStatus(204);
};

// Update a ticket by ID
export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body,{
    new: true
  });
  if (!ticket) return res.status(404).json({ message: "Ticket Not Found" });
  res.json(ticket);
};
