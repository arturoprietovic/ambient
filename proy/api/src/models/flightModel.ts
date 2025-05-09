import mongoose, { Schema, Document } from 'mongoose';

type FlightCategory = 'Black' | 'Platinum' | 'Gold' | 'Normal';

interface Passenger {
  id: number;
  name: string;
  hasConnections: boolean;
  age: number;
  flightCategory: FlightCategory;
  reservationId: string;
  hasCheckedBaggage: boolean;
}

export interface IFlight extends Document {
  flightCode: string;
  passengers: Passenger[];
}

const PassengerSchema: Schema = new Schema({
  id: Number,
  name: String,
  hasConnections: Boolean,
  age: Number,
  flightCategory: {
    type: String,
    enum: ['Black', 'Platinum', 'Gold', 'Normal'],
  },
  reservationId: String,
  hasCheckedBaggage: Boolean,
});

const FlightSchema: Schema = new Schema({
  flightCode: { type: String, required: true, unique: true },
  passengers: [PassengerSchema],
});

export default mongoose.model<IFlight>('Flight', FlightSchema);
