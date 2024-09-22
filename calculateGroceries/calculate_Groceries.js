function addGroceries(){
    let g1 = parseFloat(document.getElementById('g1').value);
    let g2 = parseFloat(document.getElementById('g2').value);
    let g3 = parseFloat(document.getElementById('g3').value);
    g1 = g1? g1 : 0;
    g2 = g2? g2 : 0;
    g3 = g3? g3 : 0;
    let total = g1+g2+g3;
    document.getElementById("result").innerHTML = total;
}