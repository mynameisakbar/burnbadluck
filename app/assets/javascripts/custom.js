$(function(){
    var pathname = window.location.pathname;
    var colorbox = jQuery.colorbox;

    
    // this is for COLORBOX
    $('.normal-pop').colorbox(
    {
        height: "300px",
        width: "500px",
        href: "/about"
    });
    
    $('#caption').live("click", function(){
        colorbox.close();
        if ($("form").is(":hidden")) {
            $('#toggle_open').hide();
            $('#toggle_close').show();
            $('#toggle_close').css({"display":"block"});                        
            $("form").slideDown("slow");
        }
    });
    
    //
    //alert(pathname);
        
    /*$(window).bind("beforeunload", function() { 
        if(pathname == "/admin") {
            return "You're about to close the admin page. You have to re-signin to perform administration tasks"; 
        } 
    });*/

    
    // this is for SLIDE CLICK
    $('#toggle_open').click(function() {
        if ($("form").is(":hidden")) {
            $('#toggle_open').hide();
            $('#toggle_close').show();
            $('#toggle_close').css({"display":"block"});                        
            $("form").slideDown("slow");
        }
    });
    
    $('#toggle_close').click(function() {
        if ($("form").not(":hidden")) {
            $('#toggle_close').hide();
            $('#toggle_open').show();
            $("form").slideUp("slow");
        }
    });
    
    
    
    /* this is for COUNTDOWN TIMER*/
    $('#cny_countdown').countdown({
        until: $.countdown.UTCDate(+7, 2012, 1 - 1, 21)});
    
    // this is for validation 
    //$("#new_submission").validate();
        
    // this is for CAPTCHA colorbox
    var content = $("#submission_content").val();
    var resp = $("#notice").text();
    if (resp == "ERROR") {
        alert("You have not entered your CAPTCHA or your input is wrong, please do so to proceed");
    }
    
    $("form").validate();
        
    if (resp != "" && resp != "ERROR") {
        //alert(resp.length);
        //alert(resp);
        $.colorbox(
        {
            inline:true, 
            href:"#thx-link", 
            width:"500px", 
            height:"365px",
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
            name: 'Burn Your Bad Luck Now!',
            link: ' http://burnbadluck.com/',
            picture: 'https://lh3.googleusercontent.com/-eZ9ZbcEVw7w/TxC0zy-vDiI/AAAAAAAAANo/Gm5TW_RW6f4/s800/fbavatar.jpg',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: 'test'
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
            picture: 'https://lh3.googleusercontent.com/-eZ9ZbcEVw7w/TxC0zy-vDiI/AAAAAAAAANo/Gm5TW_RW6f4/s800/fbavatar.jpg',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: "Burn baby burn! www.burnbadluck.com/submissions/" + id
        });
    });
});