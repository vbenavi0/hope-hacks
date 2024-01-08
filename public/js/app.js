console.log('Client side JS file is loaded!')
let url = window.location.href
console.log(url)

const newsletterForm = document.getElementById("newsletterForm")
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', 
function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email")
    const email = emailInput.value
    const formData = new URLSearchParams() ///creating a new class 
    formData.append("email", email)
    const emailData = {
      email: email
    }
    console.log(email)
    fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        console.log("inserted in the database")
      } else {
        console.log("Error inserted in the database: ", response.statusText)
      }
    })
    .catch(error => {
      console.log(error)
    })
    emailInput.value = ""
    // console.log(email)
});

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
const topicInput = document.querySelector('#icon_prefix')
const m1 = document.querySelector('#message1')
const m2 = document.querySelector('#message2')
const list = document.querySelector('#resultList')
const catDrop = document.querySelector('#categories')
const imports = new Event("imports");
var lang = 'en'
var enCats = []
var esCats = []

function importCats(){
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
              // console.log(category)
              enCats.push(category)
          });
          changeCats()
        }
      })
    }).then(()=>{console.log('En Categories Imported')
    console.log(enCats)})

    fetch('http://localhost:3000/catList?lang=es').then((response)=>{
      response.json()
    .then((data)=>{
      console.log(data)
        if(data.error){ //if server error, display proper error
            return console.log(data.error)
        } 
        else{
            data.list.forEach(category => {
              esCats.push(category)
          });
          changeCats()
        }
      })
    }).then(()=>{console.log('Es Categories Imported')
    console.log(esCats)
    })
}

function changeCats(){
  console.log('category change')
  if(lang == 'es'){
    catDrop.innerHTML = '<opon value="" disabled selected data-translate="Choose Category">Elegir Categoria</option>'
    esCats.forEach(category => {
      let item = document.createElement('option') 

      item.value = category.Id
      item.textContent = category.Title
      item.id = 'esCat'+category.Id

      catDrop.append(item)
    })
  }
  else{
    catDrop.innerHTML = '<option value="" disabled selected data-translate="Choose Category">Choose Category</option>'
    console.log(enCats)
    enCats.forEach(category => {
      let item = document.createElement('option') 

      item.value = category.Id
      item.textContent = category.Title
      item.id = 'enCat'+category.Id

      catDrop.append(item)
    })
  }
  document.dispatchEvent(imports)
}

function changeLanguage(language){
  if(language==='English'){
    lang = 'en'
  }
  else if(language==='Español'){
    lang = 'es'
  }
  list.innerHTML = ""
  m1.innerHTML = ""
  m2.innerHTML = ""
  changeCats()
}

if(url.includes('/search')){
  importCats()

  document.addEventListener('imports', function() {
    var drops = document.querySelectorAll('select');
      var instances = M.FormSelect.init(drops, {
    });
  });

  topicForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log('keyword form submitted')
    m2.textContent = ('') //reset display
    list.innerHTML = ('') //reset list
    const keyWord = topicInput.value
    if(lang == 'es' && keyWord == ''){
      return m1.textContent = ('Por favor proporcione una palabra clave')
    }
    else if(keyWord == ''){
      return m1.textContent = ('Please provide a keyword')
    }

    if(lang == 'es'){
      m1.textContent = (`Buscando por palabra clave "${keyWord}"...`) //display loading text in spanish
    }
    else{
      m1.textContent = (`Searching by keyword "${keyWord}"...`) //display loading text in english
    }

    console.log('http://localhost:3000/keyWordSearch?lang='+lang+'&keyWord='+keyWord)
    fetch('http://localhost:3000/keyWordSearch?lang='+lang+'&keyWord='+keyWord).then((response)=>{
      response.json()
    .then((data)=>{
      console.log(data)
        if(data.error){ //if server error, display proper error
            m1.textContent = (data.error)
        } 
        else{
          let counter = 0
          if(lang == 'es'){
            m1.textContent = (`Resultados para "${keyWord}":`)
          }
          else{
            m1.textContent = (`Results for "${keyWord}":`) 
          }
            data.list.forEach(topic => {
                let item = document.createElement('div') 
                let title = document.createElement('h4')
                let categories = document.createElement('p')
                let url = document.createElement('a')
                let img = document.createElement('img')

                title.textContent = topic.Title
                item.append(title) 

                img.src = topic.ImageUrl
                item.append(img)

                categories.textContent = topic.Categories
                item.append(categories)

                if(lang == 'es'){
                  url.textContent = "Abrir en una nueva página"
                }
                else{
                  url.textContent = "Click to open in New Tab"
                }
                url.href = topic.AccessibleVersion
                url.target = "_blank"
                item.append(url)

                counter+=1
                item.id = 'result'+counter
                item.classList.add('result')
                list.append(item) 
            });
          }
        })
    })
  })

  categoryForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var catWord ='';
    console.log('category form submitted')
    m2.textContent = ('') //reset display
    list.innerHTML = ('') //reset list
  
    const cat = catDrop.value
    if(lang == 'es'){
      try{catWord = document.getElementById('esCat'+catDrop.value).innerText}
      catch{return m1.textContent = ('Porfavor elegir una categoría') }
    }
    else{
      try{catWord = document.getElementById('enCat'+catDrop.value).innerText}
      catch{return m1.textContent = ('Please select a category')}
    }
    // try{
    //   if(lang == 'es'){
    //     const catWord = document.getElementById('esCat'+catDrop.value).innerText
    //   }
    //   else{
    //     const catWord = document.getElementById('enCat'+catDrop.value).innerText
    //   }
    // }
    // catch{
    //   if(lang == 'es'){
    //     return m1.textContent = ('Porfavor elegir una categoría') 
    //   }
    //   else{
    //     return m1.textContent = ('Please select a category') 
    //   }
    // }
  
    if(lang == 'es'){
      m1.textContent = (`Buscando por categoría "${catWord}"...`) //display loading text in spanish
    }
    else{
      m1.textContent = (`Searching by category "${catWord}"...`) //display loading text in english
    }
  
    console.log('http://localhost:3000/catSearch?lang='+lang+'&categoryId='+cat)
      fetch('http://localhost:3000/catSearch?lang='+lang+'&categoryId='+cat).then((response)=>{
        response.json()
      .then((data)=>{
        console.log(data)
          if(data.error){ //if server error, display proper error
              m1.textContent = (data.error)
          } 
          else{
              let counter = 0
              if(lang == 'es'){
                m1.textContent = (`Resultados para "${catWord}":`)
              }
              else{
                m1.textContent = (`Results for "${catWord}":`) 
              }
              data.list.forEach(topic => {
                  let item = document.createElement('div') 
                  let title = document.createElement('h4')
                  let categories = document.createElement('p')
                  let url = document.createElement('a')
                  let img = document.createElement('img')
  
                  title.textContent = topic.Title
                  item.append(title) 
  
                  img.src = topic.ImageUrl
                  item.append(img)
  
                  categories.textContent = topic.Categories
                  item.append(categories)
  
                  if(lang == 'es'){
                    url.textContent = "Abrir en una nueva página"
                  }
                  else{
                    url.textContent = "Click to open in New Tab"
                  }
                  url.href = topic.AccessibleVersion
                  url.target = "_blank"
                  item.append(url)
  
                  counter+=1
                  item.id = 'result'+counter
                  item.classList.add('result')
                  list.append(item) 
              });
          }
        })
      })
  })
}