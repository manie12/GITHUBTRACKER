import { USER_AUTH } from '../Types';
import * as api from '../../RestApi';

export const getUser = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.getUserApi(userData);

        dispatch({ type: USER_AUTH, payload: data });
        history.push('/')

    } catch (error) {
        console.log(error);
    }

}


export const setUser = (userData, history) => async (dispatch) => {

    try {
        const { data } = await api.postUserApi(userData)
        console.log(data)

        dispatch({ type: USER_AUTH, payload: data })
        history.push('/')


    } catch (error) {
        console.log(error);
    }



}