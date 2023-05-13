// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = (num) => {
    let str = num.toString()
    let multiplier = 1
    let arr = []

    for(let i = 1; i <= str.length; i++){
        let digit = str[str.length - i]

        digit > 0 && arr.unshift(digit*multiplier)

        multiplier *= 10
    }

    return arr.join(" + ")
}

expandedForm(42)

//Solution 2

const expandedForm = (num) => {
    return num.toString().split("").reverse()
    .map((num, i) => num * Math.pow(10, i))
    .filter((num) => num > 0)
    .reverse().join(" + ")
}

expandedForm(42)