
let Scroll = function () {
  function scrollDisplay(scrolltop,f1 = '',f2 = f1){
    let top = $(document).scrollTop()
    if(top>=scrolltop){
      f1()
    }else{
      f2()
    }
  }

  $(window).scroll(function(){
    scrollDisplay($("header").height(),function(){
      if($("#nav").hasClass("nav-style-one")){
        $("#nav").removeClass("nav-style-one")
        $("#nav").addClass("nav-style-two")
      }
      $(".Stick").css("display","block")
    },function(){
      if($("#nav").hasClass("nav-style-two")){
        $("#nav").removeClass("nav-style-two")
        $("#nav").addClass("nav-style-one")
      }
      $(".Stick").css("display","none")
    })
  })
}

export default Scroll