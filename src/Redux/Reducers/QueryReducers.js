import { FETCH_API, POST_API } from '../Types';
const FetchApi = (state = [], action) => {
    switch (action.type) {
        case FETCH_API:

            return action.payload;
        case POST_API:
            return [...state, action.payload];

        default:
            return state;
    }
}
export default FetchApi;