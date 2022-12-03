fetch('./assets/json/types.json')
    .then(response => response.json())
    .then(function (data) {
        let type1 = null;
        let type2 = null;
        // let allTypes = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

        document.querySelectorAll(".type-choice").forEach(e => {
            e.addEventListener("click", () => {

                if (type1 == null) {
                    type1 = e.dataset.type;
                    document.querySelector("." + type1).classList.add("disabled")
                    document.querySelector(".type1").innerText = type1
                    displayAffinities()
                } else {
                    type2 = e.dataset.type;
                    document.querySelectorAll(".type-choice").forEach(e => {
                        e.classList.add("disabled")
                    })
                    document.querySelector(".type2").innerText = type2;
                    displayAffinities();
                }
            })
        })

        let aff1;
        let aff2;

        function displayAffinities() {
            document.querySelectorAll(".affinity .types").forEach(e => {
                e.innerHTML = "";  
            })

            if (type2 == null) {
                data.forEach(e => {
                    if (e.type == type1) {
                        aff1 = e.affinities;
                    }
                })

                aff1.forEach(e => {
                    switch (e.value) {
                        case 2:
                            document.querySelector(".x2 .types").innerHTML += `<div class='type'><span>${e.type}</span></div>`
                            break;
                        case 1:
                            document.querySelector(".x1 .types").innerHTML += `<div class='type'><span>${e.type}</span></div>`
                            break;
                        case 0.5:
                            document.querySelector(".x05 .types").innerHTML += `<div class='type'><span>${e.type}</span></div>`
                            break;
                        case 0:
                            document.querySelector(".x0 .types").innerHTML += `<div class='type'><span>${e.type}</span></div>`
                            break;
                    }
                })

                // aff1.forEach(e => {
                // document.querySelector(".x1 .types").innerHTML += `<div class='type'><span>${f.type}</span></div>` 
                // })
            } else {
                let multiValue;

                data.forEach(e => {
                    if (e.type == type2) {
                        aff2 = e.affinities;
                    }
                })

                for(let i = 0; i < aff2.length; i++) {
                    multiValue = aff1[i].value * aff2[i].value;
                    switch (multiValue) {
                        case 4:
                            document.querySelector(".x4 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                        case 2:
                            document.querySelector(".x2 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                        case 1:
                            document.querySelector(".x1 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                        case 0.5:
                            document.querySelector(".x05 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                        case 0.25:
                            document.querySelector(".x025 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                        case 0:
                            document.querySelector(".x0 .types").innerHTML += `<div class='type'><span>${aff1[i].type}</span></div>`
                            break;
                    }
                }

            }
        }
    })