$(function(){
    var pathname = window.location.pathname;
    var colorbox = jQuery.colorbox;
    
    // this is for COLORBOX
    $('#about-link').colorbox(
    {
        height: "450px",
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
        
    $('#new_submission').validate();
        
    $('#sbmt').live("click", function(){
        //alert("test");
        $('#new_submission').submit();
    });
        
    $('#clr').click(function() {
        //alert("test");
        $('#new_submission')[0].reset();
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
        until: $.countdown.UTCDate(+8, 2012, 1 - 1, 21, 21)});
    
    // this is for validation 
    //$("#new_submission").validate();
        
    // this is for CAPTCHA colorbox
    var content = $("#submission_content").val();
    var resp = $("#notice").text();
    if (resp == "ERROR") {
        alert("You have not entered your CAPTCHA or your input is wrong. Please submit your bad luck again.");
    }
    
    if (resp != "" && resp != "ERROR") {
        //alert(resp.length);
        //alert(resp);
        $.colorbox(
        {
            inline:true, 
            href:"#thx-link", 
            width:"500px", 
            height:"450px",
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
            caption: 'www.burnbadluck.com',
            description: 'It is my destiny to inform you how your luck can change for the better in the Dragon Year.I have submitted my bad luck to be incinerated, for free, by a group of powerful entities called The Bad Luck Burning Team. With bad luck gone, good luck will come. Check out the site to see how much bad luck is waiting to be incinerated. '
        });
    });
    
    $('.share_button_').click(function(e){
        var id = $('#hidden-id').text();
        //alert(id);
        e.preventDefault();
        FB.ui(
        {
            method: 'feed',
            name: 'Burn Your Bad Luck Now!',
            link: ' http://burnbadluck.com/submissions/' + id,
            picture: 'https://lh3.googleusercontent.com/-eZ9ZbcEVw7w/TxC0zy-vDiI/AAAAAAAAANo/Gm5TW_RW6f4/s800/fbavatar.jpg',
            caption: 'www.burnbadluck.com/submissions/' + id,
            description: 'It is my destiny to inform you how your luck can change for the better in the Dragon Year. I have submitted my bad luck to be incinerated, for free, by a group of powerful entities called The Bad Luck Burning Team. With bad luck gone, good luck will come. Check out the site to see how much bad luck is waiting to be incinerated.'
        });
    });
});