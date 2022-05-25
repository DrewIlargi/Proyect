$('#Formulario_Usuario').submit(function (e) {
    e.preventDefault(); //actualizar datos
    nombres = $.trim($('#nombres_usuario').val());
    primer_apellido = $.trim($('#primer_apellido_usuario').val());
    segundo_apellido = $.trim($('#segundo_apellido_usuario').val());
    direccion = $.trim($('#direccion_usuario').val());
    telefono = $.trim($('#telefono_usuario').val());
    correo = $.trim($('#correo_usuario').val());
    id_usuario = $.trim($('#id_usuario').val());
    opcion = 1;
    
    $.ajax({
        url: "app/controlador/LoginControlador.php",
        type: "POST",
        data: { nombres: nombres, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido, direccion: direccion, correo: correo, telefono: telefono,id_usuario:id_usuario, opcion:opcion }
    }).done( function (data) {
      if(data==1)
       {
        swal("DATOS ACTUALIZADOS", "", "success").then((value) => { location.reload(); });
       }
       else
       {
           alert(data);
       }    
    });

});
