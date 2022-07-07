const links =[
    "https://api.pokemontcg.io/v2/cards/?page=1", "https://api.pokemontcg.io/v2/cards/?page=2", "https://api.pokemontcg.io/v2/cards/?page=3", "https://api.pokemontcg.io/v2/cards/?page=4", "https://api.pokemontcg.io/v2/cards/?page=5"
]

let cargarPie = () => {
    fetch("https://api.pokemontcg.io/v2/cards/?page=8").then(response => response.json())
    .then(dat =>{
        console.log(dat)
        let  Colorless = 0
        let  Darkness = 0
        let  Dragon = 0
        let  Fairy = 0
        let  Fighting = 0
        let  Fire = 0
        let  Grass = 0
        let  Lightning = 0
        let  Metal = 0
        let  Psychic = 0
        let  Water = 0
        for(poke of dat.data){
            if(poke.types=='Colorless'){
                Colorless += 1
            }else if(poke.types=='Darkness'){
                Darkness += 1
            }else if(poke.types=='Dragon'){
                Dragon += 1
            }else if(poke.types=='Fairy'){
                Fairy += 1
            }else if(poke.types=='Fighting'){
                Fighting += 1
            }else if(poke.types=='Fire'){
                Fire += 1
            }else if(poke.types=='Grass'){
                Grass += 1
            }else if(poke.types=='Lightning'){
                Lightning += 1
            }else if(poke.types=='Metal'){
                Metal += 1
            }else if(poke.types=='Psychic'){
                Psychic += 1
            }else if(poke.types=='Water'){
                Water += 1
            }
        }
        let  arrayTipos = [Colorless, Darkness, Dragon, Fairy, Fighting, Fire, Grass, Lightning, Metal, Psychic, Water]
        console.log(arrayTipos)

        var ctx5 = $("#pie-chart").get(0).getContext("2d");
        var myChart5 = new Chart(ctx5, {
            type: "pie",
            data: {
                labels: ["Colorless", "Darkness", "Dragon", "Fairy", "Fighting", "Fire", "Grass", "Lightning", "Metal", "Psychic", "Water"],
                datasets: [{
                    backgroundColor: [
                        "rgba(255, 255, 255, .8)",
                        "rgba(10, 22, 22, .8)",
                        "rgba(218,165,32, .8)",
                        "rgba(255,20,147, .8)",
                        "rgba(255,140,0, .8)",
                        "rgba(255,0,0, .8)",
                        "rgba(127,255,0, .8)",
                        "rgba(255,255,0, .8)",
                        "rgba(192,192,192, .8)",
                        "rgba(138,43,226, .8)",
                        "rgba(0,191,255, .8)"
                    ],
                    data: arrayTipos
                }]
            },
            options: {
                responsive: true
            }
        });
    })
    .catch(console.error)
}

let cargarDona = () => {
    fetch("https://api.pokemontcg.io/v2/cards/?page=55").then(response => response.json())
    .then(dat =>{
        //console.log(dat)
        let  pokesto = 0
        let  trainer = 0
        let  energy = 0
        for(poke of dat.data){
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
                labels: ["Pokémon Card", "Trainer Card", "Energy Card"],
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 0, 0, .7)",

                        "rgba(255, 255, 255, .8)",

                        "rgba(255, 255, 255, .3)"
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

/*
async function conexion(links) {
    const response = await fetch(links)
    const data = await response.json()
    return data
}
async function pokeslista() {
    let listaTot=[]
    for(link of links){
        let dat = await conexion(link)
        console.log(dat.data)
        for(poke in dat.data){
            listaTot.push(poke.types)
        }
    }
    console.log(listaTot)
}

pokeslista()*/
cargarPie()
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



