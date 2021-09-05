import produce from "immer"
import {
    SELECT_SLOT,
    CONSUME_SLOTS,
    DESELECT_SLOT,
    CHANGE_BET_AMOUNT,
    CHANGE_DRAW_COUNTS
} from '../constants/slots';

const INITIAL_STATE = {
    ids: [],
    selectedIds: [],
    areDisabled: false,
    totalSum: 0,
    drawCounts: 1,
    betAmount: 1,
};

const reducer = produce((draftState = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CONSUME_SLOTS:
            if (!draftState.ids?.length) {
                const slots = [];
                for(let i = 1; i <= 80; i++) {
                    slots.push({ index: i, isSelected: false });
                }

                draftState.ids = slots;
            }

            return draftState;
        case SELECT_SLOT:
            const { index } = payload;

            draftState.ids[index - 1] = {
                ...draftState.ids[index - 1],
                isSelected: true
            }

            draftState.selectedIds = [
                ...draftState.selectedIds,
                index
            ]

            draftState.totalSum = draftState.betAmount * draftState.drawCounts * (0.2 * draftState.selectedIds.length);


            return draftState;
        case DESELECT_SLOT:
            const { number } = payload;

            draftState.ids[number - 1] = {
                ...draftState.ids[number - 1],
                isSelected: false
            };

            draftState.selectedIds =
                draftState.selectedIds.filter(selectedIndex => selectedIndex !== number);

            return draftState;
        case CHANGE_BET_AMOUNT:
            const { amount } = payload;

            draftState.betAmount = Number(amount);
            draftState.totalSum = draftState.betAmount * draftState.drawCounts * (0.2 * draftState.selectedIds.length);

            return draftState;
        case CHANGE_DRAW_COUNTS:
            const { counts } = payload;

            draftState.drawCounts = Number(counts);
            draftState.totalSum = draftState.drawCounts * draftState.betAmount * (0.2 * draftState.selectedIds.length);

            return draftState;
        default:
            return draftState;
    }
});

export default reducer;