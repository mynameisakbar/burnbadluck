$(function(){
    // this is for COLORBOX
    $('.normal-pop').colorbox(
    {
        height: "315px",
        width: "500px",
        href: "/about"
    });
    
    // this is for SLIDE CLICK
    $('#toggle').click(function() {
        if ($("form").is(":hidden")) {        
            $("form").slideDown("slow");
        }  else {
            $("form").slideUp("slow");
        }
    });
    
    // this is for COUNTDOWN TIMER
    $('#counter').countdown({
        format: 'hh:mm',
        image: '../assets/countdown_images/digits.png',
        startTime: '24:00'
    });
    
    // this is for validation 
    //$("#new_submission").validate();
        
    // this is for THANKYOU colorbox
    $('input:last').click(function() {
        //alert("test");
        event.preventDefault();
        
        if ($("form").valid() == false) {        
            //alert("ngekngok");
            return false;
        }  else {
            $.colorbox(
            {
                inline:true, 
                href:"#thx-link", 
                width:"550px", 
                height:"300px",
                onOpen:function()
                {
                    $('#thx-link').css({"display":"block"}); 
                },
                onClosed:function()
                {
                    $('#thx-link').css({"display":"none"});
                    $("form").submit();
                }
            });
        }
    });
});

// this is for FACEBOOK LIKE
(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=147032012045827";
  			fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// this is for TWITTER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// this is for GANALYTICS
var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-28207206-1']);
  	_gaq.push(['_trackPageview']);
 
(function() {
    	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// this is for FB SHARE
$(function(){
    $('#share_button').click(function(e){
        e.preventDefault();
        FB.ui(
        {
            method: 'feed',
            name: 'This is the content of the "name" field.',
            link: ' http://burnbadluck.com/',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: ''
        });
    });
});
        
