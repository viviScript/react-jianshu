import Mock from 'mockjs';
const random = Mock.Random;

Mock.mock('/api/headerList', {
    'list': [
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
        random.cname(),
    ]
})