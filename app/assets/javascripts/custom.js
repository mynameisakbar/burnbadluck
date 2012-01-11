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
    
    $('#dragonL').click(function() {
        if ($(".adm").is(":hidden")) {        
            $(".adm").show();
        }  else {
            $(".adm").hide();
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
        
    // this is for THANKYOU colorbox
    $('#submit_button').click(function(event) {
        //alert($("form").valid());
        //alert($("#submission_content").val());
        var content = $("#submission_content").val();
        event.preventDefault();
        
        if ($("form").valid() == false) {
            //alert($("form").valid());
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
                    $('#thx-content').text(content);
                    $('#thx-link').css({"display":"block"}); 
                },
                onClosed:function()
                {
                    $('#thx-link').css({"display":"none"});
                    $("form").submit();
                }
            });
        }
        
        
        /*if ($("form").valid() == false) {        
            alert("ngekngok");
            $("#new_submission").validate();
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
        }*/
    });
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
    var id = $("#share_button_").attr("alt");

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
    
    $('#share_button_').click(function(e){
        alert(id);
        e.preventDefault();
        FB.ui(
        {
            method: 'feed',
            name: 'Burn Your Bad Luck NAO!',
            link: ' http://burnbadluck.com/',
            picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: "Burn baby burn! www.burnbadluck.com/submissions/"
        });
    });
});