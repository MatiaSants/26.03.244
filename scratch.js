
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <style>
        body {
            background-color: #1a279e;
            font-family: 'Segoe UI';
            display: flex;
            justify-content: top;
            align-items: top;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        #buttonContainer {
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="buttonContainer">
        <!-- Seus outros botões aqui -->
        <button onclick="trocarAvatar()">Trocar o avatar</button>
        <!-- Seus outros elementos aqui -->

        <br />
        <label for="txtPixel">Quantidade de pixel(s):</label>
        <input type="text" id="txtPixel" value="1"/>

        <img src="./Avatar
        .png" id="imgAvatar" style="position: absolute; top: 50px; left: 50px;" />
        <img src="./goku-fortnite-goku.gif" id="imgAvatar1" style="position: absolute; top: 50px; left: 50px;" />

        <audio id="somAvatar">  
            <source src="./Oi, eu sou o Goku.mp3" type="audio/mpeg">
        </audio>
    
        <script>
            function trocarAvatar() {
                var imgAvatar = document.getElementById('imgAvatar');
                var imgAvatar1 = document.getElementById('imgAvatar1');
                
                // Verifica qual imagem está visível
                var imgAtual = imgAvatar.style.display === 'none' ? imgAvatar1 : imgAvatar;
                var imgNova = imgAtual === imgAvatar ? imgAvatar1 : imgAvatar;

                // Altera a visibilidade das imagens
                imgAtual.style.display = 'none';
                imgNova.style.display = 'block';
            }
        </script>

        <script src="./scratch.js"></script>
    </div>
</body>
</html>
