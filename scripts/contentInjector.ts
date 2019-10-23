let aboutBox = document.querySelector("#about")
let contactBox = document.querySelector("#contact")



aboutBox.addEventListener("click", () => {
    document.querySelector(".sidebar-box-container").innerHTML = 
    `
    <div class="sidebar-box box1">
        <div class="picture"><img width="100px" src="../img/Logo2 svart transparent.png" alt="Eplak logo"></div>
        <div class="info">
            <h1>Eplak</h1>
            <p>Founded: 2019</p>
            <P>Currently the business is driven and owned by Christoffer Bjelke.
        </div>
    </div>

    <div class="sidebar-box box2">
        <div class="picture"><img width="100px" src="../img/Logo2 svart transparent.png" alt="Eplak logo"></div>
        <div class="info">
            <p>dette er box 2</p>
        </div>
    </div>
    `
})

contactBox.addEventListener("click", () => {
    document.querySelector(".sidebar-box-container").innerHTML =
    `
    <div class="sidebar-box box1">
        <div class="info">
            <h1>Contact us!</h1>
            <p>Eplak may be contacted via several channels. Probably the easiest way is via e-mail</p>
        </div>
    </div>
    `
})