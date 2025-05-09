import { Request, Response } from 'express';
import Flight from '../models/flightModel';

export const createFlight = async (req: Request, res: Response) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const getFlights = async (_: Request, res: Response) => {
  const flights = await Flight.find();
  res.json(flights);
};

export const getFlightById = async (req: Request, res: Response) => {
  const flight = await Flight.findById(req.params.flightId);
  if (!flight) return res.status(404).json({ message: 'Not found' });
  res.json(flight);
};

export const updateFlight = async (req: Request, res: Response) => {
  const updated = await Flight.findByIdAndUpdate(req.params.flightId, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteFlight = async (req: Request, res: Response) => {
  const deleted = await Flight.findByIdAndDelete(req.params.flightId);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted successfully' });
};
