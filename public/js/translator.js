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
      "404": {
        "English": "Page Does Not Exist",
        "Español": "La página no existe"
      },
      "disclaimer": {
        "English": "Disclaimer: Salud Y Sonrisas Wellness provides healthcare resources for informational purposes only. Please speak guidance from a medical professional regarding any medical conditions or emergencies. If you believe you are experiencing an emergency, please contact 911 or contact your doctor.",
        "Español": "Descargo de responsabilidad: Salud Y Sonrisas Wellness proporciona recursos de atención médica solo con fines informativos. Hable con la orientación de un profesional médico sobre cualquier condición médica o emergencia. Si cree que está experimentando una emergencia, comuníquese con el 911 o comuníquese con su médico."
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

      "schedule": {
        "English": "Schedule a free online appointment with one of our expert Healthcare Workers",
        "Español": "Agenda una cita en linea con uno de nuestros expertos en salud"
      },

      "First Name": {
        "English": "First Name",
        "Español": "Nombre"
      },

      "Last Name": {
        "English": "Last Name",
        "Español": "Appellido"
      },

      "Email": {
        "English": "Email",
        "Español": "Correo Electronico"
      },

      "Date": {
        "English": "Date",
        "Español": "Fecha"
      },

      "Time": {
        "English": "Time",
        "Español": "Hora"
      },

      "Submit": {
        "English": "Submit",
        "Español": "Enviar"
    },

    "Personalized": {
        "English": "Personalized Healthcare Recommendations",
        "Español": "Recomendaciones de Medicas Personalizadas "
    },
  
    "Receive": {
        "English": "Receive personalized, evidence-based recommendations for clinical preventive services. Discover the most suitable colorectal screening test tailored to your needs.",
        "Español": "Recomendaciones personalizadas, basadas en evidencia de servicios clinicos. Encuentra el tratamiento mas adecuado para ti."
    },

    "browser": {
        "English": "Your browser does not support iframes.",
        "Español": "Tu navegador no soportar iframes."
    },

    "About Salud Y Sonrisas": {
        "English": "About Salud Y Sonrisas",
        "Español": "Acerca Salud Y Sonrisas"
    },

    "At Salud y Sonrisas": {
        "English": "At Salud y Sonrisas, our mission is to revolutionize healthcare accessibility by providing free, expert online appointments, tailored resources, and personalized recommendations based on age and gender. We are committed to breaking down barriers to quality healthcare, ensuring that everyone, regardless of background, can access professional medical advice conveniently from the comfort of their homes. Through innovative technology and a dedicated team of healthcare experts, we strive to empower individuals to proactively manage their health, fostering a community where well-being knows no bounds. Salud y Sonrisas is more than an online healthcare organization; it's a catalyst for positive change, promoting smiles through accessible, personalized, and expert healthcare guidance for all.",
        "Español": "En Salud y Sonrisas, nuestra misión es revolucionar la accesibilidad a la atención médica al brindar citas en línea gratuitas y con expertos, recursos personalizados y recomendaciones personalizadas según la edad y el género. Estamos comprometidos a derribar barreras a la atención médica de calidad, garantizando que todos, independientemente de sus antecedentes, puedan acceder a asesoramiento médico profesional cómodamente desde la comodidad de sus hogares. A través de tecnología innovadora y un equipo dedicado de expertos en atención médica, nos esforzamos por capacitar a las personas para que administren su salud de manera proactiva, fomentando una comunidad donde el bienestar no conoce límites. Salud y Sonrisas es más que una organización de atención médica en línea; es un catalizador para un cambio positivo, que promueve sonrisas a través de una orientación sanitaria accesible, personalizada y experta para todos."
    },
  
    "Meet the team": {
        "English": "Meet the team",
        "Español": "Conoce a nuestro equipo"
    },

    "Ricardo": {
        "English": "Through Salud Y Sonrisas Wellness, I am honored to play a role in creating positive change and fostering wellness for all. I actively engage with the organization's mission, leveraging my dedication and enthusiasm to ensure healthcare reaches every individual.",
        "Español": "A través de Salud Y Sonrisas Wellness, me siento honrada de desempeñar un papel en la creación de cambios positivos y el fomento del bienestar para todos. Me comprometo activamente con la misión de la organización, aprovechando mi dedicación y entusiasmo para garantizar que la atención médica llegue a cada individuo."
    },

    "Ricardo Home": {
        "English": "Home Remedies",
        "Español": "Remedios Caseros"
    },

    "Ricardo Home Remedies": {
        "English": "A Venezuelan popular home remedy for an upset stomach is boil a few slices of fresh ginger, then add a handful of fresh mint leaves. Let it steep for 5-10 minutes, strain the mixture, and drink the tea slowly. Instant relief!",
        "Español": "Un remedio casero popular venezolano para el malestar estomacal es hervir unas rodajas de jengibre fresco y luego agregar un puñado de hojas de menta fresca. Déjalo reposar durante 5 a 10 minutos, cuela la mezcla y bebe el té lentamente. ¡Alivio inmediato!"
    },

    "Brenda": {
        "English": "I lead a fulfilling role at Salud Y Sonrisas Wellness, a beacon of hope in the realm of free healthcare. My decision to join this organization is rooted in a sincere dedication to making a meaningful impact on healthcare accessibility. I firmly believe that quality healthcare is a fundamental right, not a privilege. Salud Y Sonrisas Wellness provides the perfect platform for me to contribute to the well-being of underserved communities, aligning seamlessly with my mission to bridge gaps in healthcare.",
        "Español": "Lidero un papel satisfactorio en Salud Y Sonrisas Wellness, un faro de esperanza en el ámbito de la atención médica gratuita. Mi decisión de unirme a esta organización se basa en una dedicación sincera a generar un impacto significativo en la accesibilidad a la atención médica. Creo firmemente que la atención sanitaria de calidad es un derecho fundamental, no un privilegio. Salud Y Sonrisas Wellness me brinda la plataforma perfecta para contribuir al bienestar de las comunidades marginadas, alineándose perfectamente con mi misión de cerrar las brechas en la atención médica."
    },

    "Brenda Home": {
        "English": "Home Remedies",
        "Español": "Remedios Caseros"
    },

    "Brenda Home Remedies": {
        "English": "In Mexican households, a common remedy for a sore throat is to mix the juice of half a lime with a tablespoon of honey in a warm glass of water. Stir well and drink slowly!",
        "Español": "En los hogares mexicanos, un remedio común para el dolor de garganta es mezclar el jugo de media lima con una cucharada de miel en un vaso de agua tibia. ¡Revuelve bien y bebe lentamente!"
    },

    "Victor": {
        "English": "My professional journey has brought me to an inspiring role at Salud Y Sonrisas Wellness, a free healthcare organization that resonates with my deep commitment to making a positive impact. Joining this organization wasn't just a career choice; it was a heartfelt decision rooted in my belief in accessible and equitable healthcare for all.",
        "Español": "Mi trayectoria profesional me ha llevado a desempeñar un papel inspirador en Salud Y Sonrisas Wellness, una organización de atención médica gratuita que refleja mi profundo compromiso de generar un impacto positivo. Unirse a esta organización no fue sólo una elección profesional; Fue una decisión sincera basada en mi creencia en una atención médica accesible y equitativa para todos."
    },

    "Victor Home": {
        "English": "Home Remedies",
        "Español": "Remedios Caseros"
    },

    "Victor Home Remedies": {
        "English": "Aloe Vera is a mainstay of Salvadorian homes. It is used to treat everything from acne, rashes, burns, and psoriasis. We like to use the gel straight from the plant!",
        "Español": "El aloe vera es un pilar de los hogares salvadoreños. Se utiliza para tratar todo, desde acné, erupciones cutáneas, quemaduras y psoriasis. ¡Nos gusta usar el gel directamente de la planta!"
    },

    "Monica": {
        "English": "My decision to work with this remarkable initiative stems from a profound belief in the importance of accessible and equitable healthcare for all. I'm driven by a genuine passion for improving the well-being of underserved communities. At Salud Y Sonrisas Wellness, I contribute my skills and compassion to a noble mission—making healthcare accessible and promoting health and smiles for everyone.",
        "Español": "Mi decisión de trabajar con esta notable iniciativa surge de una profunda creencia en la importancia de una atención médica accesible y equitativa para todos. Me impulsa una pasión genuina por mejorar el bienestar de las comunidades desatendidas. En Salud Y Sonrisas Wellness, aporto mis habilidades y compasión a una noble misión: hacer accesible la atención médica y promover la salud y la sonrisa para todos."
    },

    "Monica Home": {
        "English": "Home Remedies",
        "Español": "Remedios Caseros"
    },

    "Monica Home Remedies": {
        "English": "Slight cough? All Cubans know that a clean pair of socks and feet slathered in ViVa-Po-Ru (Vicks VapoRub) is the quickest way to get back to 100%!",
        "Español": "¿Tos leve? ¡Todos los cubanos saben que un par de calcetines limpios y los pies untados con ViVa-Po-Ru (Vicks VapoRub) es la forma más rápida de volver al 100%!"
    },

    "Resource Search": {
        "English": "Resource Search",
        "Español": "Chequea Nuestros Recursos"
    },

    "Enter topic": {
        "English": "Enter topic or keyword below to access curated healthcare resources.",
        "Español": "Ingresa el tema o la palabra clave a para acceder a recursos de atención médica."
    },

    "Empower your health journey!": {
        "English": "Empower your health journey! Explore our wealth of knowledge by searching health articles based on keywords or topics. Your wellness, your way.",
        "Español": "¡Potencia tu viaje hacia la salud! Explore nuestra riqueza de conocimientos buscando artículos de salud basados en palabras clave o temas. Tu bienestar, a tu manera."
    },

    "Search by Keyword": {
        "English": "Search by Keyword",
        "Español": "Busca por Palabra Clave"
    },

    "Search by Category": {
        "English": "Search by Category",
        "Español": "Busca por Categoria"
    },

    "Choose Language": {
        "English": "Choose Language",
        "Español": "Elige un Idioma"
    },

    "search": {
        "English": "search",
        "Español": "Buscar"
    },

    "Search Topic": {
        "English": "Search Topic",
        "Español": "Tema"
    },

    "Submit Topic": {
        "English": "Submit",
        "Español": "Enviar"
    },

    "Send Topic": {
        "English": "Send",
        "Español": "Enviar"
    },

    "Choose Category": {
        "English": "Choose Category",
        "Español": "Elegir Categoria"
    },

    "Option 1": {
        "English": "Option 1",
        "Español": "opcion 1"
    },

    "Option 1": {
        "English": "Option 2",
        "Español": "opcion 2"
    },

    "Option 3": {
        "English": "Option 3",
        "Español": "opcion 3"
    },

    "Search Category": {
        "English": "Search Category",
        "Español": "Buscar por Categoria"
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

    function changeLanguage(language) {
        var elements = document.querySelectorAll("[data-translate]");

        elements.forEach(function (element) {
            var key = element.dataset.translate;
            if (translations[key] && translations[key][language]) {
                element.innerText = translations[key][language];
            }
        });

        // Change the iframe source based on the selected language
        var iframe = document.getElementById("myhealthfinderframe");
        if (language === "English") {
            try{iframe.src = "https://www.health.gov/myhealthfinder?widget=true";}catch{}
        } else if (language === "Español") {
            try{iframe.src = "https://www.health.gov/espanol/myhealthfinder?widget=true";}catch{}
        }
    }

    // Event listener for language dropdown click
    document.getElementById("dropdown1").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedLanguage = event.target.innerText;
            changeLanguage(selectedLanguage);
        }
    });

    document.getElementById("dropdown2").addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
          var selectedLanguage = event.target.innerText;
          changeLanguage(selectedLanguage);
      }
  });
});
  
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  
});

    // Function to change language on click
//     function changeLanguage(language) {
//       var elements = document.querySelectorAll("[data-translate]");
      
//       elements.forEach(function (element) {
//         var key = element.dataset.translate;
//         if (translations[key] && translations[key][language]) {
//           element.innerText = translations[key][language];
//         }
//       });
//     }
  
//     // Event listener for language dropdown click
//     document.getElementById("dropdown1").addEventListener("click", function (event) {
//       if (event.target.tagName === "A") {
//         var selectedLanguage = event.target.innerText;
//         changeLanguage(selectedLanguage);
//       }
//     });
//   });
  
//   //