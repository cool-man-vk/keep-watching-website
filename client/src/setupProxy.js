const proxy=require("http-proxy-middleware")
module.exports=function(app){
    app.use(proxy(['/api'],{target:"https://moviedatabase-1bhw.onrender.com/"}))
    app.use(proxy(["/recommendations"], {target:"https://keep-watching.onrender.com/"}))
}