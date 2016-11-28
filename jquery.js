      var datep={"date":[{"src":"85.jpg"},{"src":"86.jpg"},{"src":"87.jpg"},{"src":"88.jpg"},{"src":"89.jpg"},{"src":"90.jpg"},{"src":"91.jpg"},{"src":"78.jpg"},{"src":"93.jpg"},{"src":"94.jpg"},{"src":"95.jpg"},{"src":"96.jpg"},{"src":"97.jpg"},{"src":"84.jpg"},{"src":"83.jpg"},{"src":"82.jpg"},{"src":"81.jpg"},{"src":"80.jpg"},{"src":"79.jpg"},{"src":"78.jpg"},{"src":"77.jpg"},{"src":"76.jpg"},{"src":"75.jpg"},{"src":"74.jpg"},{"src":"73.jpg"},{"src":"72.jpg"},{"src":"71.jpg"},{"src":"70.jpg"},{"src":"69.jpg"},{"src":"68.jpg"},{"src":"67.jpg"},{"src":"66.jpg"},{"src":"65.jpg"},{"src":"64.jpg"},{"src":"63.jpg"},{"src":"62.jpg"},{"src":"61.jpg"},{"src":"60.jpg"},{"src":"59.jpg"}]};
      //json格式的图片，以实现无限加载
$(window).on('load',function(){
    var last_element_height=$('#demo>.box:last-child').offset().top+$('#demo>.box:last-child').height();
      if(last_element_height<$(window).height()){
        waterfall(datep); 
      }
    $(window).on('scroll',function(){
      if(checkScrollSlide()){
        waterfall(datep);
        }
      })
})
function waterfall(datep){
  $.each(datep.date,function(index,element){
          $Box=$('<div>').addClass('box').appendTo($('#demo'));
          $Pic=$('<div>').addClass('pic').appendTo($($Box));
          $img=$('<img>').attr('src',"images/"+$(element).attr("src"));
          $img.appendTo($Pic);
          });
    var $oDemo=$('#demo');
    var $Boxs=$('#demo>div');  
    var BoxW=$Boxs.eq(0).outerWidth();
    var winW=$(window).width();
    var cols=Math.floor(winW/BoxW);
    $oDemo.css({
      'width':cols*BoxW+'px',
      'margin':" 0 auto"
      });
    var ArrH=[];
    $Boxs.each(function(index, element) {
          var   eleH=$Boxs.eq(index).outerHeight();
          if(index<cols){
            ArrH[index]=eleH;
          }else{
            var Min=Math.min.apply(null,ArrH);
            var minIndex=$.inArray(Min,ArrH);
            $(element).css({
              'position':'absolute','top':Min+'px','left':minIndex*BoxW+'px'
              });
            ArrH[minIndex]+=eleH;  
            }
    });
}
function checkScrollSlide(){
    var $lastbox=$('#demo>div').last(); 
    var winH=$(window).height();
    var scrolH=$(window).scrollTop();
    var lastpicDis=$lastbox.offset().top+Math.floor($lastbox.outerHeight()/2);
    return  (lastpicDis<winH+scrolH)?true:false;
}
