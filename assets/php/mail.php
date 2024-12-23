<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"]);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($email) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Por favor complete el formulario e inténtelo nuevamente.";
            exit;
        }

        $recipient = "info@workgroup.com.ar";

        $subject = "Nuevo contacto de: $name";

        $email_content = "Nombre: $name\n";
        $email_content = "Email: $email\n";
        $email_content = "Subtitulo: $subject\n";
        $email_content = "Mensaje:$message\n";

        $email_headers = "De: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Gracias ! Su mensaje ha sido enviado.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "¡Ups! Algo salió mal y no pudimos enviar tu mensaje.";
        }

    } else {
        http_response_code(403);
        echo "Hubo un problema con tu envío, inténtalo de nuevo.";
    }

?>