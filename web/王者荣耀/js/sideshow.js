function byId(id) {
    return typeof(id) === "string"?document.getElementById(id):id;
 }
 function changeOut() {
     var index = 0;
     var timer = null;
     var navs = document.querySelectorAll("#sideshowAside li");
     var pics = document.querySelectorAll("#sideshowPic  li");
     var subNavs = document.querySelectorAll("#subnav li")
     var len = navs.length;
     var box = byId("sideShow");
     box.onmouseover = function() {
         clearInterval(timer);
     }
     box.onmouseout = function() {
        timer = setInterval(function() {
            index++;
            if (index >= len) {
                index = 0;
             }
             changecColor()     
         },1500)
     }
     box.onmouseout()
     navs.forEach((ndNav, navIndex) => {
         ndNav.onclick = function() {
             index = navIndex;
             changecColor(); 
             clearInterval(timer);
             timer = setInterval(function() {
                 index++;
                 if (index >= len) {
                     index = 0;
                  }
                  changecColor()     
              },1500)
         }
     });
     function changecColor() {
        for (let i = 0; i < len; i++) {
            navs[i].className = "" ;
            pics[i].className = "";
            subNavs[i].className = "";
        }
        navs[index].className = "change";
        pics[index].className = "cur";
        subNavs[index].className = "hot";
    }
 }
 changeOut();