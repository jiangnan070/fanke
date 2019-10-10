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

