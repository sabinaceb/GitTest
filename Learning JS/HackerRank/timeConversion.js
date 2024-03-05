function timeConversion(s) {
    let n = s.length;
    let secciones = s.split(":");
    let hrs = parseInt(secciones[0]);
    let min = secciones[1];
    let seg = s[n-2] + s[n-1];
    let type = secciones[2].substring(2);
    if(type == "PM" && hrs < 12){
        hrs += 12;
    }else if(type == "AM" && hrs === 12){
        hrs = 0;
    }
    hrs = hrs.toString().padStart(2, "0");
    console.log(hrs + ":" + min + ":" + seg);
    console.log("Holi");
}

function main() {
    let s = "07:05:45PM";
    timeConversion(s);
}

main();