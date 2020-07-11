function otherScript() {
  //-----START -----//

  //-----STOP -----//
}

content = document.getElementById('comments').getElementsByTagName('p');
for (var i = 0; i < content.length; i++) {
 if (content[i].innerHTML.indexOf('</a>') !== -1) {
 content[i].innerHTML = content[i].innerHTML.replace(/<a[^>]*>|<\/a>/g, "");
 }
}

function showComm(e){document.getElementById(e)&&("none"!=document.getElementById(e+"-show").style.display?(document.getElementById(e+"-show").style.display="none",document.getElementById(e).style.display="block"):(document.getElementById(e+"-show").style.display="block",document.getElementById(e).style.display="none"))};
         
$(document).ready(function(){$(".post-body a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},600,function(){window.location.hash=t})}})});

(function ignielRemLinkNameCmt(){
 if (document.querySelector('#comments .comments-content')){
  var a = document.querySelectorAll('.comment-block .user a');
  for (var x = 0; x < a.length; x++){
   var b = a[x].text, c = a[x].parentNode, d = document.createElement('span'); d.innerHTML = b;
   a[x].remove();
   c.appendChild(d);
  }
 }
})();

$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#modedark").on("click",function(){"Night"!=localStorage.toggled?($("body").toggleClass("Night",!0),localStorage.toggled="Night",$(".section-center").css("display","block")):($("body").toggleClass("Night",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("Night")?$("#modedark").prop("checked",!0):$("#modedark").prop("checked",!1)});

$(document).ready(function () {
    $(".close-sf").click(function () {
        $(".Popup_Menu,.Popup_Menu3,#Tukang_Redesign_Header_Container,#wrapper").removeClass("aktif")
    })
}), $(document).ready(function () {
    $(".Tombol_Popup").click(function () {
        $(".Popup_Menu,.Popup_Menu3,#Tukang_Redesign_Header_Container,#wrapper").toggleClass("aktif")
    })
})

$(document).ready(function () {
    $(".close-sf").click(function () {
        $(".Tukang_Redesign_Popup,.Tukang_Redesign_Popup3,#Tukang_Redesign_Header_Container,#wrapper").removeClass("aktif")
    })
}), $(document).ready(function () {
    $(".tmblbtn").click(function () {
        $(".Tukang_Redesign_Popup,.Tukang_Redesign_Popup3,#Tukang_Redesign_Header_Container,#wrapper").toggleClass("aktif")
    })
})

$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $("#nav-wrapper, .darkshadow").toggleClass("open")
    });
    $(".darkshadow").click(function () {
        $("#nav-wrapper,.darkshadow").removeClass("open")
    });
    var d = function (a, b) {
        this.el = a || {};
        this.multiple = b || false;
        var c = this.el.find(".nav-submenu");
        c.on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };
    d.prototype.dropdown = function (a) {
        var b = a.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass("open");
        if (!a.data.multiple) {
            b.find(".nav-sub").not($next).slideUp().parent().removeClass("open")
        }
    };
    var e = new d($("#nav-wrapper"), false)
})
