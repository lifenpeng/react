import { combineReducers } from 'redux-immutable';
import { HeaderReducer } from '../common/header/store';
import { HomeReducer } from '../page/home/store';
import { DetailReducer } from '../page/detail/store';

const reducer =  combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailReducer
});

export default reducer;