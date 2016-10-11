(function() {
    $(function() {
        //console.log('Document Ready');
        //var h1 = $('h1');
        //debugger
        //h1.html('Hola a todos');
        //debugger
        //var p = $ ('<p>');
        //P.html('este es un parrafo nuevo');
        /*$('body').append(p);*/
        //$('.container').append(p);
        //p.addClass('text.danger');
        //})
        //$('button').click(function (e){
        //console.log('Megusta', e)
        //cambiar el color
        //	$('button').addClass('btn-primary');
        //	$('button').removeClass('btn-default');
        //cambia el color a cada click
        //$('button').toggleClass('btn-primary');
        //this para referise al objeto con el que se interactua
        //	$(this).toggleClass('btn-primary');
        var id = 0;
        $('form').submit(function(e) {
            e.preventDefault(); //previene comportamiento por defecto form recarga por defautl
            var moneda = $(this).serializeArray();
            id++;
            console.log(moneda[0].value);
            console.log(moneda[1].value);
            console.log(moneda[2].value);
            //guardar valores en variables
            var compra;
            var venta;
						var money = moneda[0].value;

						if (/^[a-zA-Z]+$/.test(money) == false) {
							alert('El campo de denominacion de monedas solo admite letras')
							$('#denominacion').val('').focus();
							return false;

						}
						//funcion que limpia campos
            function limpiarCampos() {
                $('#compra').val('').focus();
                $('#venta').val('');
            }

            //comprueba que el valor introducido sea mayor a 0
            if (Number(moneda[1].value) > 0 && Number(moneda[2].value) > 0) {
                compra = parseFloat(moneda[1].value);
                venta = parseFloat(moneda[2].value);

            } else {
                alert("Los numeros deben ser positivos")
                limpiarCampos();
                return false; //evita que se ingrese el dato al formulario


            }


            //comprueba que compra sea mayor a venta
            if (compra >= venta) {
                alert("Error al ingresar montos, el valor de compra debe ser inferior al valor de venta");
                //$('input[name = 'compra']').val('');
                //$('input[name = 'venta']').val('');
                limpiarCampos();
                return false; //evita ingresar al formulario

            } else {
                var row = '<tr>';
                row += '<td>' + id;
                row += '<td>' + moneda[0].value;
                row += '<td>' + moneda[1].value;
                row += '<td>' + moneda[2].value;

                $('table tbody').append(row);
                $('form').trigger('reset');
            }






        });
    })

})();
