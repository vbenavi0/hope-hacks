console.log('Client side JS file is loaded!')
let url = window.location.href
console.log(url)

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

const topicForm = document.querySelector('#topicSearchForm')
const categoryForm = document.querySelector('#categorySearchForm')
const keyLang = document.querySelector("#keyLang")
const topicInput = document.querySelector('#icon_prefix')
const m1 = document.querySelector('#message1')
const m2 = document.querySelector('#message2')
const list = document.querySelector('#resultList')
const catLang = document.querySelector("#catLang")
const catDrop = document.querySelector('#categories')
const imports = new Event("imports");

topicForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log('topic form submitted')

    m1.textContent = ('loading') //display loading text
    m2.textContent = ('') //reset display
    list.innerHTML = ('') //reset list

    const keyWord = topicInput.value
    const lang = 'en'
    console.log('http://localhost:3000/keyWordSearch?lang='+lang+'&keyWord='+keyWord)
    fetch('http://localhost:3000/keyWordSearch?lang='+lang+'&keyWord='+keyWord).then((response)=>{
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

if(url.includes('/search')){
  console.log('category import')
  fetch('http://localhost:3000/catList?lang=en').then((response)=>{
      response.json()
    .then((data)=>{
      console.log(data)
        if(data.error){ //if server error, display proper error
            return console.log(data.error)
        } 
        else{
            data.list.forEach(category => {
                let item = document.createElement('option') 

                item.value = category.Id
                item.textContent = category.Title

                catDrop.append(item)
                document.dispatchEvent(imports)
          });
          console.log('Categories Imported')
        }
      })
    })
}

document.addEventListener('imports', function() {
  var drops = document.querySelectorAll('select');
    var instances = M.FormSelect.init(drops, {
  });
});


categoryForm.addEventListener('submit', (e)=>{
  e.preventDefault()

  console.log('category form submitted')

  const cat = catDrop.value
  const lang = 'en'

  console.log(lang)
  console.log(cat)

  m1.textContent = ('loading') //display loading text
  m2.textContent = ('') //reset display
  list.innerHTML = ('') //reset list

  console.log('http://localhost:3000/catSearch?lang='+lang+'&categoryId='+cat)
    fetch('http://localhost:3000/catSearch?lang='+lang+'&categoryId='+cat).then((response)=>{
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