console.log('Client side JS file is loaded!')

// const footerContainer = document.getElementById("footerContainer");
// fetch("footer.html")
//   .then(response => response.text())
//   .then(html => { 
//     footerContainer.innerHTML = html
//   })
//   .catch(error => {
//     console.error("error", error)
//   })
  
document.addEventListener('DOMContentLoaded', function() {
  var drop = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(drop, {
    autoTrigger: true,
    closeOnClick: true,
    hover: true
  });
});

//   const newletterSubmit = document.getElementById("newsletterForm")
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("We are here")
//   }
//   console.log(newletterSubmit) 
//   newletterSubmit.addEventListener("submit", handleSubmit)
// });

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

const topicForm = document.querySelector('#topicSearchForm')
const categoryForm = document.querySelector('#categorySearchForm')
const topicInput = document.querySelector('#icon_prefix')
const m1 = document.querySelector('#message1')
const m2 = document.querySelector('#message2')
const list = document.querySelector('#resultList')

topicForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log('topic form submitted')

    m1.textContent = ('loading') //display loading text
    m2.textContent = ('') //reset display
    list.innerHTML = ('') //reset movie list

    const keyWord = topicInput.value
    console.log('http://localhost:3000/keyWordSearch?lang=en&keyWord='+keyWord)
    fetch('http://localhost:3000/keyWordSearch?lang=en&keyWord='+keyWord).then((response)=>{
      response.json()
    .then((data)=>{
      console.log(data)
        if(data.error){ //if server error, display proper error
            m1.textContent = (data.error)
        } 
        else{
            m1.textContent = ('Results:') 
            data.list.forEach(topic => {
                let item = document.createElement('div') 
                let title = document.createElement('h3')
                let categories = document.createElement('p')
                let url = document.createElement('a')

                title.textContent = topic.Title
                item.append(title) 

                categories.textContent = topic.Categories
                item.append(categories)

                url.textContent = topic.AccessibleVersion
                url.href = topic.AccessibleVersion
                item.append(url)

                list.append(item) 
            });
        }
      })
  })
})