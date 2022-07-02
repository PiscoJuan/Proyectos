let cargarCartas = () => {
    fetch('https://api.pokemontcg.io/v2/cards/').then(response => response.json())
    .then(dat =>{
        //console.log(dat)
        let element= document.getElementById('elem')
        for(poke of dat.data){
            let tr= document.createElement('tr')
            let td0= document.createElement('td')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            td0.appendChild(document.createTextNode(poke.name))
            td1.appendChild(document.createTextNode(poke.hp))
            td2.appendChild(document.createTextNode(poke.number))
            td3.appendChild(document.createTextNode(poke.rarity))
            
            tr.appendChild(td0)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            element.appendChild(tr)
        }
})
    .catch(console.error)
}

let gardevoir =() =>{
    fetch('https://api.pokemontcg.io/v2/cards/').then(response => response.json())
    .then(dat =>{
        //console.log(dat)
        let element= document.getElementById('imagen')
        let img0= document.createElement('img')
        //console.log(element)
        //console.log(dat.data[210].images.large)
        img0.src = dat.data[210].images.small
        img0.alt = dat.data[210].name
        img0.width= 200
        element.appendChild(img0)
})
    .catch(console.error)
}


gardevoir()
//cargarCartas()