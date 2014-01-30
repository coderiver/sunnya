$(document).ready(function () {
  var date1 = new Date(2014, 0, 1);
      var date2 = new Date(2014, 0, 8);
      var date3 = new Date(2014, 0, 14);
      var date4 = new Date(2014, 0, 29);
      $('.datepicker').datepicker({
          numberOfMonths: [3, 2],
          beforeShowDay: function (date) {
              debugger
              if (date >= date1 && date <= date2) {
                  return [true, 'ui-state-unavailable', ''];
              }
              if (date >= date3 && date <= date4) {
                  return [true, 'ui-state-special', ''];
              }
              return [true, '', ''];
          }
      });

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
});