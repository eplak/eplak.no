let aboutBox = document.querySelector("#about")
let contactBox = document.querySelector("#contact")


aboutBox.addEventListener("click", () => {
    document.querySelector(".sidebar-box").innerHTML = 
    `
    <div class="sidebar-content">
        <div class="picture"><img src="./img/Logo2 hvit transparent.png" alt="Eplak logo"></div>
        <div class="info">
            <h1>Eplak</h1>
            <p>Founded: 2019</p>
        </div>
    </div>
    `

})