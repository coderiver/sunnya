$(document).ready(function () {
  // function element exists
  jQuery.fn.exists = function() {
    return $(this).length;
  }
  // scrollable
  if ($('.building__gallery-wrap').exists()){
    $('.building__gallery-wrap .caro').scrollable({
      next:'.slide__arrow-next',
      prev:'.slide__arrow-prev',
      items: '.slides'
    });
  };

  $(".building__gallery-wrap .slides a").click(function() {
    $(".building__media img").attr('src', $(this).attr('href'));
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
  });
  // scroll-to
   $(".js-contact").click(function (){
    var page = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page).offset().top
    }, 500);
    return false;
   });
   $(".js-calendar").click(function (){
    var page = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page).offset().top
    }, 500);
    return false;
   });
      // datepicker
      var date1 = new Date(2014, 0, 1);
      var date2 = new Date(2014, 0, 8);
      var date3 = new Date(2014, 0, 14);
      var date4 = new Date(2014, 0, 29);
      var date5 = new Date(2014, 0, 0);
      var date6 = new Date(2014, 0, 14);
      var date7 = new Date(2014, 0, 24);
      var date8 = new Date(2014, 0, 29);
      var date9 = new Date(2014, 2, 1);
      var date10 = new Date(2014, 2, 8);
      var date11 = new Date(2014, 3, 22);
      var date12 = new Date(2014, 3, 30);
      var date13 = new Date(2014, 5, 1);
      var date14 = new Date(2014, 5, 8);
      var date15 = new Date(2014, 2, 14);
      var date16 = new Date(2014, 2, 22);
      var date17 = new Date(2014, 5, 14);
      var date18 = new Date(2014, 5, 22);
      $('.datepicker').datepicker({
          numberOfMonths: [3, 2],
          showButtonPanel: true,
          beforeShowDay: function (date) {
              debugger
              if (date >= date1 && date <= date2) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date3 && date <= date4) {
                  return [true, 'ui-state-special', ''];
              }
              if (date >= date9 && date <= date10) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date11 && date <= date12) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date13 && date <= date14) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date15 && date <= date16) {
                  return [true, 'ui-state-special', ''];
              }
              if (date >= date17 && date <= date18) {
                  return [true, 'ui-state-special', ''];
              }
              return [true, '', ''];
          }
      });

      $('.datepicker2').datepicker({
          numberOfMonths: [1, 2],
          beforeShowDay: function (date) {
              debugger
              if (date >= date5 && date <= date6) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date7 && date <= date8) {
                  return [true, 'ui-state-special', ''];
              }
              return [true, '', ''];
          }
      });

      $(function() {
          $( ".from" ).datepicker({
            defaultDate: "+1w",
            numberOfMonths: 2,
            onClose: function( selectedDate ) {
              $( ".to" ).datepicker( "option", "minDate", selectedDate );
            }

          });
          $( ".to" ).datepicker({
            defaultDate: "+1w",
            numberOfMonths: 2,
            onClose: function( selectedDate ) {
              $( ".from" ).datepicker( "option", "maxDate", selectedDate );
            }
          });
        });

    // contact-form
    $(".js-send").click(function () {
      $(this).parents("#contact-us").find(".js-owners1").hide();
      $(this).parents("#contact-us").find(".my-label").hide();
      $(this).parents("#contact-us").find(".btn_warning").hide();
      $(this).parents("#contact-us").find(".sent-email").addClass("is-active");
      return false;
    });
    $(".js-another-mail").click(function (){
      $(this).parents("#contact-us").find(".js-owners1").show();
      $(this).parents("#contact-us").find(".my-label").show();
      $(this).parents("#contact-us").find(".btn_warning").show();
      $(this).parents("#contact-us").find(".sent-email").removeClass("is-active");
      return false;
    });

});