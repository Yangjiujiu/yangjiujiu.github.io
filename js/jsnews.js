// 实现图片滚动播放，左右翻页以及鼠标放上停止播放
window.onload = () => {
    var lb = document.querySelector("#tleft")
    var rb = document.querySelector("#tright")
    var ul = document.querySelector("#pict-ul")
    var lis = ul.getElementsByTagName("li")

    var classes = ["b1","cc","b1"]
// 多少个图片加多少个b1 同时body里改<li></li>标签
    

    function toright() {
        var last_class = classes.pop()
        classes.unshift(last_class)
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = classes[i]
//因为cl发生了变化 所以lis[i]的classname也要跟着变
        }

    }
    function tleft() {
        var first_class = classes.shift()
        classes.push(first_class)

        for (var i = 0; i < lis.length; i++) {
            lis[i].className = classes[i] 
//因为classes发生了变化 所以lis[i]的classname也要跟着变
  
        }
    }
    rb.onclick = toright;
    lb.onclick = tleft;
// 定时器
    timer = setInterval(toright, 3000)

// 鼠标进来暂停 清除定时器
    ul.onmouseenter = function () {
        clearInterval(timer)
        timer = null
    }
// 鼠标出去 重开定时器
    ul.onmouseleave = () => {
        timer = setInterval(toright, 3000)
    }
}

// 页眉下拉菜单
// 点击按钮，下拉菜单在 显示/隐藏 之间切换 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("youDropdown").classList.toggle("show");
}

// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
