(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function(){
        /*  **DATOS DE USUARIO**     */
        const Nombre = document.getElementById('nombre');
        const Apellido = document.getElementById('apellido');
        const Email = document.getElementById('email');

        //CAMPOS PASES

        const pase_dia = document.getElementById('pase_dia');
        const pase_dosdias = document.getElementById('pase_dosdias');
        const pase_completo = document.getElementById('pase_completo');

        //BOTONES Y DIVS

        const calcular = document.getElementById('calcular');
        const errorDiv = document.getElementById('error');
        const botonRegistro = document.getElementById('btnRegistro');
        const listaProductos = document.getElementById('lista-productos');
        const sumaTotal = document.getElementById('suma-total');

        //EXTRAS
        const Etiquetas = document.getElementById('etiquetas');
        const Camisas = document.getElementById('camisa_evento');
        
        if(document.getElementById('calcular')){
            //EVENTOS

        calcular.addEventListener('click', calcularMonto);
        pase_dia.addEventListener('blur', mostrarDia);
        pase_dosdias.addEventListener('blur', mostrarDia);
        pase_completo.addEventListener('blur', mostrarDia);
        Nombre.addEventListener('blur', ValidarCampo);
        Apellido.addEventListener('blur', ValidarCampo);
        Email.addEventListener('blur', ValidarCampo);
        Email.addEventListener('blur', ValidarMail);
        //FUNCIONES

        function calcularMonto(e){
            e.preventDefault();
            if(regalo.value === ''){
                alert("Deber elegir un regalo");
                regalo.focus();
            }
            else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0, 
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    canEtiquetas = parseInt(Etiquetas.value, 10) || 0,
                    canCamisas = parseInt(Camisas.value, 10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((canCamisas * 10) * .93) + (canEtiquetas * 2);
                var listadoProductos = [];

                if(boletosDia >= 1){
                    listadoProductos.push(boletosDia + ' Pases por día');
                }
                if(boletos2Dias >= 1){
                    listadoProductos.push(boletos2Dias + ' Pases por dos días');
                }
                if(boletoCompleto >= 1){
                    listadoProductos.push(boletoCompleto + ' Pase completo');
                }
                if(canEtiquetas >= 1){
                    listadoProductos.push(canEtiquetas + ' Etiquetas');
                }
                if(canCamisas >= 1){
                    listadoProductos.push(canCamisas + ' Camisas');
                }
                listaProductos.style.display = "block";
                listaProductos.innerHTML = ''; //Es para sobreescribir
                for(var i=0;i<listadoProductos.length;i++){
                    listaProductos.innerHTML += listadoProductos[i] + '<br/>';
                }
                sumaTotal.innerHTML = '$ ' + totalPagar.toFixed(2); //toFixed te regresa un valor flotante con 2 numeros decimales
            }
        } //Calcular Monto

        function mostrarDia(){
            const boletosDia = parseInt(pase_dia.value, 10) || 0, 
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;
            const diasElegidos = [];
            if(boletosDia > 0){
                diasElegidos.push('viernes');
            }
            if(boletos2Dias > 0){
                diasElegidos.push('viernes', 'sabado');
            }
            if(boletoCompleto > 0){
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }
            for(var i = 0; i < diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
            
        } //mostrarDia

        function ValidarCampo(){
            if(this.value == ''){
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
            else{
                errorDiv.style.display = 'none';
                this.style.border = '1px solid green';
            }
        }
        function ValidarMail(){
            if(this.value.indexOf("@") > -1){
                errorDiv.style.display = 'none';
                this.style.border = '1px solid green';
            }
            else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener al menos un @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }
        }
        
    }); //DOMContentLoaded
})();

$(function(){
    //Lettering
    $('.nombre-sitio').lettering();
    //Menu Fijo
    const windowHeight = $(window).height(); // Altura de la ventana
    const barraAltura = $('.barra').innerHeight(); //Altura de la barra de navegacion

    $(window).scroll(function(){
        const Scroll = $(window).scrollTop();
        if(Scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top':barraAltura + 'px'}); //PARA ARREGLAR ERRORES DE DISEÑO EN LA BARRA
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top':'0px'});
        }
    });
    //Menu movil
    
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle(); //TOMALO COMO REFERENCIA PARA FUTUROS PROYECTOS
    })
    //Programa de conferencia
    $('.programa-evento .info-curso:first').show();
    $('nav.menu-programa a:first').addClass('activo');
    $('.menu-programa a:nth-child(2)').removeClass('activo');
    $('.menu-programa a:nth-child(3)').removeClass('activo');
    $('nav.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
    //
    //Animacion para los numeros
    //
    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1200);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);
    //
    //Cuenta regresiva
    //
    $('.cuenta-regresiva').countdown('2021/08/06 08:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
}); 
