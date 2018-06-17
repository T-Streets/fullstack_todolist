import { FETCH_USER } from '../Actions/types';

export default function(state = {}, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_USER:
        
        default:
        return state;
    }
}