export const CLICKED_SQUARE = 'CLICKED_SQUARE'

export const clickSquare = (square) => {
    return {
        type: CLICKED_SQUARE,
        square
    };
}


export const VIEW_HISTORIC_STEP = 'VIEW_HISTORIC_STEP'

export const viewHistoricStep = (stepId) => {
    return {
        type: VIEW_HISTORIC_STEP,
        stepId
    }
}
