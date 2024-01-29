const cronos=document.getElementById('cronometro');
const play=document.getElementById('inicio-pausa');
const arrow=document.getElementById('reinicio')

let [horas,minutos,segundos]=[0,0,0];
let tiempo;
let estadocronometro='pausado';

function asignarformato(unidadTiempo){
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo
}

function actualizarcronometro(){
    segundos++;
    if(segundos / 60 == 1){
        segundos = 0;
        minutos++;

        if(minutos / 60 ==1){
        minutos = 0;
        horas++
         }
    }
    const formatoSegundos=asignarformato(segundos);
    const formatoMinutos=asignarformato(minutos);
    const formatoHoras=asignarformato(horas);

    cronos.innerText=`${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

play.addEventListener("click",function(){
    if (estadocronometro === "pausado"){
        tiempo = window.setInterval(actualizarcronometro,1000);
        play.innerHTML='<i class="bi bi-pause-circle"></i>';
        play.classList.remove("iniciar");
        play.classList.add("pausar");
        estadocronometro= "corriendo"
    }
    else{
        window.clearInterval(tiempo)
        play.innerHTML='<i class="bi bi-play-circle"></i>';
        play.classList.remove("pausar");
        play.classList.add("iniciar");
        estadocronometro= "pausado";
    }
});

arrow.addEventListener("click",function(){
    window.clearInterval(tiempo);
    cronos.innerText='00:00:00';

    segundos = 0;
    minutos = 0;
    horas = 0;

    play.innerHTML='<i class="bi bi-play-circle"></i>';
    play.classList.remove("pausar");
    play.classList.add("iniciar");
    estadocronometro="pausado";

})