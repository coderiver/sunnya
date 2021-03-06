$(document).ready(function () {
  // function element exists
  jQuery.fn.exists = function() {
    return $(this).length;
  }
  // scrollable
  if ($('.building__gallery-wrap').exists()){
    $('.building__gallery-wrap .caro').scrollable({
      next:'.slide__arrow-next',
      prev:'.slide__arrow-prev ',
      items: '.slides li',
      circular: true
    });
  };

  $(".building__gallery-wrap .building__media").click(function() {
    var src = $(".slides").find(".active a").attr("href");
    $(".building__media img").attr("src", src);

    $(".slides").find(".active").removeClass("active").next().addClass("active");


    // if ($(this).parent().find(".slides li").next().length()){

    // }
    // else{

    // }

// $(this).parent().next().length()


    return false;
  });

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
          minDate: 0,
          numberOfMonths: [3, 2],
          showButtonPanel: true,
          beforeShowDay: function (date) {
              debugger
              if (date >= date1 && date <= date2) {
                if (date <= date1 && date >=date1) {return [true, 'ui-firstdate', ''];}
                if (date <= date2 && date >=date2) {return [true, 'ui-lasttdate', ''];}
                return [true, 'ui-state-unavailable', ''];
              }
              
              if (date >= date9 && date <= date10) {
                if (date <= date9 && date >=date9) {return [true, 'ui-firstdate', ''];}
                if (date <= date10 && date >=date10) {return [true, 'ui-lasttdate', ''];}
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date11 && date <= date12) {
                if (date <= date11 && date >=date11) {return [true, 'ui-firstdate', ''];}
                if (date <= date12 && date >=date12) {return [true, 'ui-lasttdate', ''];}
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date13 && date <= date14) {
                if (date <= date13 && date >=date13) {return [true, 'ui-firstdate', ''];}
                if (date <= date14 && date >=date14) {return [true, 'ui-lasttdate', ''];}
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
    // js-more
    $(".js-more").click(function () {
      $(this).parents(".description").find(".description__hide").show();
      return false;
    });

    $(function() {
      $('.date1').on('click',function(){
        $('.dp1-wrap').fadeIn();
        $('.dp1').fadeIn();
      })
      $( ".dp1" ).datepicker({
        defaultDate: "+1w",
        numberOfMonths: 2,
        onSelect: function( selectedDate ) {
          $( ".date1 input" ).val( selectedDate );
          $('.dp1-wrap').fadeOut();
          $('.dp1').fadeOut();
        }
      });
      $('.date2').on('click',function(){
        $('.dp2-wrap').fadeIn();
        $('.dp2').fadeIn();
      })
      $( ".dp2" ).datepicker({
        defaultDate: "+2w",
        numberOfMonths: 2,
        onSelect: function( selectedDate ) {
         $( ".date2 input" ).val( selectedDate );
         $('.dp2-wrap').fadeOut();
         $('.dp2').fadeOut();
        }
      });

      $('.date3').on('click',function(){
        $('.dp3-wrap').fadeIn();
        $('.dp3').fadeIn();
        $('.dp-overlay').addClass("is-open");
      })
      $( ".dp3" ).datepicker({
        defaultDate: "+2w",
        numberOfMonths: 2,
        onSelect: function( selectedDate ) {
         $( ".date3 input" ).val( selectedDate );
         $('.dp3-wrap').fadeOut();
         $('.dp3').fadeOut();
          $('.dp-overlay').removeClass("is-open");
          $( ".dp4" ).datepicker( "option", "minDate", selectedDate );
        }
      });
      //$( ".dp3" ).datepicker({minDate: "17-06-2014"});

      $('.dp-overlay').on('click',function(){

        $('.dp3-wrap').fadeOut();
        $('.dp3').fadeOut();

        $('.dp4-wrap').fadeOut();
        $('.dp4').fadeOut();
      })


      $('.date4').on('click',function(){
        $('.dp4-wrap').fadeIn();
        $('.dp4').fadeIn();
        $('.dp-overlay').addClass("is-open");
      })
      $( ".dp4" ).datepicker({
        defaultDate: "+2w",
        numberOfMonths: 2,
        onSelect: function( selectedDate ) {
         $( ".date4 input" ).val( selectedDate );
         $('.dp4-wrap').fadeOut();
         $('.dp4').fadeOut();
         $('.dp-overlay').removeClass("is-open");
         $( ".dp3" ).datepicker( "option", "maxDate", selectedDate );
        }
      });
    });
  //
  $('.js-calendar-active input').focus(function(event) {
    $(this).parent().addClass("is-active");
  });
  $('.js-calendar-active input').blur(function(event) {
    $(this).parent().removeClass("is-active");
  });
  //
  $(".calendar-i").click(function () {
    // $(this).parents().find(".dp").hide();
    // $(this).parents().find(".dp-wrap").hide();
    // return false;
  });

//   $(document).on('click', function (e) {
//     console.log('click');
//     if($('.dp:visible').length> 0){
//       //console.log('popup is visible now');
//           //$('.dp3-wrap,.dp4-wrap,.dp3,.dp4').fadeOut();
//          //$('.dp3').fadeOut();
//           if ($(e.target).closest(".form-control").length === 0) {
//             $('.dp3-wrap,.dp4-wrap,.dp3,.dp4').fadeOut();
//             console.log('hideme');
//          }
//     }
   
// });

  

});