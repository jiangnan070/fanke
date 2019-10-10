$(function () {

    var util = {
        //获取本地存储中的数据
        getStorage: function () {
            return JSON.parse(localStorage.getItem('list') || '[]')
        },
        //设置本地存储数据
        setStorage: function (productList) {
            localStorage.setItem('list', JSON.stringify(productList))
        },
        //初始化渲染购物车
        init: function () {
            // var that = this;  //在事件函数中this会改变指向，所以用that
            var productList = this.getStorage();   //获取本地存储商品
            this.addDeleteEvent()
            this.render(productList, 'cartMainBox', function () {   //调用render 函数渲染购物车
                util.addDeleteEvent();   // 调用 
                util.addNumChangeEvent();
                util.yinCan();
                util.shul();
                util.zonj();
                util.qx();
            })
        },
        //根据指定商品列表渲染指定容器页面
        render: function (productList, container, fn) {
            var container = document.getElementsByClassName('container')[0];//获取要渲染的容器DOM
            if (productList.length < 0) {
                container.innerHTML = ''; //如果本地中没有数据，把容器内容滞空
                return;
            }
            //有数据的情况
            var str = `<table class="table table1">
                        <thead>
                            <tr class="cartTr">
                            <th><input type="checkbox" class="qx">&nbsp 全选</th>
                            <th>编号</th>
                            <th>图片</th>
                            <th>商品名称</th>
                            <th>尺寸</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                        <tr class="tr0">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>`;
            // 设置数据拼接
            for (var i = 0; i < productList.length; i++) {
                str += `<tr class="trMain">
                            <td>
                                <input type="checkbox" class='xz'>
                            </td>
                            <td class='cargoId'>
                                ${productList[i].id}
                            </td>
                            <td>
                                <img class="cart99" src="${productList[i].img}" />
                            </td>
                            <td>
                                ${productList[i].name}
                            </td>
                            <td>
                                s
                            </td>
                            <td>
                                ￥<em type="01">${productList[i].price}</em>
                            </td>
                            <td>
                                <a href="#" class="iconfont icon-jianhaoshouqi jian a-a cut"></a>
                                <input type="text" name="" class="inp1" value="${productList[i].num}">
                                <a href="#" class="iconfont icon-jiahaozhankai jia a-a add"></a>
                            </td>
                            <td>
                                    ￥<em class="zj">${productList[i].price * productList[i].num}</em>
                            </td>
                            <td>
                                <a href="#" class='delete'>删除</a>
                            </td>
                        </tr>`
            }
            str += `<tr class="tr0">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>`;
            var cartMainBox = document.getElementsByClassName('cartMainBox')[0];
            cartMainBox.innerHTML = str;//把商品列表的数据赋给需要渲染的容器
            if (fn) { //如果有回调函数时，调用函数
                fn()
            }
        },
        // 删除按钮移除商品事件函数
        addDeleteEvent: function () {
            var that = this; //在事件函数中this会改变指向，所以用that
            var deleteBtn = document.getElementsByClassName('delete');  //获取删除按钮
            for (var i = 0; i < deleteBtn.length; i++) {   //遍历                            
                deleteBtn[i].onclick = function () {    //绑定点击事件             
                    var id = this.parentNode.parentNode.children[1].innerHTML.trim();   //获取到当前点击的商品的id内容
                    that.deleteProduct(id)   //调用deleteProduct函数,删除指定商品
                    that.addNumChangeEvent();

                }
            }



        },
        //删除商品封装函数
        deleteProduct: function (id) {
            var that = this;   //在事件函数中this会改变指向，所以用that
            var productList = this.getStorage(); //获取本地存储
            for (var i = 0; i < productList.length; i++) {   //遍历
                if (productList[i].id == id) {     //判断name 相同时
                    productList.splice(i, 1);      //截取字符串，删除第一个商品
                    this.setStorage(productList);   //更新本地存储
                    this.render(productList, 'cartMainBox', function () {   //更新渲染的购物车页面
                        that.addDeleteEvent();   //给购物车添加点击删除按钮移除商品事件函数调用
                        that.addNumChangeEvent();  //给购物车添加点击-,+按钮改变商品数量事件调用
                        util.yinCan();
                        util.shul();
                        util.zonj();
                        util.qx();
                    })
                    return;
                }
            }
        },

        //商品数量加减点击事件函数
        addNumChangeEvent: function () {
            var that = this;  //在事件函数中this会改变指向，所以用that
            var cutBtns = document.querySelectorAll('.cut');
            var addBtns = document.querySelectorAll('.add');
            for (var i = 0; i < addBtns.length; i++) {
                addBtns[i].onclick = function () {
                    var id = this.parentNode.parentNode.children[1].innerHTML.trim();
                    that.addNum(id);
                }
                cutBtns[i].onclick = function () {
                    var id = this.parentNode.parentNode.children[1].innerHTML.trim();
                    that.cutNum(id);
                }
            }
        },
        //num add 
        addNum: function (id) {
            var that = this;  //在事件函数中this会改变指向，所以用that
            var productList = this.getStorage();  //获取本地存储
            for (var i = 0; i <= productList.length; i++) {  //遍历
                if (productList[i].id == id) {        //判断id 相同时
                    productList[i].num = productList[i].num + 1;   //num 数量加1
                    this.setStorage(productList);   //更新本地存储，更新购物车
                    this.render(productList, 'cartMainBox', function () {   //更新渲染的购物车页面
                        that.addDeleteEvent();   //给购物车添加点击删除按钮移除商品事件函数调用
                        that.addNumChangeEvent();  //给购物车添加点击-,+按钮改变商品数量事件调用
                        util.yinCan();
                        util.shul();
                        util.zonj();
                        util.qx();
                    })
                    return;
                }
            }
        },
        //num cut
        cutNum: function (id) {
            var that = this;  //在事件函数中this会改变指向，所以用that
            var productList = this.getStorage();  //获取本地存储
            for (var i = 0; i <= productList.length; i++) {  //遍历
                if (productList[i].id == id) {        //判断id 相同时
                    productList[i].num = productList[i].num - 1;   //num 数量减1
                    if (productList[i].num <= 0) {  //判断如果num <= 0 时
                        that.deleteProduct(id);   //调用删除函数，删除这个商品
                        return;
                    } else {
                        this.setStorage(productList);   //更新本地存储，更新购物车
                        this.render(productList, 'cartMainBox', function () {   //更新渲染的购物车页面
                            that.addDeleteEvent();   //给购物车添加点击删除按钮移除商品事件函数调用
                            that.addNumChangeEvent();  //给购物车添加点击-,+按钮改变商品数量事件调用
                            util.yinCan();
                            util.shul();
                            util.zonj();
                            util.qx();
                        })
                        return;
                    }

                }
            }
        },
        // 隐藏trMain
        yinCan: function () {
            if ($('.trMain').size() <= 0) {
                $('.cart').css('display', 'none')
            }
            if ($('.trMain').size() > 0) {
                $('.cartBox5').css('display', 'none')
            }
        },
        // num总数
        shul: function () {
            var inp1 = $('.inp1').get();
            var num = '';
            for (var i = 0; i < inp1.length; i++) {
                num += inp1[0].value
            }
            $('.cargoNum').text(num);
        },
        //总价
        zonj: function () {
            var zongJia = $('.zj').get();
            var zon = '';
            for (var i = 0; i < zongJia.length; i++) {
                zon += zongJia[0].innerHTML
            }
            $('.em2').text(zon);
        },
        qx:function(){
            $('.qx').on('click', function () {
                if ($('.qx').prop('checked') == true) {
                    $('input').prop('checked', true)
                } else {
                    $('input').prop('checked', false)
                }
            })
            $('.qx1').on('click', function () {
                if ($('.qx1').prop('checked') == true) {
                    $('input').prop('checked', true)
                } else {
                    $('input').prop('checked', false)
                }
            })
            $('.xz').on('click',function(){
                if($('.xz').prop('checked')==true&&$('.xz').prop('checked')!==false){
                    $('.qx').prop('checked', true);
                    $('.qx1').prop('checked', true);
                }else{
                    $('.qx').prop('checked', false);
                    $('.qx1').prop('checked', false);
                }
            })

        },

    };
    util.init();
    util.addDeleteEvent();
    util.deleteProduct();
    util.addNumChangeEvent();

    var productList = util.getStorage(); //获取本地存储
    for (var i = 0; i < productList.length; i++) {
         console.log(productList[i])
         var cargo01=productList[i];
          $('.a-1').on('click', function () {
         if($('.xz').prop('checked')==true){
            if($('.cargoId').text().trim()==cargo01.id){
                productList.splice(cargo01, 1);  //删除本地存储数据
                util.setStorage(productList);  //更新本地存储
                util.render(productList, 'cartMainBox', function () {   //更新渲染的购物车页面
                    util.addDeleteEvent();   //给购物车添加点击删除按钮移除商品事件函数调用
                    util.addNumChangeEvent();  //给购物车添加点击-,+按钮改变商品数量事件调用
                    util.yinCan();
                    util.shul();
                    util.zonj();
                    util.qx();
                })
            }
         }
     })
        
     }
    

})
