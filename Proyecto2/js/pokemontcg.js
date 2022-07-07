let cargarDona = () => {
    fetch('https://api.pokemontcg.io/v1/cards/').then(response => response.json())
    .then(dat =>{
        console.log(dat)
        let  pokesto = 0
        let  trainer = 0
        let  energy = 0
        for(poke of dat.cards){
            if(poke.supertype=='Pokémon'){
                pokesto += 1
            }else if(poke.supertype=='Trainer'){
                trainer += 1
            }else if(poke.supertype=='Energy'){
                energy += 1
            }
        }


        var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
        var myChart6 = new Chart(ctx6, {
            type: "doughnut",
            data: {
                labels: ["Pokémon Card", "Pokémon Trainer", "Pokémon Energy"],
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 22, 22, .7)",

                        "rgba(235, 22, 22, .5)",

                        "rgba(235, 22, 22, .3)"
                    ],
                    data: [pokesto, trainer, energy]
                }]
            },
            options: {
                responsive: true
            }
        });
})
    .catch(console.error)
}

let cargarPie = () => {
    fetch('https://api.pokemontcg.io/v1/cards/').then(response => response.json())
    .then(dat =>{
        for(poke of dat.cards){
            if(poke.supertype=='Pokémon'){
                pokesto += 1
            }else if(poke.supertype=='Trainer'){
                trainer += 1
            }else if(poke.supertype=='Energy'){
                energy += 1
            }
        }

/*
        var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
        var myChart6 = new Chart(ctx6, {
            type: "doughnut",
            data: {
                labels: ["Pokémon Card", "Pokémon Trainer", "Pokémon Energy"],
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 22, 22, .7)",

                        "rgba(235, 22, 22, .5)",

                        "rgba(235, 22, 22, .3)"
                    ],
                    data: [pokesto, trainer, energy]
                }]
            },
            options: {
                responsive: true
            }
        });
        */
})
    .catch(console.error)
}




cargarDona()

/*const actuallyReturnAnObjectArrowFunction = () => ({
	hello: "world"
})
//console.log(actuallyReturnAnObjectArrowFunction())


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


*/



