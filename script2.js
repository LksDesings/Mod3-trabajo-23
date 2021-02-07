/*Autor: Anton Rubilar M.
Version actual: 1.01
Objetivos del archivo: Pagina web de cholates*/
$(document).ready(function(){ 
    $( "#resizable" ).resizable();

    $( "#accordion" ).accordion();

    $('#info').on('click', function() {
        $( "#dialog" ).dialog();
    } );
    
});