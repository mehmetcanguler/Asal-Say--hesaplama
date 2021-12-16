const hesapla = document.querySelector("#hesapla");
hesapla.addEventListener('click', function () {


    const girilenSayi = document.querySelector("#girilenSayi").value;
    let sonuc = 0;

    for (let i = 2; i < girilenSayi; i++) {

        if (girilenSayi % i == 0) {
            const p = document.createElement("P");
            p.textContent = girilenSayi + " sayısı  asal sayı değildir";
            sonuc = 1;
            p.className = "asalDegil";
            const div = document.querySelector("#div1");

            div.appendChild(p)
            //remove
            const removeAll = document.querySelector("#temizle")
            removeAll.addEventListener("click", function () {
                p.remove(); 
            })
            const remove = document.querySelector("#temizle2")
            remove.addEventListener("click", function () {
                p.remove();
            })
            break;
        }

    }
    if (sonuc == 0) {
        const p = document.createElement("P");
        p.textContent = girilenSayi + " sayısı  asal sayıdır";
        sonuc = true;
        const div = document.querySelector("#div1");
        p.className = "asalSayi";

        div.appendChild(p)
        //remove
        const removeAll = document.querySelector("#temizle2")
        removeAll.addEventListener("click", function () {
            p.remove();
        })

    }



})

