
function automatic(banner,tab,max,ms,f1 = '',f2 = f1){
  var index = 0;
  var ainterval;
  $(tab+':eq(0)').addClass("Selected");
  function f(){
    index++;
    if(index>max){
      index = 0;
    }
    f1(banner,tab,index)
    $(tab).removeClass("Selected")
    $(tab+":eq("+index+")").addClass("Selected")
  }
  $(tab).click(function(){
    index = $(this).index(tab)
    clearInterval(ainterval)
    f2(banner,tab,index)
    $(tab).removeClass("Selected")
    $(tab+":eq("+index+")").addClass("Selected")
    ainterval = setInterval(f,ms)
  });
  ainterval = setInterval(f,ms)
}

let banner = function(){
  automatic("#banner>.imgbox-index>img","#banner-tab>.tab>div",3,8000,function(banner,tab,index){
    $(banner).css("opacity",0)
    $(banner+":eq("+index+")").css("opacity",1)
  })
}

export default banner