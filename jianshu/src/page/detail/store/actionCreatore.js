import axios from 'axios';
import { CHANGE_DETAIL } from './actionTypes'; 

const changeDetail = (title,content)=>({
    type:CHANGE_DETAIL,
    data:{title,content}
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            if(res.status===200){
                const resault = res.data.data;
                dispatch(changeDetail(resault.title,resault.content));
            }
        })
    }
}