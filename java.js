var autok =[
    {
        auto: "Opel",
        ar: 123455,
    },
    {
        auto: "Kia",
        ar: 1234255,
    },
    {
        auto: "Mazda",
        ar: 12345,
    },
];


window.addEventListener("load",init);
/**rövidítő függvény*/
function $(elem) {
    return document.querySelector(elem);
}

function ID(elem) {
    return document.getElementById(elem);
}
function init() {
    var szoveg = "<tr><th>típus</th><th>ár</th></tr>";
    for (let index = 0; index < autok.length; index++) {
        szoveg +="<tr><td>"+autok[index].auto+"</td>";
        szoveg +="<td>"+autok[index].ar+"</td></tr>";
        
    }
    ID("valami").innerHTML = szoveg;

    /****Formázás js-el****/
    /**inline stílusok használtával**/
    ID("valami").style.color="red";
    var tdTomb = document.querySelectorAll("td");
    for (let index = 0; index < tdTomb.length; index++) {
        tdTomb[index].style.backgroundColor="yellow"; 
    }
    //document.querySelectorAll("td")[1].style.backgroundColor="yellow";
    //tdTomb[2].style.color="green";

    document.querySelector("td:nth-child(2)").style.color = "green";
    document.querySelector("tr").addEventListener("mouseover",hatterszinAllitas);
    document.querySelector("tr").addEventListener("mouseout",hatterszinLeAllitas);

    /*Eseménykezelők*/
    /**ha a tr tagek fölé  viszem az egeret */
    /*  var trTomb = document.querySelectorAll("tr");
    for (let index = 0; index < trTomb.length; index++) {
        trTomb[index].addEventListener("mouseover",hatterszinAllitas(index));
        
    }*/
}

function hatterszinAllitas() {
    document.querySelector("tr").style.backgroundColor="gray";
    document.querySelector("tr").className="formazas";
}
function hatterszinLeAllitas() {
    document.querySelector("tr").style.backgroundColor="white";
    document.querySelector("tr").className="";
}
