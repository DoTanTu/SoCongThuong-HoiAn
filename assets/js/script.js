$(document).ready(function () {
    upSize();
    downSize();
    playText();
    pauseText();
    resumeText();
    printElement();
    actionContrast();
    redirectURL();
});

var content_post_title = $('#id-content-post span');
var content_post_content = $('#id-content-post p');
var content_post = $('#id-content-post');
var content_post_get = $('#id-content-post').get(0);

// ------------------------------ PAGE POST_DETAILS-------------

//print document
function printElement() {
    btn_print = $('#btn_print');
    btn_print.click(function (e) {
        e.preventDefault();
        var mywindow = window.open('', 'PRINT', 'height=600,width=400');
        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('</head><body>');
        mywindow.document.write('<h1>' + document.title  + '</h1>');
        mywindow.document.write(content_post_get.innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close();
        mywindow.focus();

        mywindow.print();
        mywindow.close();

        return true;
    })
}

function actionContrast(){
    var btn_constrast = $('#id_contrast');
    btn_constrast.click(function(e){
        e.preventDefault();
        content_post.toggleClass('active');
    })
}

function changeFontSizeUp(element, increment) {
    var currentFontSize = parseInt(element.css('font-size'));
    var newFontSize = currentFontSize + increment;
    element.css('font-size', newFontSize + 'px');
}

function changeFontSizeDown(element, increment) {
    var currentFontSize = parseInt(element.css('font-size'));
    var newFontSize = currentFontSize - increment;
    element.css('font-size', newFontSize + 'px');
}

//change font-size small -> big
function upSize(){
    var btn_up_size = $('#id_upsize');
    btn_up_size.click(function (e) {
        e.preventDefault();

        changeFontSizeUp(content_post_title, 2);
        changeFontSizeUp(content_post_content, 2);
    })
};

//change font-size big -> small
function downSize(){
    var btn_down_size = $('#id_downsize');
    btn_down_size.click(function (e) {
        e.preventDefault();

        changeFontSizeDown(content_post_title, 2);
        changeFontSizeDown(content_post_content, 2);
    })
};
    
function playText() {
    var btn_play = $('#id_btn_read');
    btn_play.click(function (e) {
        e.preventDefault();
        if (responsiveVoice.voiceSupport()) {
            responsiveVoice.setDefaultVoice("Vietnamese Female");
            responsiveVoice.speak(content_post_get.textContent || content_post_get.innerText);
        }
    });
}

function pauseText() {
    var btn_pause = $('#id_btn_pause');
    btn_pause.click(function (e) {
        e.preventDefault();
        if (responsiveVoice.voiceSupport()) {
            responsiveVoice.pause();
        }
    });
}

function resumeText() {
    var btn_resum = $('#id_btn_resum');
    btn_resum.click(function (e) {
        e.preventDefault();
        if (responsiveVoice.voiceSupport()) {
            responsiveVoice.resume();
        }
    });
}

function redirectURL() {
    var btn_redirect_face = $('#id_facebook_redirect');
    var btn_redirect_twitter = $('#id_twitter_redirect');
    var currentUrl = window.location.href;
    
    // Link for facebook
    var urlComplete = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl);
    btn_redirect_face.attr('href', urlComplete);
    
    // Link for twitter
    var urlCompleteTwitter = "https://twitter.com/intent/tweet/?text=Giới thiệu chung tỉnh Quảng Nam&amp;url=" + encodeURIComponent(currentUrl);
    btn_redirect_twitter.attr('href', urlCompleteTwitter);
}

  