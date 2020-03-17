
      var oBtn = document.getElementById("btn");
      var oTxt1 = document.getElementById("txt1");
      var oPsw = document.getElementById("psw");
      var oName = document.getElementById("name");
      var oPwd = document.getElementById("pwd");
      //用户名验证
      oTxt1.onchange = function() {

        var valn = oTxt1.value;
        var reg = /^\w{4,10}$/;
        if (!reg.test(valn)) {
          oName.innerHTML = "用户名仅支持中英文、数字和下划线,且不能为纯数字";
          return false;
        } else {
          return true;
        }
      }
      //密码验证
      oPsw.onchange = function() {
        var valp = oPsw.value;
        var reg = /^\w{6,20}$/;
        if (!reg.test(valp)) {
          oPwd.innerHTML = "密码设置不符合要求:长度为8~14个字符,字母，数字以及标点符号至少包含2种,不允许有空格、中文";
          return false;
        } else {
          return true;
        }
      }

      var oPsw1 = document.getElementById("psw1");
      var oPwd1 = document.getElementById("pwd1");
      var oTxt3 = document.getElementById("txt3");
      var oNum = document.getElementById("num");
      
      //电话号码验证
      var oTel = document.getElementById("tel");
      var oTelId = document.getElementById("telId");
      oTel.onblur = function() {
        var valtel = oTel.value;
        var reg = /^1(3|5|7|8)\d{9}$/g;
        if (!reg.test(valtel)) {
          oTelId.innerHTML = "手机号码格式不正确";
          return false;
        } else {
          return true;
        }
      }
            
            var countdown=60; 
            function settime(val) { 
              if (countdown == 0) { 
                val.removeAttribute("disabled");  
                val.value="获取验证码"; 
                countdown = 60; 
              } else { 
                val.setAttribute("disabled", true); 
                val.value="重新发送(" + countdown + ")"; 
                countdown--; 
              } 
              setTimeout(function() { 
                settime(val) 
              },1000) 
            } 
