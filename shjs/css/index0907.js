(function(){
	if(viewport().width < 768){
		 $("#lm2 .lbcontent>ul").each(function(index){
		 	$("#lm2 .lbcontent>ul").eq(index).show();
		 })
	}
	$("#lm5 ul li").each(function(index){
        $("#lm5 ul li:gt(0)").hide();
        $("#lm5 ul li").eq(0).show();
	});
	$("#lm1 ul li").hover(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$("#lm2 .lbcontent>ul").hide().eq(index).show();
	});
	$(".fwzcmenu li").hover(function(){
		var index=$(this).index();
		$(".fwzcmenu li").removeClass('red').eq(index).addClass('red');
		$("#lm5 ul li").hide().eq(index).show();
	});
	if($('#lm6 ul li').size()>0){
			$('#lm6 ul li').eq(5).addClass('noLeftGap');
			$('#lm6 ul li').eq(10).addClass('noLeftGap');
			if(viewport().width < 768){
				$('#lm6 ul li').each(function(){
					$('#lm6 ul li').removeClass('cur').eq(0).addClass('cur');
						if ($(this).find('a').height() >= 100) {
							$(this).css({'padding-top':'22px','height':'66px'}).find('a').css({'line-height':'135%'});
						}
				})			
			}
	}
	$("#lm6 ul li").hover(function(){
		var index=$(this).index();
		$("#lm6 ul li").removeClass('cur').eq(index).addClass('cur');
	})
	if($('.yqljlb li').size()>0){
		if (viewport().width > 768) {
			$('.yqljlb li:nth-child(7n+1)').css({'width':'210px'});
			$('.yqljlb li:nth-child(7n+2)').css({'width':'205px'});
			$('.yqljlb li:nth-child(7n+3)').css({'width':'162px'});
			$('.yqljlb li:nth-child(7n+4)').css({'width':'165px'});
			$('.yqljlb li:nth-child(7n+5)').css({'width':'207px'});
			$('.yqljlb li:nth-child(7n+6)').css({'width':'170px'});
			//社会建设领导小组单位
			$('.yqljlb li').eq(19).css({'width':'221px','text-align':'right'});
			$('.yqljlb li').eq(23).find('a').css({'color':'#ffffff'});
			$('.yqljlb li').eq(26).css({'width':'55px'}).find('a').css({'color':'#ffffff'});
			$('.yqljlb li').eq(27).css({'width':'165px','text-align':'right'});
			$('.yqljlb li').eq(33).css({'width':'155px'});
			$('.yqljlb li').eq(40).css({'width':'122px'});
		}else if (viewport().width > 350 && viewport().width < 768){
			$('.yqljlb li').each(function(){
				$(this).css({
					'width':'auto',
					'margin-right':'15px'
				});
			})
			$('.yqljlb li').eq(19).html('').css({'width':'0px','margin-right':'0px'});
			$('.yqljlb li').eq(23).html('').css({'width':'0px','margin-right':'0px'});
			$('.yqljlb li').eq(26).html('').css({'width':'0px','margin-right':'0px'});
		}
		else{
			$('.yqljlb li').each(function(){
				$(this).css({
					'width':'auto',
					'margin-right':'6px'
				});
			})
			$('.yqljlb li').eq(19).html('').css({'width':'0px','margin-right':'0px'});
			$('.yqljlb li').eq(23).html('').css({'width':'0px','margin-right':'0px'});
			$('.yqljlb li').eq(26).html('').css({'width':'0px','margin-right':'0px'});
		}
	}
})();