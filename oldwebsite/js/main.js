// JavaScript Document

function pageload()
{
	
$("#logo").fadeIn(1000);	

lock();


$("#scroller").simplyScroll({
						orientation : 'vertical',
						frameRate : 20,
						speed : 1,
						pauseOnHover : false
					});
					
					
					
}

function lock()
{
//setTimeout('$("#top-tab").animate({top : "-77%"},1000);',5000);	
setTimeout('document.getElementById("hotspot").style.display="inline"; ',1000);		
}

function right_in()
{

$("#sponsors").animate({right : "20px"},{duration:600, queue:false});	 	
//
$("#top-tab").animate({top : "-77%"},{duration:600, queue:false});
$("#menu").animate({marginLeft: "-500px"},{duration:600, queue:false});
$("#bottom-tab").animate({bottom: "-500px"},{duration:600, queue:false});
$("#top-img").fadeIn(800);
}



function top_in()
{
	
	$("#top-tab").animate({top : "0px"},{duration:600, queue:false});
	$("#top-img").fadeOut(800);
	////
	$("#sponsors").animate({right : "-500px"},{duration:600, queue:false});
	$("#menu").animate({marginLeft: "-500px"},{duration:600, queue:false});
	$("#bottom-tab").animate({bottom: "-500px"},{duration:600, queue:false});
}

function bottom_in()
{	
	$("#bottom-tab").animate({bottom: "20px"},{duration:600, queue:false});
	///
	$("#sponsors").animate({right : "-500px"},{duration:600, queue:false});
	$("#menu").animate({marginLeft: "-500px"},{duration:600, queue:false});
	$("#top-tab").animate({top : "-77%"},{duration:600, queue:false});
	$("#top-img").fadeIn(800);
}


function left()
{	
	$("#menu").animate({marginLeft: "20px"},{duration:600, queue:false});
	/////
	$("#sponsors").animate({right : "-500px"},{duration:600, queue:false});
	$("#top-tab").animate({top : "-77%"},{duration:600, queue:false});
	$("#bottom-tab").animate({bottom: "-500px"},{duration:600, queue:false});
	$("#top-img").fadeIn(800);
}


function res()
{
	
$("#sponsors").animate({right : "-500px"},{duration:600, queue:false});
	$("#menu").animate({marginLeft: "-500px"},{duration:600, queue:false});
	$("#top-tab").animate({top : "-77%"},{duration:600, queue:false});
	$("#top-img").fadeIn(800);	
	$("#bottom-tab").animate({bottom: "-500px"},{duration:600, queue:false});
}


function gotoURL(url)
{
	
	window.location=url;
	
}

function bookmark()
{ if (window.sidebar) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(location.href,document.title,"");
      } else if(window.external) { // IE Favorite
        window.external.AddFavorite(location.href,document.title); }
      else if(window.opera && window.print) { // Opera Hotlist
        this.title=document.title;
        return true;
  }
}
