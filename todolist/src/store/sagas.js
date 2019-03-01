import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

//generator 函数
function* getInitList(){
    try{
        const res = yield axios.get('http://127.0.0.1/article');
        const data = res.data;
        const action = initListAction(data);
        yield put(action);
    }catch(e){
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;