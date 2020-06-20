
const handleUserRouter = (req,res)=>{

    //登录博客
    if(req.method === 'POST' && req.path === '/api/user/login'){
        return{
            msg:'登录'
        }
    }


}

module.exports = handleUserRouter;  