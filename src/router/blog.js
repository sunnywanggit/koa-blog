const {getList,getDetail} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleBlogRouter = (req,res)=>{


    //获取博客列表
    if(req.method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author ||'';
        const keyword = req.query.keyword || '';
        const listData = getList(author,keyword);
        return new SuccessModel(listData)
    }


    //获取博客详情
    if(req.method === 'GET' && req.path === '/api/blog/detail'){
        const id = req.query.id
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }

    //新建博客
    if(req.method === 'POST' && req.path === '/api/blog/new'){
        return{
            msg:'你获新建了一篇博客'
        }
    }

    //更新博客
    if(req.method === 'POST' && req.path === '/api/blog/update'){
        return{
            msg:'你更新了一篇博客'
        }
    }

    //删除博客
    if(req.method === 'POST' && req.path === '/api/blog/del'){
        return{
            msg:'你删除了一篇博客'
        }
    }

}

module.exports = handleBlogRouter;  


















