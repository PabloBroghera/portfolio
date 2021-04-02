<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyectos</title>
    <link rel="stylesheet" href="css/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="css/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/estilos.css?v=1">
    <script src="css/bootstrap/js/bootstrap.min.js"></script>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="css/bootstrap/js/bootstrap.bundle.min.js"></script>

</head>

<body id="contacto">
    <header>
        <div class="container">
            <?php
            $pg = "contacto";
            include_once("menu.php"); ?>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-sm-5">
                    <h1>Contacto</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-12 mt-4">
                    <p>
                        Te invito a que te contactes enviándome un mensaje o bien por <a href="https://api.whatsapp.com/send?phone=541136275845">whatsapp</a>.
                    </p>
                </div>
                <div class="col-sm-6 col-12 mt-4">
                    <form action method="POST">
                        <div class="mb-3">
                            <input type="text" id="txtNombre" name="txtNombre" class="form-control shadow" placeholder="Nombre">
                        </div>
                        <div class="mb-3">
                            <input type="text" name="txtCorreo" id="txtCorreo" class="form-control shadow" placeholder="Correo">
                        </div>
                        <div class="mb-3">
                            <textarea name="txtMensaje" id="txtMensaje" class="form-control shadow"></textarea>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="container">
            <?php include_once("footer.php"); ?>
        </div>
    </footer>

</body>












































</main>
</body>
<script src="js/bootstrap.min.js"></script>


</html>