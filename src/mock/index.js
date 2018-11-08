import Mock from 'mockjs';
const random = Mock.Random;

Mock.mock('/api/headerList', {
    'list': [
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
        random.first(),
    ]
})