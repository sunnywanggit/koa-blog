const getList = (author,keyword) => {
    //先返回假数据，但是假数据的格式是正确的
    return [
        {
            id:1,
            title:'title1',
            content:'content1',
            createTime:1591288960378,
            author:'wangergou'
        },
        {
            id:2,
            title:'title2',
            content:'content2',
            createTime:1591288960378,
            author:'wangergou'
        }
    ]
}

const getDetail = (id) => {
    //先返回假数据，但是假数据的格式是正确的
    return [
        {
            id:1,
            title:'title1',
            content:'content1',
            createTime:1591288960378,
            author:'wangergou'
        },
        {
            id:2,
            title:'title2',
            content:'content2',
            createTime:1591288960378,
            author:'wangergou'
        }
    ]
}
module.exports = {
    getList,
    getDetail
}