document.writeln("<ul class=\"nav1\" id=\"navi\">");
document.writeln("    <li><a href=\"/index.html\">首页</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col21/index.html\">市政府</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col23/index.html\">新闻</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col24/index.html\">公开</a></li><span readexclude></span>");
//document.writeln("    <li><a href=\"/col/col25/index.html\">服务</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col57769/index.html\">服务</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col26/index.html\">互动</a></li><span readexclude></span>");
document.writeln("    <li><a href=\"/col/col27/index.html\">数据</a></li><span readexclude></span>");
document.writeln("    <li class=\"sq\"><a href=\"/col/col28/index.html\">市情</a></li>");
document.writeln("</ul>");
document.writeln("<style>");
document.writeln(".nav ul li .current{border-bottom: 5px solid #c05d6d; color: #c05d6d;}");
document.writeln("</style>");

//获取div下面所有的a标签（返回节点对象）
   var myNav = document.getElementById("navi").getElementsByTagName("a");

   //获取当前窗口的url
   var myURL = document.location.href;

   //循环div下面所有的链接，
   for(var i=1;i<myNav.length;i++){
   //获取每一个a标签的herf属性
  var links = myNav[i].getAttribute("href");
  var myURL = document.location.href;

  //查看div下的链接是否包含当前窗口，如果存在，则给其添加样式
  if(myURL.indexOf(links) != -1){
    myNav[i].className="current";
    myNav[0].className="";
   }
 }

 

document.writeln("<script src=\'//rz.shandong.gov.cn/js-sdk/wonders.log.min.js\'></script>");
document.write("<script>");
document.writeln("if (typeof wondersLog != \'undefined\') {       ");
document.writeln(" var token = \'sdywtb\';       ");
document.writeln(" wondersLog.init(token);");
document.writeln("}");
document.write("</script>");