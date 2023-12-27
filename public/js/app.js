console.log('Client side JS file is loaded!')

const footerContainer = document.getElementById("footerContainer");
fetch("footer.html")
  .then(response => response.text())
  .then(html => { 
    footerContainer.innerHTML = html
  })
  .catch(error => {
    console.error("error", error)
  })
  
document.addEventListener('DOMContentLoaded', function() {
  var drop = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(drop, {
    autoTrigger: true,
    closeOnClick: true,
    hover: true
  });

  const newletterSubmit = document.getElementById("newsletter_Form")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("We are here")
  }
  console.log(newletterSubmit) 
  newletterSubmit.addEventListener("submit", handleSubmit)
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