
let Click = function () {
  //登录注册面板
  //显示
  $("#nav-signup").click(function(){
    $(".signup").removeClass("rotateY").css("display","flex")
    $("#CoverPanel").css("display","flex")
    setTimeout(function(){
      $(".signup").addClass("rotateY")},0)
  })
  $("#nav-signin").click(function(){
    $(".signin").removeClass("rotateY").css("display","flex")
    $("#CoverPanel").css("display","flex")
    setTimeout(function(){
      $(".signin").addClass("rotateY")},0)
  })
  //关闭
  $(".close").click(function(){
    $(this).parents(".SignPanel").hide().parent("#CoverPanel").hide()
  })
  //切换
  $(".Switch").click(function(){
    let panel = $(this).parents(".SignPanel").removeClass("rotateY").hide().siblings(".SignPanel").css("display","flex")
    setTimeout(function(){
      panel.addClass("rotateY")},0)
  })
  //焦点阴影
  $(".text").focus(function(){
    $(this).parent().css("box-shadow","0 0 10px rgba(0,0,0,0.8)")
  })
  $(".text").focusout(function(){
    $(this).parent().css("box-shadow","none")
  })

}

export default Click