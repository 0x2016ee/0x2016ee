function otherScript() {
  //-----START -----//

  //-----STOP -----//
}

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
