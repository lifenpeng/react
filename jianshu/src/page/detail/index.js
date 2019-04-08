import React,{ Component } from 'react';
import { DetailInfo, Header,Center,CenterPhoto,Auth,AuthName,ArticleTime,Nname,Flow,Article } from './style';

class Detail extends Component{
    render(){
        return (
            <DetailInfo>
                <Header>网恋小奶猫竟然变成小学男生？ 这年头没有比网恋奔现失败更可怕了</Header>
                <Center>
                    <CenterPhoto>
                        <img src='//upload.jianshu.io/users/upload_avatars/15206224/7b4a960c-8a30-4c91-9808-9b46a34714e5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
                    </CenterPhoto>
                    <Auth>
                        <AuthName>
                            <Nname>中二阿姨</Nname>
                            <Flow>关注</Flow>
                        </AuthName>
                        <ArticleTime>
                            2019.02.15 10:23* 字数 362 阅读 1730评论 11喜欢 24
                        </ArticleTime>
                    </Auth>
                </Center>
                <Article>
                        <p>1.好好上课，不然会挂科。挂科不是好事。说不挂科就不是大学的都是是唬你滴!</p>
                        <p>2.钱花得很快，需要的可以有一个记帐本或记账APP不至于乱花钱。</p>
                        <p>3. 看书，只有努力不会背叛  你，多看点好书总是没错的。注意各种收智商税的“成功学”。</p>
                        <p>4.社团，学生会什么的，若只是为了去装逼，那还是别参加了，浪费时间。（若参加 就尽量不要只干些打杂的活 参与策划些有意思的活动挺好的）</p>
                        <p>5.锻炼，操场 球场 健身房 游泳馆多去几下。好的身体可以让你跑得比别人更久，更远。</p>
                        <p>6.有空时候（尤其是大一）学点技能和爱好挺好的。玩手机（尤其是躺在宿舍）很容易一不小心就浪费几个小时。</p>
                        <p>7.最重要的自制力和意志力，还有眼界是很重要的。你会发现周边和你志趣相投的并不多（说句不好听的这和学校有关），有便要珍惜，没有是常态，不要认为自己一人很孤单，慢慢走，前面总会有人在等你。</p>
                    </Article>
            </DetailInfo>
        );
    }
}

export default Detail;