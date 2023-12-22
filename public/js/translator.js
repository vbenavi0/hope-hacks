document.addEventListener("DOMContentLoaded", function () {
    // Define translation object with English and Spanish text
    var translations = {
      "Home": {
        "English": "Home",
        "Español": "Inicio"
      },
      "About Us": {
        "English": "About Us",
        "Español": "Nosotros"
      },
      "Topic Search": {
        "English": "Topic Search",
        "Español": "Búscar Temas"
      },
      "Recommendations": {
        "English": "Recommendations",
        "Español": "Recomendaciones"
      },
      "Online Visit": {
        "English": "Online Visit",
        "Español": "Visitas en línea"
      },
      "Language": {
        "English": "Language",
        "Español": "Lenguaje"
      },
  
      "Health": {
        "English": "Healthcare and Smiles for all",
        "Español": "Salud y Sonrisas Para todos"
      },
  
      "Start": {
        "English": "Start Here",
        "Español": "Comineza Ya"
      },
  
       "Empowering": {
        "English": "Empowering Health, Inspiring Wellness: Your Source for Reliable Care",
        "Español": "Empoderate, Inspira Tu Bienestar: Tu Confiable Fuente de Informacion"
      },
  
      "Search resources": {
        "English": "Search resources by topic",
        "Español": "Buscar"
      },
      "Search": {
        "English": "Topic Search",
        "Español": "Busca Por Tema"
      },
  
      "Healthcare": {
        "English": "Healthcare recommendations by age and gender",
        "Español": "Recomendaciones por edad y género"
      },
      "Book": {
        "English": "Book free consultation with expert",
        "Español": "Agenda Consulta Gratuita con un Experto"
      },
  
      "Online": {
        "English": "Online Appointments",
        "Español": "Citas en Linea"
      },
  
      "Sign up for our Newsletter!": {
        "English": "Sign up for our Newsletter!",
        "Español": "¡Regístrate y Recibe Nuestro Boletín!"
      },
  
      "Helpful Links": {
        "English": "Helpful Links",
        "Español": "Enlaces"
      },
  
      "Contact Us": {
        "English": "Contact Us",
        "Español": "Contáctanos"
      },
  
      "Meet the Team": {
        "English": "Meet the Team",
        "Español": "Conoce a Nuestro Equipo"
      },
  
      "Search by Category": {
        "English": "Search by Category",
        "Español": "Buscar por Categoría"
      },
  
      "Careers": {
        "English": "Careers",
        "Español": "Carreras"
      },
  
      "More": {
        "English": "More Links",
        "Español": "Mas Enlaces"
      }
    };
  
    // Function to change language on click
    function changeLanguage(language) {
      var elements = document.querySelectorAll("[data-translate]");
      
      elements.forEach(function (element) {
        var key = element.dataset.translate;
        if (translations[key] && translations[key][language]) {
          element.innerText = translations[key][language];
        }
      });
    }
  
    // Event listener for language dropdown click
    document.getElementById("dropdown1").addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        var selectedLanguage = event.target.innerText;
        changeLanguage(selectedLanguage);
      }
    });
  });
  
  //