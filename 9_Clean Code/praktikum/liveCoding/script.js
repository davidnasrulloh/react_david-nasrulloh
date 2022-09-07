function calculate() {
    // const bilangan1 = parseInt(document.getElementById("bilangan1").value);
    // const bilangan2 = parseInt(document.getElementById("bilangan2").value);

    const bilangan1 = +document.getElementById("bilangan1").value;
    const bilangan2 = +document.getElementById("bilangan2").value;

    const operasi = document.getElementById("operasi").value;
    const operasiB = document.getElementById("operasiB").value;

    let hasilOperasi = 0;
    if (operasi === "+") {
        hasilOperasi = bilangan1 + bilangan2;
    } else if (operasi === "-") {
        hasilOperasi = bilangan2 - bilangan2;
    } else if (operasi === "*") {
        hasilOperasi = bilangan1 * bilangan2;
    } else if (operasi === "/") {
        if (bilangan2 == 0) {
            alert("jangan 0 cuyyyyyyy");
            window.location.reload();
        } else {
            hasilOperasi = bilangan1 / bilangan2;
        }
    }

    if (operasiB === "persegi") {
        hasilOperasi = bilangan1 + bilangan2;
    } else if (operasiB === "segitiga") {
        hasilOperasi = 0.5 * (bilangan2 - bilangan2);
    } else if (operasiB === "ppanjang") {
        hasilOperasi = bilangan1 * bilangan2;
    }

    document.getElementById("hasil").innerHTML = hasilOperasi;
}

document.getElementById("nama").addEventListener("keydown", () => {
    const nama = document.getElementById("nama").value;
    document.getElementById("nama-kamu").innerHTML = nama;
});

document.getElementById("alamat").addEventListener("keydown", () => {
    const alamat = document.getElementById("alamat").value;
    document.getElementById("alamat-kamu").innerHTML = alamat;
});

document.getElementById("nomor").addEventListener("keydown", () => {
    const nomor = document.getElementById("nomor").value;
    document.getElementById("nomor-kamu").innerHTML = nomor;
});