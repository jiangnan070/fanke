window.onload = function () {
    (function () {
        // 登录界面js
        //判断用户名和密码是否正确
        //  vanclUserName账号框
        var vanclUserName = document.getElementById("vanclUserName")
        //  vanclPassword密码框
        var vanclPassword = document.getElementById("vanclPassword")
        //  vanclLoginError用户名或者密码错误提示框
        var vanclLoginError = document.getElementById("vanclLoginError")
        //  vanclUserNameError 账号格式错误提示框
        var vanclUserNameError = document.getElementById("vanclUserNameError")
        // vanclPasswordError  密码格式错误提示框
        var vanclPasswordError = document.getElementById("vanclPasswordError")
        //  普通登录按钮
        var vanclLogin = document.getElementById("vanclLogin")


        var usernameFlag = false;
        var passwordFlag = false;
        // 判断用户名
        //绑定事件(失去焦点事件:onblur)
        vanclUserName.onblur = function () {
            //把原来的提示清空
            // vanclUserNameError.innerHTML="";
            //书写验证用户名的正则
            var reg = /^[\w]\w{5,11}$/;
            //验证用户名是否合法
            if (!reg.test(vanclUserName.value)) {
                vanclUserNameError.style = "visibility: visible;";
                vanclUserNameError.innerHTML = "请输入正确的用户名"
                return false;
            }
            else if (reg.test(vanclUserName.value)) {
                usernameFlag = true;
                vanclUserNameError.style = " visibility: hidden;";
            }
        }
        // 判断密码
        // 判断用户名
        //绑定事件(失去焦点事件:onblur)
        vanclPassword.onblur = function () {
            //把原来的提示清空
            // vanclUserNameError.innerHTML="";
            //书写验证密码的正则
            var reg = /^([0-9a-zA-Z]|(_|\W)){6,16}$/;
            //验证用密码是否合法
            if (!reg.test(vanclPassword.value)) {
                vanclPasswordError.style = "visibility: visible;";
                vanclPasswordError.innerHTML = "请输入正确的密码"
                return false;
            }
            else if (reg.test(vanclPassword.value)) {
                passwordFlag = true;
                vanclPasswordError.style = " visibility: hidden;";
            }
        }


        // 点击普通登录按钮
        function getCookie(key) {
            var cookiestr = document.cookie;
            var list = cookiestr.split(";");
            for (var i in list) {
                var arr = list[i].split("=");
                if (trim(arr[0]) == key) {
                    return arr[1];
                }
            }
            return null;
        }
        //设置cookie
        function setCookie(key, value, time) {
            //时效
            var date = new Date();
            date.setDate(date.getDate() + time);
            //设置时效
            document.cookie = key + "=" + value + ";expires=" + date.toString();
        }
        function trim(str) {
            return str.replace(/\s+/g, "");
        }

        //获取相关元素
        var unInp = document.getElementById('vanclUserName');//用户名输入框
        var pwInp = document.getElementById('vanclPassword');//密码输入框
        //自动读取cookie相关信息填充用户名和密码框
        unInp.value = getCookie('un');
        pwInp.value = getCookie('pw');
        if(unInp.value!==''&&pwInp.value!==''){
            usernameFlag = true;
            passwordFlag = true;
        }
        vanclLogin.onclick = function (e) {
            e = e || event;
            //总验证
            if ((usernameFlag && passwordFlag) === true) {
                setCookie('un', unInp.value, 10);
                setCookie('pw', pwInp.value, 10);
                //系统能够一个对象,这个对象叫XMLHttpRequest,这个对象简称ajax对象,可以帮助我连接到一个页面,但是可以不跳页.
                var xhr = new XMLHttpRequest();//创建一个ajax对象
                //请求行
                xhr.open('get', 'http://10.36.144.239/fanke1/src/php/login.php?un=' + unInp.value + '&pw=' + pwInp.value);
                //请求主体
                xhr.send(null);
                //获取到响应的主体
                xhr.onload = function () {
                    var res = JSON.parse(xhr.response);
                    if (res.code === 0) {
                        alert('登陆成功')
                        location.href = 'http://10.36.144.239/fanke1/src/index.html';
                        //实现了页面的局部刷新
                        document.getElementById('result').innerHTML = '欢迎您，亲爱的' + res.data.un;
                    } else if (res.code === 1) {
                        alert('输入有误，请重新输入')
                    }
                }
            } else {
                e.preventDefault ? e.preventDefault() : returnValue = false;
            }
        }

        // 快速登录js
        //  _quickmobilenumber手机号输入框
        var quickMobileNumber = document.getElementById("_quickmobilenumber")
        //  getSmsCode点击获取短信验证码框
        var getSmsCode = document.getElementById("getSmsCode")
        //  phone提示手机号码是否正确框
        var phone = document.getElementById("phone")
        //  _quickpiccode验证码输入框
        var quickPicCode = document.getElementById("_quickpiccode")
        //  _quickpiccodevalidmsg提示验证码不能为空的框
        var quickPicCodeValIdMsg = document.getElementById("_quickpiccodevalidmsg")
        // sjdx手机短信验证码输入框
        var sjdx = document.getElementById("sjdx")
        // 手机短信验证码提示框
        var quickMobileValidCode = document.getElementById("_quickmobilevalidcode")
        // hqtxyzm获取6位字母数字组合验证码
        var hqtxyzm = document.getElementById("hqtxyzm")
        // 装6位字母数字组合验证码的span
        var yzm = document.getElementById("yzm")
        // 判断用户名
        //绑定事件(失去焦点事件:onblur)
        quickMobileNumber.onblur = function () {
            //书写验证用户名的正则
            var reg = /^1(3|5|7|8)[0-9]{9}$/;
            //验证用手机号是否合法
            if (!reg.test(quickMobileNumber.value)) {
                phone.style = "visibility: visible;";
                phone.innerHTML = "请输入正确的手机号码"
                return false;
            }
            else if (reg.test(quickMobileNumber.value)) {
                usernameFlag = true;
                phone.style = " visibility: hidden;";
            }
        }
        //  验证码输入框
        //  手机验证码输入框
        //绑定事件(失去焦点事件:onblur)
        sjdx.onblur = function () {
            //书写验证用户名的正则
            var reg = /^\d{6}$/;
            //验证用手机号是否合法
            if (!reg.test(sjdx.value)) {
                quickMobileValidCode.style = "visibility: visible;";
                quickMobileValidCode.innerHTML = "请输入正确的手机验证码"
                return false;
            }
            else if (reg.test(sjdx.value)) {
                usernameFlag = true;
                quickMobileValidCode.style = " visibility: hidden;";
            }
        }
        // 点击快速登录按钮
        function getCookie(key) {
            var cookiestr = document.cookie;
            var list = cookiestr.split(";");
            for (var i in list) {
                var arr = list[i].split("=");
                if (trim(arr[0]) == key) {
                    return arr[1];
                }
            }
            return null;
        }
        //设置cookie
        function setCookie(key, value, time) {
            //时效
            var date = new Date();
            date.setDate(date.getDate() + time);
            //设置时效
            document.cookie = key + "=" + value + ";expires=" + date.toString();
        }
        function trim(str) {
            return str.replace(/\s+/g, "");
        }

        //获取相关元素
        var quickMobileNumber = document.getElementById('_quickmobilenumber');//用户名输入框
               // 快速登录按钮
       var btnQuickLogin = document.getElementById("_btnquicklogin");
        // 自动读取cookie相关信息填充用户名和密码框
        quickMobileNumber.value = getCookie('un');
        btnQuickLogin.onclick = function (e) {
            e = e || event;
            //总验证
            if (usernameFlag  === true) {
                setCookie('un', quickMobileNumber.value, 10);
                //系统能够一个对象,这个对象叫XMLHttpRequest,这个对象简称ajax对象,可以帮助我连接到一个页面,但是可以不跳页.
                var xhr = new XMLHttpRequest();//创建一个ajax对象
                //请求行
                xhr.open('get', 'http://10.36.144.239/fanke1/src/php/login-1.php?un=' + quickMobileNumber.value + '&pw=' + pwInp.value);
                //请求主体
                xhr.send(null);
                //获取到响应的主体
                xhr.onload = function () {
                    var res = JSON.parse(xhr.response);
                    if (res.code === 0) {
                        alert('登陆成功')
                        location.href = 'http://10.36.144.239/fanke1/src/index.html';
                        //实现了页面的局部刷新
                        document.getElementById('result').innerHTML = '欢迎您，亲爱的' + res.data.un;
                    } else if (res.code === 1) {
                        alert('输入有误，请重新输入')
                    }
                }
            } else {
                e.preventDefault ? e.preventDefault() : returnValue = false;
            }
        }
        //  点击获取短信验证码按钮
        getSmsCode.onclick = function () {
            function rand(n, m) {
                return parseInt(Math.random() * (m - n + 1)) + n;
            }
            //数字字母混合验证码
            var str = '';
            for (var i = 0; i < 6; i++) {
                var randCode = rand(48, 57);
                if (randCode >= 58 && randCode <= 64 || randCode >= 91 && randCode <= 96) {
                    //进来不满意这个结果，让他重新来一遍
                    i--;
                }
                else {
                    str += String.fromCharCode(randCode)
                }
            }
            sjdx.value = str;
        }

        //  随机获取6位字母数字组合验证码
        yzm.innerHTML = "d2f7g5";
        hqtxyzm.onclick = function () {
            function rand(n, m) {
                return parseInt(Math.random() * (m - n + 1)) + n;
            }
            //数字字母混合验证码
            var str = '';
            for (var i = 0; i < 6; i++) {
                var randCode = rand(48, 122);
                if (randCode >= 58 && randCode <= 64 || randCode >= 91 && randCode <= 96) {
                    //进来不满意这个结果，让他重新来一遍
                    i--;
                }
                else {
                    str += String.fromCharCode(randCode)
                }
            }
            yzm.innerHTML = str;
        }
        //绑定事件(失去焦点事件:onblur)
        quickPicCode.onblur = function () {
            //验证用手机号是否合法
            if (quickPicCode.value == yzm.innerHTML) {
                quickPicCodeValIdMsg.style = "visibility: hidden;";
                return false;
            }
            else if (quickPicCode.value != yzm.innerHTML) {
                quickPicCodeValIdMsg.style = "visibility: visible;";
                quickPicCodeValIdMsg.innerHTML = "验证码错误"
            }
        }


        // 登录和快速登录切换js
        function getElements(className) {
            //传入类名,返回指定类名的节点的集合,兼容ie678
            var result = [];
            var all = document.getElementsByTagName('*');
            for (var i = 0; i < all.length; i++) {
                if (all[i].className == className) {
                    result.push(all[i])
                }
            }
            return result;
        }
        //排他思想(先干掉所有人,再留下我自己)
        // 获取事件源
        var liArr = document.getElementsByTagName('li');//两个控制按钮
        var userInfor = getElements('user_infor');//两个内容div

        // 	// 循环绑定事件
        for (var i = 0; i <= liArr.length - 1; i++) {
            // 	//绑定点击事件
            liArr[i].onclick = function () {
                var index = this.getAttribute('index');//被点击的a的索引
                //哪个a被点击,哪个a就有on类名(排他思想,干掉所有人,留下我一个)
                //干掉所有人
                for (var j = 0; j < liArr.length; j++) {
                    liArr[j].className = "";
                    userInfor[j].style.display = "none";
                }
                //留下我一个
                this.className = "on";
                userInfor[index].style.display = "block"

            }
        }
    })()
}