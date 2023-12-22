console.log('Client side JS file is loaded!')

document.addEventListener('DOMContentLoaded', function() {
  var drop = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(drop, {
    autoTrigger: true,
    closeOnClick: true,
    hover: true
  });
});

  //date picker
  document.addEventListener('DOMContentLoaded', function() {
    var dates = document.querySelectorAll('.datepicker');
    var instance = M.Datepicker.init(dates, {
      autoClose: true,
      format: 'dddd, mmm dd yyyy',
    });
  });

  //time picker
  document.addEventListener('DOMContentLoaded', function() {
    var times = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(times);
  });