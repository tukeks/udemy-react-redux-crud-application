import _ from 'lodash';
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {

    // こういった曖昧型は利用したくない。
    switch(action.type) {
        case READ_EVENTS:
            // console.log(action.response.data);
            return _.mapKeys(action.response.data, 'id');

        default:
            return state;
    }
}