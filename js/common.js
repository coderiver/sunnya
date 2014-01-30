$(document).ready(function () {
	var date1 = new Date(2014, 0, 1);
	var date2 = new Date(2014, 0, 8);
	var date3 = new Date(2014, 9, 9);
	var date4 = new Date(2014, 4, 21);
    $('.datepicker').datepicker({
    	numberOfMonths: [3, 2],
        beforeShowDay: function (date) {
            debugger
            if (date >= date1 && date <= date2) {
                return [true, 'ui-state-unavailable', ''];
            }
            if (date >= date3 && date <= date4) {
              return [true, 'blabla', 'tooltipText'];
            }
            return [true, '', ''];
        }
    });

    // function element exists

});