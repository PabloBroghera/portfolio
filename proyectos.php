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

<body id="proyectos">
    <header>
        <div class="container">
            <?php
            $pg = "proyectos";
            include_once("menu.php"); ?>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-sm-5">
                    <h1>Proyectos</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-12 my-4">
                    <p>Los siguientes son algunos de los trabajos que he realizado:</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-12">
                    <div class="row card m-1">
                        <img src="images/abmclientes.png" alt="ABM Clientes" title="ABM Clientes" class="img-fluid">
                        <div class="col-12 color-gradiente py-3">
                            <h2>ABM Clientes</h2>
                        </div>
                        <div class="col-12 py-3">
                            <p>Alta, baja y modificación de un registro de clientes. Realizado en HTML, CSS, PHP, Bootstrap y Json.</p>
                        </div>
                        <div class="row p-3 pb-0">
                            <div class="col-6">
                                <a href="https://nelsontarche.com.ar/sistema/abmclientes/" class="btn btn-rojo" target="_blank">Ver online</a>
                            </div>
                            <div class="col-6">
                                <a href="https://github.com/depcsuite/abmclientes" class="link-rojo" target="_blank">Código fuente</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-12">
                    <div class="row card m-1">
                        <img src="images/abmventas.png" alt="Sistema de Gestión de Ventas" title="Sistema de Gestión de Ventas" class="img-fluid">
                        <div class="col-12 color-gradiente py-3">
                            <h2>Sistema de gestión de ventas</h2>
                        </div>
                        <div class="col-12 py-3">
                            <p>Sistema de gestión de clientes, productos y ventas. Realizado en HTML, CSS, PHP, MVC, Bootstrap, Js, Ajax, jQuery y MySQL de base de datos.</p>
                        </div>
                        <div class="row p-3 pb-0">
                            <div class="col-6">
                                <a href="https://nelsontarche.com.ar/sistema/login/" class="btn btn-rojo" target="_blank">Ver online</a>
                            </div>
                            <div class="col-6">
                                <a href="https://github.com/depcsuite/login" class="link-rojo" target="_blank">Código fuente</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-12">
                    <div class="row card m-1">
                        <img src="images/sistema-admin.png" alt="Proyecto" title="Proyecto" class="img-fluid">
                        <div class="col-12 color-gradiente py-3">
                            <h2>Proyecto integrador</h2>
                        </div>
                        <div class="col-12 py-3">
                            <p>Proyecto Full Stack desarrollado en PHP, Laravel, Javascript, jQuery, AJAX, HTML, CSS, Mercadopago con panel administrador, gestor de usuarios, módulo de permisos y funcionalidades a fines.</p>
                        </div>
                        <div class="row p-3 pb-0">
                            <div class="col-6">
                                <a href="#" class="btn btn-rojo" target="_blank">Ver online</a>
                            </div>
                            <div class="col-6">
                                <a href="" class="link-rojo" target="_blank">Código fuente</a>
                            </div>
                        </div>
                    </div>
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