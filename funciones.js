//ANaya Pineda Mauricio
let screen = document.querySelector("#pantalla_id");
let bandera_inicio=0;
function getData(ref) {
  let value = ref.value;
  let tam=0;
  let cadena;
 
  if(bandera_inicio==1){
    screen.value = "";
  }

  if (value=='*' || value=='+' || value=='-'|| value=='/'|| value=='.' ){
      console.log("entro");
      cadena=screen.value;
      tam=cadena.length;
      console.log("el value -> ",value);
      console.log("el caracter a comparar> ", cadena[tam -1 ]);
      if(cadena[tam -1] == value) {
        screen.value = screen.value + '';
        bandera_inicio=0;
    } else
    screen.value = screen.value + value;
    bandera_inicio=0;
  } else
    screen.value = screen.value + value;
    bandera_inicio=0;
}

function clean() {
  screen.value = "";
}

function calcular() {
  try {
    screen.value = eval(screen.value);
    bandera_inicio=1;
  } catch (error) {
    screen.value = "Error";
    setTimeout(() => {
      clean();
    }, 500);
  }
}
