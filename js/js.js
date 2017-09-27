$(window).ready(function(){
	init();

/********here is homepage****************/	
	
	carouselEnable();
	header();
	programEft();
	wordEft();
	page3(); /*********page3 function*******/
	page4();
	page5();


/************About Us page**************/
	aupg_header();
	aupg_content();

/************Gallery page***********/	
	gallery_content();

/*************Blog page*************/	
	blog_content();

/*********Blog1 page**********/
	blog1_content();

});

/********word efeccts**********/
function wordEft(){
	var word=$("#header .bnrCtt h1");
	var word2=$("#header .bnrCtt h3");
	letterEft(word);
	letterEft(word2);
}

function letterEft(word){
	var cnt=word.text();
	var cntHtml="";
	for(var i=0;i<cnt.length;i++){
		if(cnt[i]!=" "){
			cntHtml+="<span>"+cnt[i]+"</span>";
		}else{
			cntHtml+="<span>&nbsp</span>";
		}
	};
	word.html(cntHtml);
	word.children('span').each(function(i){
		var leftPos=Math.floor((Math.random()*3000)-1000);
		var bottomPos=Math.floor((Math.random()*6000)-2000);
		$(this).css({left:leftPos+'px',bottom:bottomPos+'px'});
		var speed=Math.floor((Math.random()*3000)+500);
		$(this).animate({left:'0px',bottom:'0px'},speed);
	});
}

/*********scroll effects***************/
function programEft(){
	scroll();

	//setInterval(scroll,500);
	function scroll(){
			window.addEventListener('scroll',debounce(scrollEft,500));

	};

	function scrollEft(){
		$(window).scroll(function(){
			var windowH = $(window).height();
			var contentH= $("#header").height();
			var page2H= $(".page2").height();
			var scrollH= $(window).scrollTop();
			if(windowH+scrollH>contentH){
				$(".program").children(".col-md-4").addClass('effect');
			};
			var timer=setTimeout(function(){
				$(".program").children(".col-md-4").removeClass('effect');
			},4000);
			$("img.imgIcon").addClass("imgIconEft");
			setTimeout(function(){
				$("img.imgIcon").removeClass("imgIconEft");
			},4000);
		});
	};
}


/*******init function, using to set header's hight when screen is resized************/
function init(){
	var headerH=$("#header").height();
	$("#header .bnrCttContain").css({height:headerH+"px"});
	$(window).bind('resize',function(){
		var headerH=$("#header").height();
		$("#header .bnrCttContain").css({height:headerH+"px"});
	});
}

function blog1_content(){
		var liHover=$("#blog1 content .row .col-md-8").children(".col-md-12");
		var inrPadding=10;
		var siz="";
		var target="img";
		var top="-"+10;
	    hoverCustom(liHover,target,inrPadding,top,siz);	
	    $("#blog1 content .carousel-title.panel.panel-default").css({marginLeft: ""+inrPadding+"px",marginRight: ""+inrPadding+"px"});
	    blog1_scrollEft();

}

function blog1_scrollEft(){
	scroll();
//	setInterval(scroll,500);
	function scroll(){
			window.addEventListener('scroll',debounce(scrollEft,500));

	};
	function scrollEft(){
			var windowH = $(window).height();
			var contentH= $("#blog1 #header").height();
			var scrollH= $(window).scrollTop();
			if((windowH+scrollH)>contentH){
				var word=$(".side .row .col-md-12.text-center h3");
				for(var i=0;i<word.length;i++){
					var wordCnt=$(word[i]);
					letterEft(wordCnt);
				};
			};

	};
}


/**********bootstrap caousel function**************/
function carouselEnable(){
  //  $("#CarouselPage6").carousel();
    // Enable Carousel Controls
    $("#CarouselPage6").carousel("pause");
    $(".left").click(function(){
        $("#CarouselPage6").carousel("prev");
    });
    $(".right").click(function(){
        $("#CarouselPage6").carousel("next");
    });
}
function header(){
	$("#header .nav-control").on("click",function(){
		$("#header nav").toggleClass("showNav");
	});
}

/********hover prive function*************/
function hoverShowPrice(arr,inrPadding,left,top,siz){
	if(!siz){
		var clear=1;
	}
	$.each(arr,function(index,value){
		$(value).hover(function(){
			var pos="left:"+(left+inrPadding)+"px;top:"+top+"px";
			$(value).css({position:"relative"});
			if((!siz)||(clear)){
				//console.log($(this).children("img"));
				siz="width:"+($(this).width()-2*inrPadding)+"px;height:"+($(this).height()-4*inrPadding)+"px;";
			}
			var price=$(this).find(".txt-cnt").find("p:last-child").text();
			var sty=siz+";display:block;position:absolute;"+pos;
			var inrSty="position:relative;"+siz+"vertical-align:middle;display:table;margin:auto;top:20px;background-color:rgba(0,0,0,0.8);"+"border-width:2px;"+"border-style:solid;"+"border-color:#0e7200;"+" box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;";
			$(this).append("<div class='hoverBg'><div class='hover' style="+sty+"><div class='inr' style="+inrSty+"><div class='wrap'><p class='hvrPriceTxt'>"+price+"</p></br><button>buy now</button></br><button>add to cart</button></div></div></div></div>");
			$(this).find("i").css({left:($(this).find('.inr').width()-$(this).find("i").width())/2+"px",top:($(this).find('.inr').height()-$(this).find("i").height())/2+"px"});
			//$(".hoverBg").css({backgroundColor:"red"});
			$(this).children("div").animate({opacity:0.95},'slow');
			$(this).find(".hover").animate({opacity:1,filter:'alpha(opacity=100)'},'slow');
		},function(){
			$(this).children(".hoverBg").remove();
			if(!siz){
				clear=1;
			}
		}); 
	});
}


/*********page3 function****************/

function page4(){
	calCarousel();
	$(window).bind('resize',calCarousel);


	function calCarousel(){
		//var divW=0.4*($(".container").width());
		var divH=500;
		var divNum=$(".carousel-box ul.carousel-inner").children("li").length;
		if(Modernizr.mq('(max-width: 500px)')){
			var shownNum=1;
			var divW=$(".container").width();
			$(".page4 .carousel-box .carousel-control.left").removeClass("leftCtrBig")
				.addClass("leftContrl");
			$(".page4 .carousel-box .carousel-control.right").removeClass("rightCtrBig")
				.addClass("rightContrl");
					$("span.carousel-control.right.rightContrl").css({left:divW-2*paddingInr-fixMargin-$("span.carousel-control.right.rightContrl").width()+"px"});

		}else{
		    var shownNum=2;
		    var divW=0.4*($(".container").width());
		    $(".page4 .carousel-box .carousel-control.left").removeClass("leftContrl")
			    .addClass("leftCtrBig");
			$(".page4 .carousel-box .carousel-control.right").removeClass("rightContrl")
				.addClass("rightCtrBig");
			if(Modernizr.mq('(min-width: 992px)')){
				$("#header div.bnrCttContain.container-fluid").css({paddingLeft:$("div.navbar-header.col-md-2").width()+"px"});
			}
		}
		var paddingInr=10; /**set the default padding size inside carousel**/
		var index=1;
		var maxIndex=divNum-shownNum;
		var fixMargin=4;/**there is fix margin between each box**/
		var arr=$(".carousel-box ul.carousel-inner").children("li");
		//console.log(divW-2*paddingInr-fixMargin);
		for(var i=0;i<shownNum;i++){
			$(arr[i]).addClass("showInDiv");
		}

		//calPadding();

		$(".carousel-box").css({position:"relative",width:divW*shownNum-2*paddingInr-fixMargin+"px",marginLeft:"auto",marginRight:"auto",marginBottom:"100px",height:divH+"px"})
			.children("div").css({width:divW*shownNum-2*paddingInr-fixMargin+"px",height:divH+"px",overflow:"hidden",position:"relative"})
			.children("span.carousel-control").css({position:"absolute"});
		$(".carousel-box ul.carousel-inner").css({position:"absolute",listStyle:"none",margin:"0",padding:"0",width:divNum*(divW+paddingInr+fixMargin)+"px",height:divH+"px",overflow:"hidden"});
		$(".carousel-box ul.carousel-inner li").css({display:"inline",width:divW+"px",padding:"0px",margin:"0px",borderSize:"0px"})
			.children("img").css({width:(divW-2*paddingInr-fixMargin)+"px",marginRight:2*paddingInr+"px",padding:"0px",marginLeft:"0px",borderSize:"0px"});  

			             /******click event******/
	    $(".carousel-box span.carousel-control.right").click(function(){
	    	if(index<=maxIndex){
	    		var left=$(".carousel-box ul.carousel-inner").position().left;
	    		$(".carousel-box ul.carousel-inner").animate({left:left-divW+"px"},500);
	    		//console.log(index*2*paddingInr);
	    		$(arr[index-1]).removeClass("showInDiv");
	    		$(arr[index+1]).addClass("showInDiv");
	    		//console.log(arr[index+1]);
	    		index+=1;
	     	}else{
	    		$(".carousel-box ul.carousel-inner").animate({left:0+"px"},500);
	    	//	$(arr[index-1]).removeClass("showInDiv");
	    		index=1;
	    		for(var i=0;i<shownNum;i++){
	    			$(arr[divNum-i-index]).removeClass("showInDiv");
	               // console.log(divNum-i);
	    			$(arr[i]).addClass("showInDiv");
	    		}
	    	}
	    }); 
	    $(".carousel-box span.carousel-control.left").click(function(){
	    	if(index>1){
	    		//console.log(index);
	    		$(arr[index]).removeClass("showInDiv");
	    		$(arr[index-shownNum]).addClass("showInDiv");
	    		index=index-1;
	    		var left=$(".carousel-box ul.carousel-inner").position().left;
	    		$(".carousel-box ul.carousel-inner").animate({left:left+divW+"px"},500);

	    	}else{
	    		for(var i=0;i<shownNum;i++){
	    			$(arr[index-i]).removeClass("showInDiv");
	    			$(arr[divNum-i-1]).addClass("showInDiv");
	    		}
	    		index=maxIndex+index;
	    		$(".carousel-box ul.carousel-inner").animate({left:-divW*maxIndex+"px"},500);
	    	};

			});

	    	/**caculate the carousel-title**/
	    	carouselTitle();

	    	function carouselTitle(){
		    	var mrgLeft=20;
		    	$(".carousel-box .carousel-title").css({marginLeft:mrgLeft+"px",marginRight:mrgLeft+2*paddingInr+fixMargin+"px"});
		    	$(".carousel-box .carousel-control i").css({position:"absolute",top:($(".carousel-box .carousel-inner li img").height()-20)/2+"px"});
		    	/**********hover function************/	
		    	var liHover=$(".carousel-box ul.carousel-inner").children("li");
		    	var inrPadding=20;
		    	var siz="height:"+($(".carousel-box ul.carousel-inner li img").height()-2*inrPadding)+"px;width:"+($(".carousel-box ul.carousel-inner li img").width()-2*inrPadding)+"px";
		    	var target="img";
		    	var top="-"+($(".carousel-box ul.carousel-inner li img").height())/2;

			    hoverCustom(liHover,target,inrPadding,top,siz);
	    	}


	}

}


/*********page3 function*******/
function page3(){
	/***set resize function****/
	var timer=0;
	changeSize();
	var change=$(window).bind('resize',changeSize);
	function changeSize(){
		if(Modernizr.mq('(min-width: 992px)')){
			var divW=$("content .gallery .row div.col-md-3:first-child").width(); 
			//console.log(divW);
			//console.log($("content .gallery .row div.col-md-3:first-child").attr("class"));
			$("content .gallery .row div:nth-child(4)").css({left:-2*divW+"px"});
			$("content .gallery .row div:nth-child(5)").css({left:-divW+"px"});
			$("content .gallery .row div:nth-child(6)").css({left:3*divW+"px",top:-$("content .gallery .row div:nth-child(5)").height()+"px"});
			$("content .gallery .row div:nth-child(7)").css({left:-divW+"px",top:-($("content .gallery .row div:nth-child(5)").height()-$("content .gallery .row div:nth-child(4)").height())+"px"});
			$("content .gallery .row div:nth-child(8)").css({top:-($("content .gallery .row div:nth-child(5)").height()-$("content .gallery .row div:nth-child(4)").height())+"px"})
		}else{
			$("content .gallery .row div").css({left:"auto",top:"auto"});
		}
		var arr=$("content .gallery .row").children("div");
		var target="img";
		var inrPadding=10;
		var top=0;
		var siz="";
		hoverCustom(arr,target,inrPadding,top,siz);
		page3ScrollEft();
		//console.log("arr is :"+arr.length);
		//hoverCustom();
	}
}



/**********page 3 scroll effect*************/
function page3ScrollEft(){
	scrollEft();
	setInterval(scroll,500);
	function scroll(){
			window.addEventListener('scroll',debounce(scrollEft,500));

	};

	function scrollEft(){
			var windowH = $(window).height();
			var contentH= $("#header").height();
			var page2H= $(".page2").height();
			var page3H = $(".page3").height();
			var scrollH= $(window).scrollTop();
			if(windowH+scrollH>contentH+page2H){
				$("content .gallery .row div").children("img").addClass("common");
				setRandomSpeed(6,8);  /*****select 4 random images from 8 images********/
				setTimeout(function(){
					$("content .gallery .row div").children("img").removeClass("fast").removeClass("common");
				},4000);			
			};
	};	

	function setRandomSpeed(num,arrNum){
		for(var i=0;i<num;i++){
			var randomNum=Math.floor(Math.random()*arrNum);
			$("content .gallery .row div:nth-child("+randomNum+")").children("img").addClass("fast");
		};
	};

}

/*********debounce problem solution*************/
function debounce(func,wait){
	var timeout;
	return function(){
		clearTimeout(timeout);
		timeout=setTimeout(func,wait);
	}
};

/**********hover function***********/
function hoverCustom(arr,target,inrPadding,top,siz,hvCont,hvBgCls){  /*hvCont*/
	if(!siz){
		var clear=1;
	}
	$.each(arr,function(index,value){
		$(value).hover(function(){
			var pos="left:"+($(this).find(target).position().left+inrPadding)+"px;top:"+top+"px";
			$(value).css({position:"relative"});
			if((!siz)||(clear)){
				//console.log($(this).children("img"));
				siz="width:"+($(this).find("img").width()-2*inrPadding)+"px;height:"+($(this).find("img").height()-4*inrPadding)+"px;";
			/*	console.log(siz);*/
			}
			var sty=siz+";display:block;position:absolute;"+pos;
			var inrSty="position:relative;"+siz+"vertical-align:middle;display:block;margin:auto;top:20px;background-color:rgba(0,0,0,0.8);"+"border-width:2px;"+"border-style:solid;"+"border-color:#0e7200;"+"box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;";
			var iSty="position:absolute!important;color:#008000;font-size:2.3em;";
			if(!hvCont){
				if(hvBgCls){

				}else{
					$(this).append("<div class='hover' style="+sty+"><div class='inr' style="+inrSty+"><i class='fa fa-search' aria-hidden='true' style="+iSty+"></i></div></div>"); 
				};
				$(this).find("i").css({left:($(this).find('.inr').width()-$(this).find("i").width())/2+"px",top:($(this).find('.inr').height()-$(this).find("i").height())/2+"px",opacity:0});
			    $(this).find("i").animate({opacity:1},100)
			    	.animate({fontSize:'+=1em'},200)
			    	.animate({fontSize:'-=1em'},200)
			    	.animate({fontSize:'+=1em'},200)
			    	.animate({fontSize:'-=1em'},200);
			    
			}else{
				if(hvBgCls){
					$(this).append("<div class="+hvBgCls+"><div class='hover' style="+sty+"><div class='inr' style="+inrSty+">"+hvCont+"</div></div></div>");
				}else{
					$(this).append("<div class='hover' style="+sty+"><div class='inr' style="+inrSty+">"+hvCont+"</div></div>"); 
				};
			};
			$(this).children("div").animate({opacity:1,filter:'alpha(opacity=100)'},'slow');
			$(this).find(".hover").animate({opacity:1,filter:'alpha(opacity=100)'},'slow');
			$(this).click(function(){
				var val=$(this).find("a.imgLink").attr("href");
				location.href=val;
			});

		},function(){
			$(this).children(".hover").remove();
			$(this).children(".hvBgCls").remove();
			if(!siz){
				clear=1;
			}
		});
	});
}
/*** page 5************/
function page5(){
	var arr=$("content .page5 .page5-content.dflt .row").children("div");
    var inrPadding=10;
    var siz="";
    var txtP=parseInt($("content .page5 .txt-cnt>p:eq(1)").css("paddingBottom"));
    var top="-"+(inrPadding-txtP/2);
    var left=15;
    hoverShowPrice(arr,inrPadding,left,top,siz);
    $("footer input.inputEmail").css({width:'+=20px'});
}

/**********About Us***********/
function aupg_header(){
	changeLogoPoz();
	$(window).bind('resize',changeLogoPoz);

	function changeLogoPoz(){
	/*	console.log("hrere"); */
		var ulHt=$("#header nav.navbar ul:first").height();/*ul height*/
		if(ulHt<60){
			$("#header>div.nav a.navbar-brand").addClass("logoBigSz");
		}else{
			$("#header>div.nav a.navbar-brand").removeClass("logoBigSz");	
		} 
	/*	console.log("ul hight:"+$("#header nav.navbar ul:first").height()); */
	}
}

function aupg_content(){
	gallery();
	our_award();

	function our_award(){
		var liHover=$("#abUs content .page5 .row.readMore").children(".col-md-3");
		var inrPadding=10;
		var siz="width:"+(liHover.width()-2*inrPadding)+"px;height:"+(liHover.height()-4*inrPadding)+"px;";
		var target="img";
		var top="-"+inrPadding;
		var hvCont="<div style="+siz+" class='hvCont wrap'><button class='btn btn-success text-center bold'>read more</button></div>";
		var hvBgCls="hvBgCls";
		hoverCustom(liHover,target,inrPadding,top,siz,hvCont,hvBgCls);
	}


	function gallery(){
		var liHover=$("#abUs content .page3 .threeCol .row").children(".col-md-4");
		var inrPadding=10;
		var siz="";
		var target="img";
		var top=2*inrPadding;
	    hoverCustom(liHover,target,inrPadding,top,siz);

	}
}

function gallery_content(){
		var liHover=$("content .page3 .row.imgGallery").children(".col-md-4");
		var inrPadding=10;
		var siz="";
		var target="img";
		var top=0;
	    hoverCustom(liHover,target,inrPadding,top,siz);	
}

function blog_content(){
		var liHover=$("#blog content .page3 .row.imgGallery").children(".col-md-6");
	/*	console.log(liHover); */
		var inrPadding=10;
		var siz="";
		var target="img";
		var top=0;
	    hoverCustom(liHover,target,inrPadding,top,siz);	
	    $("#blog content .carousel-title.panel.panel-default").css({marginLeft: ""+inrPadding+"px",marginRight: ""+inrPadding+"px"});
}

