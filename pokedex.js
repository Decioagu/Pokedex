// numero selecionadao pelo usuario
const num = document.getElementById("num");

function pokedex() {
    // "n" recebe "num" e converte para numero
    const n = parseInt(num.value);

    console.log(`valor =  ${num.value} ${typeof(num)}`)
    console.log(`valor =  ${n} ${typeof(n)}`)

    // teste 
    if (num.value.length == 0){
        alert('[ERRO] Falta valor "Digite um nÃºmero"');
    } else if (num.value > 151 || num.value < 1){
        alert('[ERRO] Valor deve ser entre 1 e 151');
    } else {
        // endereço "ULR"
        const ULR = `https://pokeapi.co/api/v2/pokemon/${n}/`;
        
        // "fetch" requisições HTTP atraves de Promises
        fetch(ULR)    
        .then(response => response.json())
        .then(data =>  {
            console.log(data['name']);
            console.log(data['sprites']['front_default']);
            console.log(data['id']);
            
            document.getElementById("nome").innerHTML = data['name'];
            document.getElementById("numero").innerHTML = data['id'];
            document.getElementById("imagem").setAttribute("src", data['sprites']['front_default']);            
        })
        .catch( err => console.log("Deu erro na busca, verefique endereço de URL: " + ULR + "\n" + err));

        console.log('===API===')
    }
}

function mostrarLista() {
    let lista = document.getElementById("lista");

    // "fetch" requisição HTTP atraves de Promises
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')    
    .then(response => response.json())
    .then(data =>  {
        const pokemons = data['results'];
         
        pokemons.map((pk,index)=>{
            // cria "li"
            const li = document.createElement('li');

            li.innerHTML = `${index + 1} - ${pk.name}`
            lista.appendChild(li)
            console.log(index, pk.name)
        });
    })
    .catch( err => console.log("Deu erro na busca, verefique endereÃ§o de URL: " + ULR + "\n" + err));
}
mostrarLista()