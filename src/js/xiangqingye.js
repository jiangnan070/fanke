<<<<<<< HEAD
window.onload = function () {
    var boxwp = document.getElementsByClassName("boxwp")[0];
    var boxwp1 = document.getElementsByClassName("boxwp1")[0];
    var boxwp12 = document.getElementsByClassName("boxwp12")[0];
    var small = document.getElementsByClassName("small")[0];
    var big = document.getElementsByClassName("big")[0];
    var mask = document.getElementsByClassName("mask")[0];
    var bigImg = document.getElementsByClassName("bigImg")[0];
    //鼠标移入到small区域  操作mask和big的显示和隐藏
    small.onmouseenter = function () {
        mask.style.display = "block";
        big.style.display = "block";
    }
    small.onmouseleave = function () {
        mask.style.display = "none";
        big.style.display = "none";
    }
    //鼠标在小图区移动  操作mask的移动
    small.onmousemove = function (e) {
        var e = e || event;
        var pageX = e.clientX + scroll().left;
        var pageY = e.clientY + scroll().top;

        var x = pageX - boxwp.offsetLeft - boxwp1.offsetLeft - small.offsetLeft - boxwp12.offsetLeft - mask.offsetWidth / 2;
        var y = pageY - boxwp.offsetTop - boxwp1.offsetTop - small.offsetTop - boxwp12.offsetTop - mask.offsetHeight / 2;
        //获取mask的最大的left和top值
        var maxX = boxwp12.offsetWidth - mask.offsetWidth;
        var maxY = boxwp12.offsetHeight - mask.offsetHeight;
        //边界处理
        x = x < 0 ? 0 : (x > maxX ? maxX : x);
        y = y < 0 ? 0 : (y > maxY ? maxY : y);
        mask.style.left = x + "px";
        mask.style.top = y + "px";
        mask.style.backgroundPosition = -x + "px-" + y + "px";

        var bigImgLeft = x * bigImg.offsetWidth / small.offsetWidth;
        var bigImgTop = y * bigImg.offsetHeight / small.offsetHeight;
        bigImg.style.left = -bigImgLeft + "px";
        bigImg.style.top = -bigImgTop + "px";
    }


    var wpa = document.getElementsByClassName("wpa")[0];
    var wpb = document.getElementsByClassName("wpb")[0];
    var wpc = document.getElementsByClassName("wpc")[0];
    var wpd = document.getElementsByClassName("wpd")[0];
    var wpe = document.getElementsByClassName("wpe")[0];
    wpa.onmouseenter = function () {
        small.firstChild.src = wpa.firstChild.src;
        big.firstChild.src = wpa.firstChild.src;
    }
    wpb.onmouseenter = function () {
        small.firstChild.src = wpb.firstChild.src;
        big.firstChild.src = wpb.firstChild.src;
    }
    wpc.onmouseenter = function () {
        small.firstChild.src = wpc.firstChild.src;
        big.firstChild.src = wpc.firstChild.src;
    }
    wpd.onmouseenter = function () {
        small.firstChild.src = wpd.firstChild.src;
        big.firstChild.src = wpd.firstChild.src;
    }
    wpe.onmouseenter = function () {
        small.firstChild.src = wpe.firstChild.src;
        big.firstChild.src = wpe.firstChild.src;
    }

    var util = {
        //获取本地存储中的数据
        getStorage: function () {
            return JSON.parse(localStorage.getItem('list') || '[]')
        },
        //设置本地存储数据
        setStorage: function (productList) {
            localStorage.setItem('list', JSON.stringify(productList))
        },
        //点击添加按钮，货物商品信息
        
        addCartEvent: function () {
            // var that = this;  //在事件函数中this会改变指向，所以用that
            var addCartBtn = document.getElementsByClassName('bb2')[0];//加入购物车按钮
            
            addCartBtn.onclick = function () {     //给按钮添加点击事件
                var cm = document.getElementsByClassName('box5')[0];
                var tp = document.getElementsByClassName('wpa')[0];
                var jg = document.getElementsByClassName('boxwp131')[0];
                // var cm = document.getElementsByClassName('boxwp133')[0];            //待定
                var sl = document.getElementsByClassName('boxwp134')[0];
                var product = {
                    id:jg.children[1].attributes.type.value,
                    img: tp.children[0].src,
                    name: cm.innerHTML,
                    price: jg.children[1].innerHTML,
                    // size: cm.checked = true ? cm.innerHTML : null,
                    num: sl.children[1].children[0].innerHTML,
                }
                console.log(product)
                util.addProduct(product)   //把商品传入addProduct 函数中，进行商品列表更新
            }
        },
        //传入新的商品函数
        addProduct: function (product) {
            // var that = this;//在事件函数中this会改变指向，所以用that
            var productList = util.getStorage(); //获取本地存储内容
            for (var i = 0; i < productList.length; i++) {  //遍历productList
                if (productList[i].id == product.id) {   //判断如果productList 中有相同的id
                    productList[i].num = productList[i].num + 1;  //则num+1
                    util.setStorage(productList);   //更新本地存储
                    return;
                }
            }
            product.num = 1;  //如果商品列表中没有相同的id，num=1
            productList.push(product);   //把商品加入商品列表
            util.setStorage(productList);   //更新本地存储
        },
    }
    util.addCartEvent()

}

=======
window.onload=function(){
var ywhboxwp=document.getElementsByClassName("ywhboxwp")[0];
var ywhboxwp1=document.getElementsByClassName("ywhboxwp1")[0];
var ywhboxwp12=document.getElementsByClassName("ywhboxwp12")[0];
var small=document.getElementsByClassName("small")[0];
var big=document.getElementsByClassName("big")[0];
var mask=document.getElementsByClassName("mask")[0];
var bigImg=document.getElementsByClassName("bigImg")[0];
//鼠标移入到small区域  操作mask和big的显示和隐藏
small.onmouseenter=function(){
    mask.style.display="block";
    big.style.display="block";
}
small.onmouseleave=function(){
    mask.style.display = "none";
	big.style.display = "none";
}
//鼠标在小图区移动  操作mask的移动
small.onmousemove=function(e){
    var e=e||event;
    var pageX=e.clientX+scroll().left;
    var pageY=e.clientY+scroll().top;

    var x=pageX-ywhboxwp.offsetLeft-ywhboxwp1.offsetLeft-small.offsetLeft-ywhboxwp12.offsetLeft-mask.offsetWidth/2;
    var y=pageY-ywhboxwp.offsetTop-ywhboxwp1.offsetTop-small.offsetTop-ywhboxwp12.offsetTop-mask.offsetHeight/2;
    //获取mask的最大的left和top值
    var maxX = ywhboxwp12.offsetWidth - mask.offsetWidth;
    var maxY = ywhboxwp12.offsetHeight - mask.offsetHeight;
    //边界处理
    x=x<0?0:(x>maxX?maxX:x);
    y=y<0?0:(y>maxY?maxY:y);
    mask.style.left=x+"px";
    mask.style.top=y+"px";
    mask.style.backgroundPosition=-x+"px-"+y+"px";

    var bigImgLeft=x*bigImg.offsetWidth/small.offsetWidth;
    var bigImgTop=y*bigImg.offsetHeight/small.offsetHeight;
    bigImg.style.left=-bigImgLeft+"px";
    bigImg.style.top=-bigImgTop+"px";
}


var wpa=document.getElementsByClassName("wpa")[0];
var wpb=document.getElementsByClassName("wpb")[0];
var wpc=document.getElementsByClassName("wpc")[0];
var wpd=document.getElementsByClassName("wpd")[0];
var wpe=document.getElementsByClassName("wpe")[0];
wpa.onmouseenter=function(){
    small.firstChild.src=wpa.firstChild.src;
    big.firstChild.src=wpa.firstChild.src;
}
wpb.onmouseenter=function(){
    small.firstChild.src=wpb.firstChild.src;
    big.firstChild.src=wpb.firstChild.src;
}
wpc.onmouseenter=function(){
    small.firstChild.src=wpc.firstChild.src;
    big.firstChild.src=wpc.firstChild.src;
}
wpd.onmouseenter=function(){
    small.firstChild.src=wpd.firstChild.src;
    big.firstChild.src=wpd.firstChild.src;
}
wpe.onmouseenter=function(){
    small.firstChild.src=wpe.firstChild.src;
    big.firstChild.src=wpe.firstChild.src;}



// 评价
$(function () {
    //物品选购
    $('.ywhboxwpys1').click(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpxz1').html($(".ywhboxwpys1").html())
        // $(".ywhboxwpys1").css("background")
        // $(".ywhboxwpxz1").css("background","")
        $('.ywhboxwpys1').css("background","blue")
        $('.ywhboxwpys2').css("background","#ffffff")
        $('.ywhboxwpys3').css("background","#ffffff")
        $('.ywhboxwpys4').css("background","#ffffff")
    })
    $('.ywhboxwpys2').click(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpxz1').html($(".ywhboxwpys2").html())
        $('.ywhboxwpys2').css("background","pink")
        $('.ywhboxwpys1').css("background","#ffffff")
        $('.ywhboxwpys3').css("background","#ffffff")
        $('.ywhboxwpys4').css("background","#ffffff")
    })
    $('.ywhboxwpys3').click(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpxz1').html($(".ywhboxwpys3").html())
        $('.ywhboxwpys3').css("background","green")
        $('.ywhboxwpys2').css("background","#ffffff")
        $('.ywhboxwpys1').css("background","#ffffff")
        $('.ywhboxwpys4').css("background","#ffffff")
    })
    $('.ywhboxwpys4').click(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpxz1').html($(".ywhboxwpys4").html())
        $('.ywhboxwpys4').css("background","red")
        $('.ywhboxwpys2').css("background","#ffffff")
        $('.ywhboxwpys3').css("background","#ffffff")
        $('.ywhboxwpys1').css("background","#ffffff")
    })
    $('.ywhboxwpys1').dblclick(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpys1').css("background","#ffffff")
    })
    $('.ywhboxwpys2').dblclick(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpys2').css("background","#ffffff")
    })
    $('.ywhboxwpys3').dblclick(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpys3').css("background","#ffffff")
    })
    $('.ywhboxwpys4').dblclick(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $('.ywhboxwpys4').css("background","#ffffff")
    })

        $('.wpa1').click(function(){
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $('.wpa1').css("background","red")
            $(".wpa2").css("background","#ffffff")
            $(".wpa3").css("background","#ffffff")
            $(".wpa4").css("background","#ffffff")
            $(".wpa5").css("background","#ffffff")
        })
        $('.wpa2').click(function(){
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $('.wpa2').css("background","red")
            $(".wpa1").css("background","#ffffff")
            $(".wpa3").css("background","#ffffff")
            $(".wpa4").css("background","#ffffff")
            $(".wpa5").css("background","#ffffff")
        })
        $('.wpa3').click(function(){
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $('.wpa3').css("background","red")
            $(".wpa2").css("background","#ffffff")
            $(".wpa1").css("background","#ffffff")
            $(".wpa4").css("background","#ffffff")
            $(".wpa5").css("background","#ffffff")
        })
        $('.wpa4').click(function(){
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $('.wpa4').css("background","red")
            $(".wpa2").css("background","#ffffff")
            $(".wpa3").css("background","#ffffff")
            $(".wpa1").css("background","#ffffff")
            $(".wpa5").css("background","#ffffff")
        })
        $('.wpa5').click(function(){
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            $('.wpa5').css("background","red")
            $(".wpa2").css("background","#ffffff")
            $(".wpa3").css("background","#ffffff")
            $(".wpa4").css("background","#ffffff")
            $(".wpa1").css("background","#ffffff")
        })


        //选择数量
        $('.ywhboxwpsl1').click(function(){
            $('.ywhboxwpsl1>ul>li').css('display','block');
        })
        $('.ywhboxwpsl1>ul>li').click(function(){
            
            $('.span1').html($(this).html());
            $('.ywhboxwpsl1>ul>li').css('display','none');
            return false;
        })
        

    //点击出现提问框
    $('#quesBtn').click(function () {
        $('#Askquestion').css('display', 'block')
    })
    //输入框中的文字提交到页面
    $('#tiwenBtn').click(function () {
        var radio = document.getElementsByName('radio');
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                var a = $('#txtArae').val();
                var q = $(
                    "<div class='qeusL_con'><div class='qeusL_L'><div class='qeusL_M'><h4><span class='qeusH_Q'>Q</span><span>thir***：<span>" +
                    a +
                    "</span></span></h4><h5 style='font-size: 12px;'><span>" +
                    CurentTime() +
                    "</span><a href='#'>我要回复<span>(0)</span></a></h5></div></div> </div>"
                );
                var b = $("<div class='qeusLPage'><span>1</span></div>")
                if (a == "") {
                    alert("请填写内容");
                } else {
                    $('.quesList').append(q);
                    $('.quesList').append(b);
                    $('#qtype').css('display', 'none');

                }
                return;
            } else {
                $('#qtype').css('display', 'block');
            }
        }
    })
    
     //显示提问数量
     var qeusNum=$('.qeusL_con').length
     console.log(qeusNum)
       $('qeusNum').html("qeusNum");
    var myDate = new Date();
    myDate.getYear(); //获取当前年份(2位)
    myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    myDate.getMonth(); //获取当前月份(0-11,0代表1月)
    myDate.getDate(); //获取当前日(1-31)
    myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
    myDate.getHours(); //获取当前小时数(0-23)
    myDate.getMinutes(); //获取当前分钟数(0-59)
    myDate.getSeconds(); //获取当前秒数(0-59)
    myDate.getMilliseconds(); //获取当前毫秒数(0-999)
    myDate.toLocaleDateString(); //获取当前日期
    var mytime = myDate.toLocaleTimeString(); //获取当前时间
    myDate.toLocaleString(); //获取日期与时间
    function CurentTime() {
        var now = new Date();

        var year = now.getFullYear(); //年
        var month = now.getMonth() + 1; //月
        var day = now.getDate(); //日
        var clock = year + "-";
        if (month < 10)
            clock += "0";
        clock += month + "-";
        if (day < 10)
            clock += "0";
        clock += day + " ";
        return (clock);
    }
}) 

// container.onclick=function(e){
//     var e=e||event;
//     var target=e.target||e.srcElement;
//     if(target.tagName==""){
        
//     }
// }

// $('.quesBtn').click(function(){
//     document.documentElement.scrollTop=
// })


window.onscroll=function(){
    var sTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(sTop>200){
        document.getElementsByClassName('fanke-huadong')[0].style.display="block";
    }else{
        document.getElementsByClassName('fanke-huadong')[0].style.display="none";
    }
}


$(document).ready(function() {
 

    $(function(){
        $(".ywhbox31").mouseenter(function(){     
 
           $('.ywhbox31').css("color","red")
        }) 
        $(".ywhbox31").mouseleave(function(){
            $('.ywhbox31').css("color","#727171")
        }) 
     });

     $(function(){
        $(".ywhbox310").mouseenter(function(){     
 
           $('.ywhbox310').css("color","red")
        }) 
        $(".ywhbox310").mouseleave(function(){
            $('.ywhbox310').css("color","#727171")
        }) 
     });
   // 第一个  
 $(function(){
    $(".ywhbox32").mouseenter(function(){     
       $(".drop_down").stop(true,true).slideDown();
       $('.drop_down').css("border-top","5px solid orange");
    //    $('.ywhbox32').css("color","red")
    }) 
    $(".ywhbox32").mouseleave(function(){
       $(".drop_down").stop(true,true).slideUp();
    //    $('.ywhbox32').css("color","#727171")
    }) 
 });
   // 第二个
   $(function(){
    $(".ywhbox33").mouseenter(function(){     
       $(".drop_down1").stop(true,true).slideDown();
       $('.drop_down1').css("border-top","5px solid orange");
    //    $('.ywhbox33').css("color","red")
    }) 
    $(".ywhbox33").mouseleave(function(){
       $(".drop_down1").stop(true,true).slideUp();
    //    $('.ywhbox33').css("color","#727171")
    }) 
 });
    // 第三个
       $(function(){
    $(".ywhbox34").mouseenter(function(){     
       $(".drop_down2").stop(true,true).slideDown();
       $('.drop_down2').css("border-top","5px solid orange");
    //    $('.ywhbox34').css("color","red")
    }) 
    $(".ywhbox34").mouseleave(function(){
       $(".drop_down2").stop(true,true).slideUp();
    //    $('.ywhbox34').css("color","#727171")
    }) 
 });
    // 第四个
    $(function(){
    $(".ywhbox35").mouseenter(function(){     
       $(".drop_down3").stop(true,true).slideDown();
       $('.drop_down3').css("border-top","5px solid orange");
    //    $('.ywhbox35').css("color","red")
    }) 
    $(".ywhbox35").mouseleave(function(){
       $(".drop_down3").stop(true,true).slideUp();
    //    $('.ywhbox35').css("color","#727171")
    }) 
 });
        // 第五个  
     $(function(){
    $(".ywhbox36").mouseenter(function(){     
       $(".drop_down4").stop(true,true).slideDown();
       $('.drop_down4').css("border-top","5px solid orange");
    //    $('.ywhbox36').css("color","red")
    }) 
    $(".ywhbox36").mouseleave(function(){
       $(".drop_down4").stop(true,true).slideUp();
    //    $('.ywhbox36').css("color","#727171")
    }) 
 });
   // 第六个
   $(function(){
    $(".ywhbox37").mouseenter(function(){     
       $(".drop_down5").stop(true,true).slideDown();
       $('.drop_down5').css("border-top","5px solid orange");
    //    $('.ywhbox37').css("color","red")
    }) 
    $(".ywhbox37").mouseleave(function(){
       $(".drop_down5").stop(true,true).slideUp();
    //    $('.ywhbox37').css("color","#727171")
    }) 
 });
       // 第七个`
       $(function(){
    $(".ywhbox38").mouseenter(function(){     
       $(".drop_down6").stop(true,true).slideDown();
       $('.drop_down6').css("border-top","5px solid orange");
    //    $('.ywhbox38').css("color","red")
    }) 
    $(".ywhbox38").mouseleave(function(){
       $(".drop_down6").stop(true,true).slideUp();
    //    $('.ywhbox38').css("color","#727171")
    }) 
 });
    // 第八个
    $(function(){
    $(".ywhbox39").mouseenter(function(){     
       $(".drop_down7").stop(true,true).slideDown();
       $('.drop_down7').css("border-top","5px solid orange");
    //    $('.ywhbox39').css("color","red")
    }) 
    $(".ywhbox39").mouseleave(function(){
       $(".drop_down7").stop(true,true).slideUp();
    //    $('.ywhbox39').css("color","#727171")
    }) 
 });
});








var util = {
    //获取本地存储中的数据
    getStorage: function () {
        return JSON.parse(localStorage.getItem('list') || '[]')
    },
    //设置本地存储数据
    setStorage: function (productList) {
        localStorage.setItem('list', JSON.stringify(productList))
    },
    //点击添加按钮，货物商品信息
    
    addCartEvent: function () {
        // var that = this;  //在事件函数中this会改变指向，所以用that
        var addCartBtn = document.getElementsByClassName('b2')[0];//加入购物车按钮
        
        addCartBtn.onclick = function () {     //给按钮添加点击事件
            var cargoName = document.getElementsByClassName('ywhbox5')[0];
            var cargoImg = document.getElementsByClassName('wpa')[0];
            var price = document.getElementsByClassName('ywhboxwp131')[0];
            var size = document.getElementsByClassName('wpa1')[0];            //待定
            var num = document.getElementsByClassName('ywhboxwpsl1')[0];
            var product = {
                id:price.children[1].attributes.type.value,
                img: cargoImg.children[0].src,
                name: cargoName.innerHTML,
                price: price.children[1].innerHTML,
                size: size.innerHTML,
                num: num.children[0].innerHTML,
            }
            console.log(product)
            util.addProduct(product)   //把商品传入addProduct 函数中，进行商品列表更新
        }
    },
    //传入新的商品函数
    addProduct: function (product) {
        // var that = this;//在事件函数中this会改变指向，所以用that
        var productList = util.getStorage(); //获取本地存储内容
        for (var i = 0; i < productList.length; i++) {  //遍历productList
            if (productList[i].id == product.id) {   //判断如果productList 中有相同的id
                productList[i].num = productList[i].num + 1;  //则num+1
                util.setStorage(productList);   //更新本地存储
                return;
            }
        }
        product.num = 1;  //如果商品列表中没有相同的id，num=1
        productList.push(product);   //把商品加入商品列表
        util.setStorage(productList);   //更新本地存储
    },
}
util.addCartEvent()

}

   





>>>>>>> yangwenhua
