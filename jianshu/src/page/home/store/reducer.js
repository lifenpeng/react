import { fromJS } from 'immutable';

const defaultState = fromJS({
    toPicList : [{
        id:1,
        title:'社会热点',
        url:"//upload-images.jianshu.io/upload_images/4458735-ef5fb694d8f2ecde.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },{
        id:2,
        title:'人生百态',
        url:"//upload-images.jianshu.io/upload_images/15631385-ad652855be50770e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }],
    articleList:[
        {
            id:1,
            title:'要努力成为一个才貌双全的女孩呀',
            desc:'学习社交和打扮，在未来发挥的作用，不比你的优秀少。”还记得在一起的时候，他对我说过这句话。 对呀，一个漂亮的女孩子，绝对不仅仅是上天眷顾她，更...',
            url:'//upload-images.jianshu.io/upload_images/11138281-6143b160b4f668e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'爱到伤痕累累都不知道爱错人的6大星座',
            desc:'有一句话说失败乃成功之母，是希望人在面对失败挫折的时候，要吸取教训总结经验，防止同样测错误再次出现。然而在十二星座里面却有一些容易爱错人的宝宝们...',
            url:'//upload-images.jianshu.io/upload_images/14547864-230fbde181eee397.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'微信上，时不时发这“4个字”的男人，其实就是喜欢上你了',
            desc:'喜欢是一种情不自禁，无法抑制的感情，当喜欢上一个人的时候，心里总会想着她，脑海里总会有她的样子，总想和她有交集，总期待着和她见面。 无论是喜欢上...',
            url:'//upload-images.jianshu.io/upload_images/16050459-7a5a23d974ca9518.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
    ],
    recommendList:[
        {
            id:1,
            url:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            url:'//cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png'
        },
        {
            id:3,
            url:'//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
        },
        {
            id:4,
            url:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id:5,
            url:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id:6,
            url:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ],
    WriterList:[
        {
            id:1,
            auth:'梅拾樱',
            desc:'写了274.1k字 · 1.3k喜欢',
            url:'//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:2,
            auth:'无限猴子',
            desc:'写了276.5k字 · 23.7k喜欢',
            url:'//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:3,
            auth:'骠姚校尉',
            desc:'写了228.6k字 · 1k喜欢',
            url:'//upload.jianshu.io/users/upload_avatars/5328453/0005e217-848f-4e50-b39b-6964a5138ef7?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:4,
            auth:'北美之北',
            desc:'写了430.5k字 · 28.6k喜欢',
            url:'//upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id:5,
            auth:'只有一半影子的人',
            desc:'写了263.8k字 · 1.1k喜欢',
            url:'//upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}