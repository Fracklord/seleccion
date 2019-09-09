//1) Se definen las variables correspondientes a cada comuna

//Coronel
var opt_1 = new Array ("Liceo Comercial Andrés Bello López", "Liceo Antonio Salamanca", "Liceo Yobilo", "Liceo Rosita Renard", "Liceo Bicentenario", "Liceo Juan José Latorre", "Centro de Educación Integrada de Adultos CEIA", "Centro de Educación Integrada de Adultos Sergio Peralta Morales", "Liceo Industrial Federico Schwager", "Instituto de Humanidades Antonio Moreno", "Liceo Técnico Profesional de la Madera", "Liceo Industrial Metodista");
//Lota
var opt_2 = new Array ("Liceo Carlos Cousiño Goyenechea", "Liceo Comercial Presidente Frei Montalva", "Liceo Politécnico Rosauro Santana Rios", "Liceo Santa Doris", "Colegio Padre Manuel D'alzon", "Escuela Baldomero Lillo Figueroa", "Liceo Thompson Matthews", "Instituto De Humanidades San Francisco De Asis", "C.E.I.A San Luis De Potosi Republica De Mexico");
//Cañete
var opt_3 = new Array ("Liceo Juan de la Cruz Mirando Correa", "Liceo Gabriela Mistral", "Instituto San José", "Liceo Politécnico de Cañete");
//Curanilahue
var opt_4 = new Array ("ETP Arauco Limitada", "CEIA Fermín Fierro Luengo", "Liceo Mariano Latorre");
//Lebu
var opt_5 = new Array ("Liceo Bicentenario Isidora Ramos", "Liceo Polivalente Dr. Rigoberto Iglesias Bastías", " Liceo Fresia Gaciela Müller");
//Los Álamos
var opt_6 = new Array ("Liceo Politécnico Caupolicán", "Liceo Cristo Redentor", "Internado Liceo B-55");
//Tirúa
var opt_7 = new Array ("Liceo C-90 Trapaqueante");

//2) Función que permite ejecutar el cambio en el select dinámico
function cambia(){
    var cosa;
    //Se toma el vamor de la "cosa seleccionada"
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
    //se chequea si la "cosa" esta definida
    if(cosa!=0){
        //selecionamos las cosas Correctas
        mis_opts=eval("opt_" + cosa);
        //se calcula el numero de cosas
        num_opts=mis_opts.length;
        //marco el numero de opt en el select
        document.formulario1.opt.length = num_opts;
        //para cada opt del array, la pongo en el select
        for(i=0; i<num_opts; i++){
            document.formulario1.opt.options[i].value=mis_opts[i];
            document.formulario1.opt.options[i].text=mis_opts[i];
        }
        }else{
            //si no habia ninguna opt seleccionada, elimino las cosas del select
            document.formulario1.opt.length = 1;
            //ponemos un guion en la unica opt que he dejado
            document.formulario1.opt.options[0].value="-";
            document.formulario1.opt.options[0].text="-";
        }
        //hacer un reset de las opts
        document.formulario1.opt.options[0].selected = true;
        
    }

;(function($) {
    "use strict";  
    
    //* Form js
    function verificationForm(){
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".submit").click(function () {
            return false;
        })
    }; 
    
    //* Add Phone no select
    function phoneNoselect(){
        if ( $('#msform').length ){   
            $("#phone").intlTelInput(); 
            $("#phone").intlTelInput("setNumber", "+56"); 
        };
    }; 
    //* Select js
    function nice_Select(){
        if ( $('.product_select').length ){ 
            $('select').niceSelect();
        };
    }; 
    /*Function Calls*/  
    verificationForm ();
    phoneNoselect ();
    nice_Select ();
})(jQuery);


function formatCliente(cliente)
{cliente.value=cliente.value.replace(/[.-]/g, '')
.replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4')}

$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});





/*
$(document).ready(function() {

    // Creamos el array con los perfiles que existe para trabajar con nosotros
    var coronel = [
        {display: "Liceo Comercial Andrés Bello López", value: "Liceo Comercial Andrés Bello López" },
        {display: "Liceo Antonio Salamanca", value: "Liceo Antonio Salamanca" },
        {display: "Liceo Yobilo", value: "Liceo Yobilo" },
        {display: "Liceo Rosita Renard", value: "Liceo Rosita Renard" },
        {display: "Liceo Bicentenario", value: "Liceo Bicentenario" },
        {display: "Liceo Juan José Latorre", value: "Liceo Juan José Latorre" },
        {display: "Centro de Educación Integrada de Adultos CEIA", value: "Centro de Educación Integrada de Adultos CEIA" },
        {display: "Centro de Educación Integrada de Adultos Sergio Peralta Morales", value: "Centro de Educación Integrada de Adultos Sergio Peralta Morales" },
        {display: "Liceo Industrial Federico Schwager", value: "Liceo Industrial Federico Schwager" },
        {display: "Instituto de Humanidades Antonio Moreno", value: "Instituto de Humanidades Antonio Moreno" },
        {display: "Liceo Técnico Profesional de la Madera", value: "Liceo Técnico Profesional de la Madera" },
        {display:  "Liceo Industrial Metodista", value:  "Liceo Industrial Metodista" }];

    var lota = [
        {display: "Liceo Carlos Cousiño Goyenechea", value: "Liceo Carlos Cousiño Goyenechea" },
        {display: "Liceo Comercial Presidente Frei Montalva", value: "Liceo Comercial Presidente Frei Montalva" },
        {display: "Liceo Politécnico Rosauro Santana Rios", value: "Liceo Politécnico Rosauro Santana Rios" },
        {display: "Liceo Santa Doris", value: "Liceo Santa Doris" },
        {display: "Colegio Padre Manuel D'alzon", value: "Colegio Padre Manuel D'alzon" },
        {display: "Escuela Baldomero Lillo Figueroa", value: "Escuela Baldomero Lillo Figueroa" },
        {display: "Liceo Thompson Matthews", value: "Liceo Thompson Matthews" },
        {display: "Instituto De Humanidades San Francisco De Asis", value: "Instituto De Humanidades San Francisco De Asis" },
        {display: "C.E.I.A San Luis De Potosi Republica De Mexico", value: "C.E.I.A San Luis De Potosi Republica De Mexico" }];

    var caniete = [
        {display: "Liceo Juan de la Cruz Mirando Correa", value: "Liceo Juan de la Cruz Mirando Correa" },
        {display: "Liceo Gabriela Mistral", value: "Liceo Gabriela Mistral" },
        {display: "Instituto San José", value: "Instituto San José" },
        {display: "Liceo Politécnico de Cañete", value: "Liceo Politécnico de Cañete" }];

    var curanilahue = [
        {display: "ETP Arauco Limitada", value: "ETP Arauco Limitada" },
        {display: "CEIA Fermín Fierro Luengo", value: "CEIA Fermín Fierro Luengo" },
        {display: "Liceo Mariano Latorre", value: "Liceo Mariano Latorre" }];
        
    var lebu = [
        {display: "Liceo Bicentenario Isidora Ramos", value: "Liceo Bicentenario Isidora Ramos" },
        {display: "Liceo Polivalente Dr. Rigoberto Iglesias Bastías", value: "Liceo Polivalente Dr. Rigoberto Iglesias Bastías" },
        {display: "Liceo Fresia Gaciela Müller", value: "Liceo Fresia Gaciela Müller" }];

    var losalamos = [
        {display: "Liceo Politécnico Caupolicán", value: "Liceo Politécnico Caupolicán" },
        {display: "Liceo Cristo Redentor", value: "Liceo Cristo Redentor" },
        {display: "Internado Liceo B-55", value: "Internado Liceo B-55" }];

    var tirua = [
        {display: "Liceo C-90 Trapaqueante", value: "Liceo C-90 Trapaqueante" }];

      // Aqui creamos verificamos cual opciones apareceran dependiendo de la seleccion@superservicios

    $("#vacante").change(function() {
        var parent = $(this).val();
        switch(parent){
            case 'Coronel':
                list(coronel);
                break;

            case 'Lota':
                list(lota);
                break;

            case 'Caniete':
                list(caniete);
                break;

            case 'Curanilahue':
                list(curanilahue);
                break;

            case 'Lebu':
                list(lebu);
                break;

            case 'LosAlamos':
                list(losalamos);
                break;
                
            case 'Tirua':
                list(tirua);
                break;
                                        
            default: //default child option is blank
                $("#perfil").html('');
                break;
                }
        });

  //function to populate child select box
  function list(array_list)
  {
      $("#perfil").html(""); //reset child options
      $(array_list).each(function (i) { //populate child options
          $("#perfil").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
      });
    $("#aqui").addClass('hidden');
    $(".box--oculto").removeClass('hidden');
  }
    
    
  });*/










/*
//1) Se definen las variables correspondientes a cada comuna

//Coronel
var opt_1 = new Array ("Liceo Comercial Andrés Bello López", "Liceo Antonio Salamanca", "Liceo Yobilo", "Liceo Rosita Renard", "Liceo Bicentenario", "Liceo Juan José Latorre", "Centro de Educación Integrada de Adultos CEIA", "Centro de Educación Integrada de Adultos Sergio Peralta Morales", "Liceo Industrial Federico Schwager", "Instituto de Humanidades Antonio Moreno", "Liceo Técnico Profesional de la Madera", "Liceo Industrial Metodista");
//Lota
var opt_2 = new Array ("Liceo Carlos Cousiño Goyenechea", "Liceo Comercial Presidente Frei Montalva", "Liceo Politécnico Rosauro Santana Rios", "Liceo Santa Doris", "Colegio Padre Manuel D'alzon", "Escuela Baldomero Lillo Figueroa", "Liceo Thompson Matthews", "Instituto De Humanidades San Francisco De Asis", "C.E.I.A San Luis De Potosi Republica De Mexico");
//Cañete
var opt_3 = new Array ("Liceo Juan de la Cruz Mirando Correa", "Liceo Gabriela Mistral", "Instituto San José", "Liceo Politécnico de Cañete");
//Curanilahue
var opt_4 = new Array ("ETP Arauco Limitada", "CEIA Fermín Fierro Luengo", "Liceo Mariano Latorre");
//Lebu
var opt_5 = new Array ("Liceo Bicentenario Isidora Ramos", "Liceo Polivalente Dr. Rigoberto Iglesias Bastías", " Liceo Fresia Gaciela Müller");
//Los Álamos
var opt_6 = new Array ("Liceo Politécnico Caupolicán", "Liceo Cristo Redentor", "Internado Liceo B-55");
//Tirúa
var opt_7 = new Array ("Liceo C-90 Trapaqueante");

//2) Función que permite ejecutar el cambio en el select dinámico
function cambia(){
    var cosa;
    //Se toma el vamor de la "cosa seleccionada"
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
    //se chequea si la "cosa" esta definida
    if(cosa!=0){
        //selecionamos las cosas Correctas
        mis_opts=eval("opt_" + cosa);
        //se calcula el numero de cosas
        num_opts=mis_opts.length;
        //marco el numero de opt en el select
        document.formulario1.opt.length = num_opts;
        //para cada opt del array, la pongo en el select
        for(i=0; i<num_opts; i++){
            document.formulario1.opt.options[i].value=mis_opts[i];
            document.formulario1.opt.options[i].text=mis_opts[i];
        }
        }else{
            //si no habia ninguna opt seleccionada, elimino las cosas del select
            document.formulario1.opt.length = 1;
            //ponemos un guion en la unica opt que he dejado
            document.formulario1.opt.options[0].value="-";
            document.formulario1.opt.options[0].text="-";
        }
        //hacer un reset de las opts
        document.formulario1.opt.options[0].selected = true;
        
    }*/
