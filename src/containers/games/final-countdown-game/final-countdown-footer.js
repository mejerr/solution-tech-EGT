import { connect } from 'react-redux';
import {
    changeBetAmount,
    changeDrawCounts,
    removeDrawCount,
    addDrawCount,
    addBetAmount,
    removeBetAmount
} from '../../../actions/final-countdown-game';
import FinalCountdownFooter from '../../../components/games/final-countdown-game/final-countdown-footer';

export default connect((state) => ({
    totalSum: state.finalCountdown.totalSum,
    betAmount: state.finalCountdown.betAmount,
    drawCounts: state.finalCountdown.drawCounts
}), {
    changeBetAmount,
    changeDrawCounts,
    removeDrawCount,
    addDrawCount,
    addBetAmount,
    removeBetAmount
})(FinalCountdownFooter);
