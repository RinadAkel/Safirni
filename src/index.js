import '../src/scss/_variables.scss';
import '../src/scss/Main.scss';
import '../src/scss/Egypt.scss';
import '../src/scss/Turkey.scss';
import '../src/scss/EgyptTurkeyCommon.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../src/css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import  '../src/images/Egypt/Egypt.mp4';
import  '../src/images/Turkey/Turkey.mp4';
$(function() {
    $("#yourModal").modal("hide"); 
    /* التأكد ان كانت كلمة الر مطابقة */
    function checkPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("غير متطابق!");
        else
            $("#CheckPasswordMatch").html("متطابق!");
    }
    $(document).ready(function () {
       $("#txtConfirmPassword").keyup(checkPasswordMatch);
    });
    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    });
    $("#toggler").click(function() {
        $('#wrap').toggleClass('toggled');
    });
   
   
});

      

