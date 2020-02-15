import _ from 'lodash';
import {
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    CREATE_EVENT,
} from '../actions';

export default (events = {}, action) => {

    // こういった曖昧型は利用したくない。
    switch (action.type) {
        case READ_EVENTS:
            // console.log(action.response.data);
            return _.mapKeys(action.response.data, 'id');

        case DELETE_EVENT:
            delete events[action.id];
            return { ...events };

        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data;
            return { ...events, [data.id]: data };

        default:
            return events;
    }
};