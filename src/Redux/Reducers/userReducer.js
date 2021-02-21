import { USER_AUTH } from '../Types';
const PostUserReducer = (state = { authdata: null }, action) => {
    switch (action.type) {
        case USER_AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));

            return { ...state, authdata: action?.payload };


        default:
            return state;
    }
}
export default PostUserReducer;