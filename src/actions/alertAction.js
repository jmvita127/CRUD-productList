import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// muestra una alerta
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlert(alert))
    }
}
const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

// oculta alerta
export function hideAlertAction() {
    return (dispatch) => {
        dispatch(hideAlert());
    }
}

const hideAlert = () => ({
    type: HIDE_ALERT,
    payload: null
})