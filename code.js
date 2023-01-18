const validacion = () => {
  let userJson = {  };

  if (
    !document.getElementById("firstName").value &&
    document.getElementsByClassName("nombre")[0] == null
  ) {
    agregarError("first-name--container", "ingrese su nombre", "nombre");
  } else {
    if(document.getElementById("firstName").value){
        userJson["firstName"]=document.getElementById("firstName").value
    }
    if(document.getElementsByClassName("nombre")[0]){
        
        document.getElementById("first-name--container").removeChild(document.getElementsByClassName("nombre")[0])
    
    }
    
  }
  if (
    !document.getElementById("lastName").value &&
    document.getElementsByClassName("apellido")[0] == null
  ) {
    agregarError("last-name--container", "ingrese su apellido", "apellido");
  }else{
    if(document.getElementById("lastName").value){
        userJson["lastName"]=document.getElementById("lastName").value
    }
    if(document.getElementsByClassName("apellido")[0]){
        
        document.getElementById("last-name--container").removeChild(document.getElementsByClassName("apellido")[0])
    }
  }


  if (
    !document.getElementById("birthdayDate").value &&
    document.getElementsByClassName("nacimiento")[0] == null
  ) {
    agregarError(
      "birthday-date--container",
      "ingrese la fecha de nacimiento",
      "nacimiento"
    );
  }else{
    if(document.getElementById("birthdayDate").value){
        userJson["birthdayDate"]=document.getElementById("birthdayDate").value
    }
    if(document.getElementsByClassName("nacimiento")[0]){
        
        document.getElementById("birthday-date--container").removeChild(document.getElementsByClassName("nacimiento")[0])
    }
  }


  if (
    document.getElementById("inputMasculino").checked == false &&
    document.getElementById("inputFemenino").checked == false &&
    document.getElementsByClassName("sexo")[0] == null
  ) {
    agregarError("genero--container", "ingrese tu genero", "sexo");
  }else{
    
    if(document.getElementsByClassName("sexo")[0]){
        
        document.getElementById("genero--container").removeChild(document.getElementsByClassName("sexo")[0])
    }
  }
  if (
    !document.getElementById("country-select").value &&
    document.getElementsByClassName("ciudad")[0] == null
  ) {
    agregarError("country--container", "ingrese tu Ciudad", "ciudad");
  }else{
    if(document.getElementsByClassName("ciudad")[0]){
        
        document.getElementById("country--container").removeChild(document.getElementsByClassName("ciudad")[0])
    }
  }
  if (
    document.getElementById("checkbox__Js").checked == false &&
    document.getElementById("checkbox__python").checked == false &&
    document.getElementById("checkbox__C").checked == false &&
    document.getElementById("checkbox__C++").checked == false &&
    document.getElementsByClassName("lenguajes")[0] == null
  ) {
    agregarError(
      "lenguajes-prodramacion--container",
      "Selecciona al menos un lenguaje",
      "lenguajes"
    );
  }else{
    if(document.getElementsByClassName("lenguajes")[0]){
        
        document.getElementById("lenguajes-prodramacion--container").removeChild(document.getElementsByClassName("lenguajes")[0])
    }
  }
  if (
    !document.getElementById("text-area__descripcion").value &&
    document.getElementsByClassName("descripcion")[0] == null
  ) {
    agregarError(
      "descripcion--container",
      "Escribe Algo en la descripcion",
      "descripcion"
    );
  }else{
    if(document.getElementsByClassName("descripcion")[0]){
        
        document.getElementById("descripcion--container").removeChild(document.getElementsByClassName("descripcion")[0])
    }
  }

  console.log(userJson)
};
const agregarError = (clase, error, clase2) => {
  let mensajeError = document.createElement("p");
  const divDescripcion = document.getElementById(clase);
  mensajeError.textContent = error;
  mensajeError.classList.add("error");
  mensajeError.classList.add(clase2);
  divDescripcion.appendChild(mensajeError);
};
