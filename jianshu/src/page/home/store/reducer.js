import { fromJS } from 'immutable';

const defaultState = fromJS({
    toPicList : [{
        id:1,
        title:'社会热点',
        url:"//upload-images.jianshu.io/upload_images/4458735-ef5fb694d8f2ecde.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },{
        id:2,
        title:'人生百态',
        url:"//upload-images.jianshu.io/upload_images/4458735-ef5fb694d8f2ecde.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }],
    articleList:[
        {
            id:1,
            title:'要努力成为一个才貌双全的女孩呀',
            desc:'“学习社交和打扮，在未来发挥的作用，不比你的优秀少。”还记得在一起的时候，他对我说过这句话。 对呀，一个漂亮的女孩子，绝对不仅仅是上天眷顾她，更...',
            url:'//upload-images.jianshu.io/upload_images/11138281-6143b160b4f668e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'要努力成为一个才貌双全的女孩呀',
            desc:'“学习社交和打扮，在未来发挥的作用，不比你的优秀少。”还记得在一起的时候，他对我说过这句话。 对呀，一个漂亮的女孩子，绝对不仅仅是上天眷顾她，更...',
            url:'//upload-images.jianshu.io/upload_images/11138281-6143b160b4f668e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'要努力成为一个才貌双全的女孩呀',
            desc:'“学习社交和打扮，在未来发挥的作用，不比你的优秀少。”还记得在一起的时候，他对我说过这句话。 对呀，一个漂亮的女孩子，绝对不仅仅是上天眷顾她，更...',
            url:'//upload-images.jianshu.io/upload_images/11138281-6143b160b4f668e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}