//获取页面中的元素

//获取页面中需要校验的input
const targetIpValue = $("#targetIp");
const subnetMask = $("#subnetMask");
//获取校验结果的标签
const checkIcon = $(".checkIcon");
const loserIcon = $(".loserIcon");
const checkIcon2 = $(".checkIcon2");
const loserIcon2 = $(".loserIcon2");


//获取input的锁
const lock = $(".lock");

//获取路径
const open = "../images/lock1.png";
const shut = "../images/lock.png";
var Switch = 2 ;


// 获取btn
const btn = $(".save");
// 获取取消按钮
const don = $(".donT");

//获取所有的input
const inputs = $("input");
//全局校验开关
var state = 0;




//校验Ip
targetIpValue.blur(()=>{
   const IpVal = targetIpValue.val();
   const re = new RegExp(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/);
   if(re.test(IpVal)){
       checkIcon.show();
       loserIcon.hide();
       state += 1;
   }else {

       checkIcon.hide();
       loserIcon.show()
   }
});
//校验子网掩码
subnetMask.blur(()=>{
    const Val = targetIpValue.val();
    const exp = new RegExp( /[0-9].[0-9].[0-9].[0-9]/);
    if(exp.test(Val)){
        checkIcon2.show();
        loserIcon2.hide();
        state += 1;
    }else {

        checkIcon2.hide();
        loserIcon2.show();
    }
});


//点击锁，切换图片
$(".lock1").on("click",() => {
    console.log(Switch);
    if(Switch === 1){
        $(".lock1").attr("src",shut);
        Switch = 2;
    }else if(Switch === 2){
        $(".lock1").attr("src",open);
        Switch = 1
    }

});
$(".lock2").on("click",() => {
    console.log(Switch);
    if(Switch === 1){
        $(".lock2").attr("src",shut);
        Switch = 2;
    }else if(Switch === 2){
        $(".lock2").attr("src",open);
        Switch = 1
    }
});

//点击提交
btn.on("click",() => {
    if(state === 2){
        const inputValues = [];
        inputs.each(function(){
            inputValues.push($(this).val());
        });
        console.log(inputValues)
    }else{
        $(".SetupFailed").show(1000,()=>{
            $(".SetupFailed").hide(1000)
        })
    }

});
//点击取消
don.on("click",()=>{
    inputs.val("")
});









