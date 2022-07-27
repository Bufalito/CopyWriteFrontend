import axios from "axios";
import { GET_TEXTS } from "./Types.jsx"

export function getTexts() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001")
        return dispatch({
            type: GET_TEXTS,
            payload: json.data
        })
    }
}

export function getText(value) {
    return async function () {
        const response = await axios.get(`http://localhost:3001/iecho?text=${value}`)
        return response
    }
}