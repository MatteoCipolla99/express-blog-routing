const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog!')
})

app.get('/bacheca', (req, res) => {
    res.json(
        [
            {
                title: "Viaggio in Giappone: un'avventura indimenticabile",
                content: "Scopri le bellezze del Giappone, tra tradizione e modernità. Dai templi di Kyoto ai grattacieli di Tokyo.",
                image: "/img/ciambellone.jpeg",
                tags: ["viaggi", "Giappone", "avventura", "cultura"]
            },
            {
                title: "Le migliori ricette per una cena veloce",
                content: "Hai poco tempo? Prova queste ricette rapide e gustose per stupire i tuoi ospiti senza stress.",
                image: "/img/cracker_barbabietola.jpeg",
                tags: ["cucina", "ricette veloci", "cena", "gastronomia"]
            },
            {
                title: "Tecnologie emergenti del 2025",
                content: "Un'analisi delle tecnologie più innovative che stanno rivoluzionando il nostro futuro.",
                image: "/img/pasta_barbabietola.jpeg",
                tags: ["tecnologia", "innovazione", "futuro", "startup"]
            },
            {
                title: "10 libri da leggere almeno una volta nella vita",
                content: "Una lista di capolavori letterari che ogni appassionato di lettura dovrebbe conoscere.",
                image: "/img/pane_fritto_dolce.jpeg",
                tags: ["libri", "lettura", "cultura", "classici"]
            },
            {
                title: "Allenamento a casa: guida per principianti",
                content: "Non hai tempo per la palestra? Ecco un programma di allenamento semplice da fare a casa.",
                image: "/img/torta_paesana.jpeg",
                tags: ["fitness", "allenamento", "salute", "casa"]
            }
        ]
    )
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})