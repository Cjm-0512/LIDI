//获取页面中的元素
//获取下拉按钮
const down = $(".down");
//获取最外面遮罩层
const mark = $(".mark");
//获取下拉显示框
const upBox = $(".popUpBox");
//获取所有的li
const navLi = $(".nav li");
// 获取退出登录按钮
const out = $(".out");



//控制显示及隐藏
down.on("click",() => {
    upBox.show();
    mark.show()
});
mark.on("click",() => {
    upBox.hide();
    mark.hide()
});

//nav的切换
navLi.click(function () {
    $(this).addClass("public").siblings().removeClass();
});

//退出登录
out.on('click',function(){
    $(location).attr('href', './login.html');
});