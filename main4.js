$(document).ready(function () {
    $(".close-sf").click(function () {
        $(".Popup_Menu,.Popup_Menu3,#Tukang_Redesign_Header_Container,#wrapper").removeClass("aktif")
    })
}), $(document).ready(function () {
    $(".Tombol_Popup").click(function () {
        $(".Popup_Menu,.Popup_Menu3,#Tukang_Redesign_Header_Container,#wrapper").toggleClass("aktif")
    })
})
