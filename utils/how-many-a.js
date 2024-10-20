const string = document.querySelector('#input-string')

document.querySelector('#check-a-button').addEventListener('click', (e)=> {
    e.preventDefault()
    insertResultA(countA, string.value)
    string.value = ""
})

function countA(str) {
    const strArr = str.toLowerCase().split("");
    console.log(strArr)

    let howManyA = 0

    strArr.forEach(letter => {
        letter === "a" && howManyA++
    });

    return howManyA;
    
}

function insertResultA(countA, string) {
    const result = countA(string);
    const resultArea = document.querySelector('#count-a-result');

    const resultMessage = `O número de letras
            <span class="inserted-input-result">"a"</span> existentes na string <span class="inserted-string">${string}</span>
            é <span class="true-result">${result}</span>.`

    resultArea.innerHTML=resultMessage;
}

