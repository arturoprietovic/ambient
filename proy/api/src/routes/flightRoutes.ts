import { Router } from 'express';
import {
  createFlight,
  getFlights,
  getFlightById,
  updateFlight,
  deleteFlight
} from '../controllers/flightController';

const router = Router();

router.post('/', createFlight);
router.get('/', getFlights);
router.get('/:flightId', getFlightById);
router.put('/:flightId', updateFlight);
router.delete('/:flightId', deleteFlight);

export default router;
