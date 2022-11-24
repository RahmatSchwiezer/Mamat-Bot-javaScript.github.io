const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Hai, Kenalin gue Mamat Bot. Lu siape?",
        `Haiii ${data?.nama}, Umur berapa cuy?`,
        `Ohhh ${data?.umur}, Hobi elu apa sih?`,
        `njir sama, gue juga hobi ${data?.hobi}, eh ente jurusan apa?`,
        `ohhh ${data?.jurusan}, gue jurusan listrik nih, mari berteman ok?`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    }
    else if (init === 2) {
        botDelay({ umur: jawaban.value})
    }
    else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    }
    else if (init === 4) {
        botDelay({ jurusan: jawaban.value})
    }
    else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ usersData: usersData })
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `sippppp, tengkyu ${usersData[0]} dah mampir :)`
    jawaban.value = "love u mattt"
}

function botEnd() {
    window.location.reload()
}