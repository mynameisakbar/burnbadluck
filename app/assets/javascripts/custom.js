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
    
    
    
    /* this is for COUNTDOWN TIMER
    $('#counter').countdown({
        format: 'hh:mm',
        image: '../assets/countdown_images/digits.png',
        startTime: '24:00'
    });*/
    
    // this is for validation 
    //$("#new_submission").validate();
        
    // this is for CAPTCHA colorbox
    var content = $("#submission_content").val();
    var resp = $("#notice").text();
    if (resp == "ERROR") {
        alert("You have not entered your CAPTCHA, please do so to proceed");
    }
    
    $("form").validate();
        
    if (resp.length != 0) {
        alert(resp.length);
        $.colorbox(
        {
            inline:true, 
            href:"#thx-link", 
            width:"550px", 
            height:"300px",
            onOpen:function()
            {
                $('#thx-content').text(resp);
                $('#thx-link').css({"display":"block"}); 
            },
            onClosed:function()
            {
                $('#thx-link').css({"display":"none"});
            }
        });
    } 
    
    /*$('#submit_button').click(function(event) {
        //alert($("form").valid());
        //alert($("#submission_content").val());
        var content = $("#submission_content").val();
        event.preventDefault();
        
        if ($("form").valid() == false) {
            //alert($("form").valid());
            return false;
        }  else {
        }
    });*/
});



/* this is for FACEBOOK LIKE
(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=147032012045827";
  			fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/

// this is for TWITTER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// this is for FB SHARE
$(function(){
    $('.share_button').click(function(e){
        e.preventDefault();
        FB.ui(
        {
            method: 'feed',
            name: 'Burn Your Bad Luck NAO!',
            link: ' http://burnbadluck.com/',
            picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: 'Burn your bad luck with us NAO! #burnbadluck'
        });
    });
    
    $('.share_button_').click(function(e){
        var id = $(this).attr("alt");
        e.preventDefault();
        FB.ui(
        {
            method: 'feed',
            name: 'Burn Your Bad Luck NAO!',
            link: ' http://burnbadluck.com/',
            picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: "Burn baby burn! www.burnbadluck.com/submissions/" + id
        });
    });
});