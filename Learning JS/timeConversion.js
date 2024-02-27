function timeConversion(s) {
    let n = s.length;
    let secciones = s.split(":");
    let horas = parseInt(secciones[0]);
    let min = secciones[1];
    let segundos = s[n-2] + s[n-1];
    let type = secciones[2].substring(2);
    if(type == "PM" && horas < 12){
        horas += 12;
    }else if(type == "AM" && horas === 12){
        horas = 0;
    }
    horas = horas.toString().padStart(2, "0");
    console.log(horas + ":" + min + ":" + segundos);
}

function main() {
    let s = "07:05:45PM";
    timeConversion(s);
}

main();