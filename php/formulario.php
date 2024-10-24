<?php
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Correo destinatario (cambiar esto a tu dirección de correo)
    $destinatario = "jcpizarroalonso@gmail.com";

    // Crear el mensaje del correo
    $cuerpo = "Has recibido un nuevo mensaje de contacto:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Asunto: $asunto\n";
    $cuerpo .= "Mensaje: $mensaje\n";

    // Encabezados del correo
    $headers = "From: noreply@tudominio.com\r\n";
    $headers .= "Reply-To: $destinatario\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "El mensaje se ha enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
?>
