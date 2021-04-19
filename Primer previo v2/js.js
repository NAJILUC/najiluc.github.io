
    function vermas(id){

        idMostrar = "mas"+id;
        idMenos = "menos"+id;
        document.getElementById(idMostrar).style.display="block"; 
        document.getElementById(idMenos).style.display="none"; 

    }

    function vermenos(id){
        idMostrar = "mas"+id;
        idMenos = "menos"+id;
        document.getElementById(idMostrar).style.display="none";
        document.getElementById(idMenos).style.display="inline";

    }

    function renderNoticias(obj){

        var i=0;
                for(var call of obj) {
                    if(i == 3){
                        break
                    }
                    if(i==0){
                        imagen.setAttribute("src",call['img'] );
                    }
                    html.innerHTML+="<div id=menos"+call['id']+">"
                        +"<h3  onclick='vermas("+call['id']+")'>"+call['titulo']+" - "+call['fecha']+"</h3>"
                        +"<p>"+call['descripcion']+"<a href='#mas"+call['id']+"' onclick='vermas("+call['id']+")'>... ver más</a>"+"</p>"
                        +"</div>";


                    html.innerHTML+="<div id=mas"+call['id']+" style='display:none;'>"
                        +"<h3 onclick='vermenos("+call['id']+")'>"+call['titulo']+" - "+call['fecha']+"</h3>"
                        +"<p>"+call['descripcion']+"</p>"
                        +"<p>"+call['detalle']+"<a href='#menos"+call['id']+"' onclick='vermenos("+call['id']+")'>... ver menos</a>"+"</p>"
                        +"</div>";

                    i++;
                    }
    }


    function renderTecnologia(obj){

        var i=0;
        for(var call of obj) {
            if(i == 3){
                break
            }
            tecnologia.innerHTML+=call['titulo'];
            tecnologia.innerHTML+="<hr>";
            i++;
            }
        }

    function renderDeportes(obj){

        var i=0;
        for(var call of obj) {
            if(i == 3){
                break
            }
            deportes.innerHTML+=call['titulo'];
            deportes.innerHTML+="<hr>";
            i++;
            }
}

fetch('http://demo6497253.mockable.io/noticias')
  .then(response => response.json())
  .then(data => renderNoticias(data));

  fetch('http://demo6497253.mockable.io/categoria/tecnologia')
  .then(response => response.json())
  .then(data => renderTecnologia(data));

  fetch('http://demo6497253.mockable.io/categoria/deporte')
  .then(response => response.json())
  .then(data => renderDeportes(data));