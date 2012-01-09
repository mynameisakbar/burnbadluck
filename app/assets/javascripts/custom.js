// this is for COLORBOX
$(function(){
    $('.normal-pop').colorbox(
        {
            height: "500px",
            href: "/about"
        });
    
    $('#test').colorbox(
        {
            inline:true, 
            href:"#thx-link", 
            width:"550px", 
            height:"500px",
            onOpen:function()
            {
                $('#thx-link').css({"display":"block"}); 
            },
            onClosed:function()
            {
                $('#thx-link').css({"display":"none"});
            }
    });
});

// this is for COUNTDOWN TIMER
$(function(){
    $('#counter').countdown({
        format: 'hh:mm',
        image: '../assets/countdown_images/digits.png',
        startTime: '24:00'
    });
});

// this is for FACEBOOK
(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=147032012045827";
  			fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// this is for TWITTER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        
