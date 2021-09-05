import { SELECT_SLOT, CONSUME_SLOTS, DESELECT_SLOT, CHANGE_BET_AMOUNT, CHANGE_DRAW_COUNTS } from '../constants/slots';


export const consumeSlots = () => ({
    type: CONSUME_SLOTS
});

export const selectSlot = ({ index }) => ({
    type: SELECT_SLOT,
    payload: { index }
});

export const deselectSlot = ({ number }) => ({
    type: DESELECT_SLOT,
    payload: { number }
});

export const changeBetAmount = ({ amount }) => ({
    type: CHANGE_BET_AMOUNT,
    payload: { amount }
});

export const changeDrawCounts = ({ counts }) => ({
    type: CHANGE_DRAW_COUNTS,
    payload: { counts }
});
