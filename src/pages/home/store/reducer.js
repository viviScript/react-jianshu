import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList: [
        {
            id: '1',
            title: '社会热点',
            imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: '2',
            title: '手绘',
            imgUrl: 'https://upload.jianshu.io/collections/images/283250/漫画专题.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2,
            imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4564/563e90e1ea09698e8a9ad1a9c4fb36bcea2655be.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
    ]
})

export default (state = defaultState, action) => {
    return state;
}

