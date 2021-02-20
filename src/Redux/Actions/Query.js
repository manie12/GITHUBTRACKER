import { FETCH_API, POST_API } from '../Types';
import { FetchQuery } from '../../GraphQl';

export const getQuery = () => async (dispatch) => {
    try {
        const { data } = await FetchQuery();
        console.log(data.data)
        dispatch({ type: FETCH_API, payload: data })
    } catch (error) {

    }

}


export const setQuery = (searchIssue) => async (dispatch) => {

    try {
        const { data } = await FetchQuery(searchIssue);

        dispatch({ type: POST_API, payload: data })

    } catch (error) {

    }



}