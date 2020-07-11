var _0x2d24=["\x6C\x69\x73\x74","\x72\x65\x6D\x6F\x76\x65","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x62\x6C\x6F\x67\x2D\x70\x6F\x73\x74\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x63\x74\x69\x76\x65","\x61\x64\x64","\x67\x72\x69\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64"];function sViewGrid(){document[_0x2d24[4]](_0x2d24[3])[0][_0x2d24[2]][_0x2d24[1]](_0x2d24[0]);document[_0x2d24[8]](_0x2d24[7])[_0x2d24[2]][_0x2d24[6]](_0x2d24[5]);document[_0x2d24[8]](_0x2d24[0])[_0x2d24[2]][_0x2d24[1]](_0x2d24[5])}function sViewList(){document[_0x2d24[4]](_0x2d24[3])[0][_0x2d24[2]][_0x2d24[6]](_0x2d24[0]);document[_0x2d24[8]](_0x2d24[7])[_0x2d24[2]][_0x2d24[1]](_0x2d24[5]);document[_0x2d24[8]](_0x2d24[0])[_0x2d24[2]][_0x2d24[6]](_0x2d24[5])}

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


content = document.getElementById('comments').getElementsByTagName('p');
for (var i = 0; i < content.length; i++) {
 if (content[i].innerHTML.indexOf('</a>') !== -1) {
 content[i].innerHTML = content[i].innerHTML.replace(/<a[^>]*>|<\/a>/g, "");
 }
}

function showComm(e){document.getElementById(e)&&("none"!=document.getElementById(e+"-show").style.display?(document.getElementById(e+"-show").style.display="none",document.getElementById(e).style.display="block"):(document.getElementById(e+"-show").style.display="block",document.getElementById(e).style.display="none"))};

$(document).ready(function(){$(".post-body a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},600,function(){window.location.hash=t})}})});

/* Remove Profile Link in Blogger Comments by igniel.com */
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
