const CLICKED_SQUARE = 'CLICKED_SQUARE';
const VIEW_HISTORIC_STEP = 'VIEW_HISTORIC_STEP'




const clickSquare = (square) => {
    return {
        type: CLICKED_SQUARE,
        square
    };
}

const viewHistoricStep = (stepId) => {
    return {
        type: VIEW_HISTORIC_STEP,
        stepId
    }
}



export {
    CLICKED_SQUARE,
    clickSquare,
    VIEW_HISTORIC_STEP,
    viewHistoricStep
};
