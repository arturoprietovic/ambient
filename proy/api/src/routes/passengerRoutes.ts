import { Router } from 'express';
import { getPassengers, getPassenger, addPassenger, updatePassenger, deletePassenger } from '../controllers/passengerController';

const router = Router({ mergeParams: true });

router.get('/', getPassengers);
router.get('/:passengerId', getPassenger);
router.post('/', addPassenger);
router.put('/:passengerId', updatePassenger);
router.delete('/:passengerId', deletePassenger);

export default router;
