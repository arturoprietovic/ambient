import { Request, Response } from 'express';
import Flight from '../models/flightModel';

export const getPassengers = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        res.json(flight.passengers);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getPassenger = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        const passenger = flight.passengers.find(p => p.id === Number(req.params.passengerId));
        if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

        res.json(passenger);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const addPassenger = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        flight.passengers.push(req.body);
        await flight.save();

        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updatePassenger = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        const passenger = flight.passengers.find(p => p.id === Number(req.params.passengerId));
        if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

        Object.assign(passenger, req.body);
        await flight.save();

        res.json(passenger);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deletePassenger = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        flight.passengers = flight.passengers.filter(p => p.id !== Number(req.params.passengerId));
        await flight.save();

        res.json({ message: 'Passenger deleted' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
