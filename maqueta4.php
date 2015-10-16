<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
            <link type="text/css" rel="stylesheet" href="css/estilos.css" />
            <script type="text/javascript" src="js/funciones.js"></script>
        </head>
        <body>
            
            <ul class="nav nav-tabs">
              <li role="presentation"><a href="#" onclick="mostrar('pagina1');">Página 1</a></li>
              <li role="presentation"><a href="#" onclick="mostrar('pagina2');">Página 2</a></li>
              <li role="presentation"><a href="#" onclick="mostrar('pagina3');">Página 3</a></li>
            </ul>
            
            <div id="pagina1" class="mostrar">
                <h1>Contenido Página 1</h1>
            </div>
            <div id="pagina2" class="ocultar">
                <h1>Contenido Página 2</h1>
            </div>
            <div id="pagina3" class="ocultar">
                <h1>Contenido Página 3</h1>
            </div>
        </body>
    </html>


