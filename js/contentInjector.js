var aboutBox = document.querySelector("#about");
var contactBox = document.querySelector("#contact");
aboutBox.addEventListener("click", function () {
    document.querySelector(".sidebar-box-container").innerHTML =
        "\n    <div class=\"sidebar-box box1\">\n        <div class=\"picture\"><img width=\"100px\" src=\"../img/Logo2 svart transparent.png\" alt=\"Eplak logo\"></div>\n        <div class=\"info\">\n            <h1>Eplak</h1>\n            <p>Founded: 2019</p>\n            <P>Currently the business is driven and owned by Christoffer Bjelke.\n        </div>\n    </div>\n\n    <div class=\"sidebar-box box2\">\n        <div class=\"picture\"><img width=\"100px\" src=\"../img/Logo2 svart transparent.png\" alt=\"Eplak logo\"></div>\n        <div class=\"info\">\n            <p>dette er box 2</p>\n        </div>\n    </div>\n    ";
});
contactBox.addEventListener("click", function () {
    document.querySelector(".sidebar-box-container").innerHTML =
        "\n    <div class=\"sidebar-box box1\">\n        <div class=\"info\">\n            <h1>Contact us!</h1>\n            <p>Eplak may be contacted via several channels. Probably the easiest way is via e-mail</p>\n        </div>\n    </div>\n    ";
});
