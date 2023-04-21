//se ejecuta siempre que se encuentre listo el dom
//JQUERY
$(document).ready(function()
{
    //cuando se da click se elimina el elemento, se muestra una alerta y se cambia el color de la botonera
    $(".button").click(function()
    {
        alert("dio click en guardar");
        $(this).remove();
        $("#modificar").html("<h1>modificador</h1>");
        $(".buttonsection").attr("style","background-color:red");
    });
});