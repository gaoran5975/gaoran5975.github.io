(function(){
	//导航区tab切换
	$("#lm1 ul li").hover(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$("#lm2 .lbcontent>ul").hide().eq(index).show();
	});
	//
	$("#lm5 ul li").each(function(index){
        $("#lm5 ul li:gt(0)").hide();
        $("#lm5 ul li").eq(0).show();
	});
	//服务之窗 menu获取文字
	  $("#lm4 ul li").each(function(index){
    var lm4text=$("#lm5 ul li").eq(index).find('a.title').text();
     $(this).find('a').text(lm4text);
  })
	//服务之窗tab切换
	$(".fwzcmenu li").hover(function(){
		var index=$(this).index();
		$(".fwzcmenu li").removeClass('red').eq(index).addClass('red');
		$("#lm5 ul li").hide().eq(index).show();
	});
	//服务之窗列表区
	if($('#lm6 ul li').size()>0){
			$('#lm6 ul li').eq(5).addClass('noLeftGap');
			$('#lm6 ul li').eq(10).addClass('noLeftGap');
			if(viewport().width < 768){
				// console.log($('#lm6 ul li').eq());
				$('#lm6 ul li').each(function(){
					$('#lm6 ul li').removeClass('cur').eq(0).addClass('cur');
						if ($(this).find('a.pic').height() >= 180) {
							$(this).css({'padding-top':'9px','height':'79px'}).find('a').css({'line-height':'135%'});
							if($(this).find('a').height() >= 89){
								$(this).find('a').css({'font-size':'12px'});
							}
						}
				})			
			}
	}
	//服务之窗下面方格文字 分行
	$("#lm6 ul li").each(function(){
       var content=$(this).find('a').html();
       var br=new RegExp("<br>","g");
       var l= content.match(br)==null ? 0 : content.match(br).length;
       switch(l){
          case 1: 
              $(this).addClass("two");
              break;
          case 2:
             $(this).addClass("three");
              break;
          case 3:
             $(this).addClass("four");
              break;
          case 4:
             $(this).addClass("five");
          default:
              break;    
       }
  })
	//服务之窗下面方格悬停变红
	$("#lm6 ul li").hover(function(){
		var index=$(this).index();
		$("#lm6 ul li").removeClass('cur').eq(index).addClass('cur');
	})
	// 友情链接 选项卡 PC端
	
       $(".div_scroll").mCustomScrollbar({  
            autoHideScrollbar: false,  
            alwaysShowScrollbar:2,
            theme:"light"
        });  
        $(".select1 ul li,.select1 ul span").click(function(){
           $(".xx1").toggle();
        })
        $(".xx1").hover(function(){
            return;
        },function(){
          $(this).hide()
        })
        $(".select2 ul li,.select2 ul span").click(function(){
           $(".xx2").toggle();
        })
        $(".xx2").hover(function(){
            return;
        },function(){
          $(this).hide()
        })
	//友情链接部分
	// function ljlunbo(){
	// 	var newul=$('.yqljlb').clone();
	// 		       newul.appendTo($("#lm16"));
 //                  $('.yqljlb:first').addClass('moveul');
 //                var ljLiH=$('.moveul li').height()+2*parseInt($(".moveul li").css('margin-top'));
 //                function showLJ(){
 //                	 var ljUlMtop=Math.abs(parseInt($(".moveul").css('margin-top')));
 //                	  var ljUlH=$('.moveul').height()+$('.yqljss').height()-ljLiH;
 //                	  if(ljUlMtop > ljUlH){
 //                	  	  		$(".moveul").css({
	// 	                	  	'margin-top':'0px'
	// 	                	  },600);
 //                	  }             	 
	//  				 $('.moveul').animate({
	//                	 'margin-top':'-='+ljLiH
	//                },600)
 //                }
 //                var timer=setInterval(function(){
 //                	 showLJ();
 // 				},1000)
 // 				 $('#lm16').hover(function(){
 // 					clearInterval(timer);
 // 				},function(){
	//  				 timer=setInterval(function(){
	//                 	 showLJ();
	//  				 },1000)		
 // 				})
	// }
	// if($('.yqljlb li').size()>0){
	// 	if (viewport().width > 768) {
	// 		   $('.yqljss li:gt(19)').css({
	// 		   		'width':'9%'
	// 		   })
	// 		    ljlunbo();
	// 	}
	// 	else if (viewport().width > 350 && viewport().width < 768){
	// 		$('.yqljlb li').each(function(){
	// 			$(this).css({
	// 				'width':'auto',
	// 				'margin-right':'15px'
	// 			});
	// 		})
	// 		$('.yqljss li').each(function(){
	// 			$(this).css({
	// 				'width':'auto',
	// 				'margin-right':'15px'
	// 			});
	// 		});
	// 		// 友情链接
	// 		ljlunbo();
	// 	}
	// 	else{
	// 		$('.yqljlb li').each(function(){
	// 			$(this).css({
	// 				'width':'auto',
	// 				'margin-right':'6px'
	// 			});
	// 		})
	// 		ljlunbo();
	// 	}
	// }
	//手机端增加友情链接
	var yqljlen1=$(".xx1").find('.list6 li').length;
	// console.log(yqljlen1)
	var option1='';
	var hrefi=[],texti=[];
	for(var i=0;i<yqljlen1;i++){
		option1+='<option></option>';
	}
	$('#Select1').append(option1);
	for(var i=0;i<yqljlen1;i++){
		hrefi[i]=$(".xx1").find('.list6 li a').eq(i).attr('href');
		texti[i]=$(".xx1").find('.list6 li a').eq(i).html();
		$('#Select1').find('option').eq(i+1).html(texti[i]).attr({
			 'value':hrefi[i]
		})
	}
	var yqljlen2=$(".xx2").find('.list6 li').length;
	var option2='';
	var href2i=[],text2i=[];
	for(var i=0;i<yqljlen2;i++){
		option2+='<option></option>';
	}
	$('#Select2').append(option2);
	for(var i=0;i<yqljlen2;i++){
		href2i[i]=$(".xx2").find('.list6 li a').eq(i).attr('href');
		text2i[i]=$(".xx2").find('.list6 li a').eq(i).html();
		$('#Select2').find('option').eq(i+1).html(text2i[i]).attr({
			 'value':href2i[i]
		})
	}
})();