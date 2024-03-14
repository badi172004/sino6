const func2 = ( image, ) => {
    let rightDiv = document.createElement("div")
    rightDiv.innerHTML = `
    <img class="stussy.jpg" src="./image/${image}" width="200" alt="">
    <div class="pic"></div>
    `

    rightDiv.className = "ClassR"


    return rightDiv;
}

export { func2 };