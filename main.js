

function leer(){
    return $("input").val()
   }

    function condicional(condicion){
      switch (condicion){
        case 'ladra':
          $(".interactivo").attr("src", "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission2004/bbtreesubmission200401512/144340124-lindo-y-encantador-perro-ladrando-ilustraci%C3%B3n-de-icono-de-mascotas.jpg");
          break
        case 'sentado':
          $(".interactivo").attr("src", "https://previews.123rf.com/images/skvector/skvector2006/skvector200600177/149880144-perro-corgi-sentado-linda-mascota-en-estilo-de-dibujos-animados.jpg");
          break
          case 'la pata':
            $(".interactivo").attr("src", "https://previews.123rf.com/images/skvector/skvector2006/skvector200600128/149552586-perro-corgi-dando-pata-linda-mascota-en-estilo-de-dibujos-animados.jpg");
            break
          case 'corre':
            $(".interactivo").attr("src", "https://previews.123rf.com/images/skvector/skvector2006/skvector200600234/149880156-corriendo-perro-corgi-linda-mascota-en-estilo-de-dibujos-animados.jpg");
            break
            case 'traeme dinero':
            $(".interactivo").attr("src", "https://previews.123rf.com/images/redvy/redvy2106/redvy210600056/169657424-perro-shiba-inu-mordiendo-d%C3%B3lar.jpg");
            break
            case 'saluda':
            $(".interactivo").attr("src", "https://previews.123rf.com/images/grandreignhart/grandreignhart2201/grandreignhart220100015/182289040-ilustraci%C3%B3n-de-dibujos-animados-de-pose-linda-de-perro-corgi-ilustraci%C3%B3n-de-vector-de-perro-corgi.jpg");
            break
            case '':
            $(".interactivo").attr("src", "");
            break
            case '':
            $(".interactivo").attr("src", "");
            break            
            case '':
            $(".interactivo").attr("src", "");
            break
        default:
          alert("El perro no sabe hacer eso")
      }
    } 
    
    $("#boton").click(
      function(){
        let valor = leer();
        condicional(valor);
      }
    )