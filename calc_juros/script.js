document.getElementById('mediaForm').addEventListener('submit', function(event){
    event.preventDefault();

    var jurosaqui = document.getElementById("jurosaqui")
    var montanteaqui = document.getElementById("montanteaqui")
    var tempo = parseFloat(document.getElementById('tempo').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var capital = parseFloat(document.getElementById('capital').value);

    newtaxa = taxa / 100

    var tipojuros = document.getElementById('tipoMedia').value;
    var juros = 0
    var montante = 0

    if (tipojuros === 'Simples') {
        
        juros = tempo * newtaxa * capital

        montante = juros + capital


    } else if (tipojuros === 'Compostos') {

        montante = capital *(1 + newtaxa) **tempo 

        juros = montante - capital

    }

    jurosaqui.innerHTML = juros
    montanteaqui.innerHTML = montante

})