function encriptar() {
  let texto = document.getElementById("texto").value;
//   let Mensaje = document.getElementById("titulo-mensaje");
//   let parrafo = document.getElementById("parrafo");
//   let imagen = document.getElementById("muneco");
  let textoEncriptado = texto
    .replace(/a/gi, "enter")
    .replace(/e/gi, "imes")
    .replace(/i/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value != 0) {
    document.getElementById("texto").value = textoEncriptado;
    document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("image").src = "./images/Muñeco.svg";
  } else {
    document.getElementById("image").src = "./images/vector.svg";
    alert("Debes ingresar un texto");
  }
}
