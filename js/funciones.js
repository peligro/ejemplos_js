/*
Función para saludar al quien use el botón
*/
function saludo()
{
   alert("hola la u es lo mas grande!!!!"); 
   console.log("mensaje para la consola"); 
}
function saludo2()
{
   alert("van segundos a dos puntos, sospechosa la cosa!!!");  
}
function cambiarTexto()
{
    document.getElementById("texto1").innerHTML="otro texto de <strong>flaite</strong>";
}
function cambiarEstilo()
{
    document.getElementById("texto1").style.backgroundColor="blue";
    document.getElementById("texto1").style.color="black";
    document.getElementById("texto1").style.width="100px";
    document.getElementById("texto1").style.height="100px";
}
function cambiarTamano()
{
    document.getElementById("cuadrado").style.width="200px";
    document.getElementById("cuadrado").style.height="200px";
}
function ocultar(id)
{
    document.getElementById(id).style.display="none";
}
function mostrar(id)
{
    ocultar("pagina1");
    ocultar("pagina2");
    ocultar("pagina3");
    document.getElementById(id).style.display="block";
}
function cambiarImagen(imagen)
{
    document.getElementById("foto").src="images/"+imagen;
}
