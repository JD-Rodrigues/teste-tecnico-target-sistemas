const number = document.querySelector('#input-number')

document.querySelector('#check-fibonacci-button').addEventListener('click', (e)=> {
    e.preventDefault()
    insertResultFibonacci(isInFibonacci, number.value)
    number.value = ""
})

function isInFibonacci(strNum) {
    const n = Number(strNum)

    let fib = [0, 1];

    let i = 2
    
    while(fib[fib.length-1] < n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++
    }

    return fib.includes(n)
    
}

function insertResultFibonacci(isInFibonacci, number) {
    const result = isInFibonacci(number);
    const resultArea = document.querySelector('#fibonacci-result');

    const resultMessage = result ? `O número 
            <span class="inserted-input-result">${number}</span>
            <span class="true-result">é</span>
            pertencente à Sequência de Fibonacci!`
            : `O número 
            <span class="inserted-input-result">${number}</span>
            <span class="false-result">não é</span>
            pertencente à Sequência de Fibonacci... ☹`;

    resultArea.innerHTML=resultMessage;
}
