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

<body id="inicio">
    <header>
        <div class="container">

            <?php
            $pg = "inicio";
            include_once("menu.php");

            ?>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4 text-center div-cohete">
                    <a href="proyectos.php"><img src="images/cohete.svg" class="cohete"></a>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-6 my-4 mt-sm-5 text-center offset-sm-3 mb-3">
                    <div class="input-home">
                        <p class="p-1">Hola,mi nombre es Pablo y soy Desarrollador Web.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <a href="proyectos.php" class="btn shadow">Conoce mis proyectos</a>
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

</html>