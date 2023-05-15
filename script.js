let generate = () => {
    let num = Math.floor((Math.random() * 10) + 1)
    document.getElementById("number").innerHTML = `Generated Number: ${num}`
}