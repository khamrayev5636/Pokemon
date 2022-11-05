const elList = document.querySelector(".list-js");
const elBody = document.querySelector("body");
const elTemplate = document.querySelector(".template-pok").content;
const elFragment = document.createDocumentFragment();

// Form 

const elForm = document.querySelector(".form");
const elSearch = elForm.querySelector(".search-js");
const elSelect = elForm.querySelector(".select-js");
elBody.classList.add("body-js");


// DOMga chizish

function renderPokimon(cartoon){
    
    elList.innerHTML = ""
    
    cartoon.forEach(item => {
        
        const elClone = elTemplate.cloneNode(true);
        
        elClone.querySelector(".title-js").textContent = item.name;
        elClone.querySelector(".num-js").textContent = item.num;
        elClone.querySelector(".img-js").src = item.img;
        elClone.querySelector(".time-js").textContent = item.spawn_time;
        elClone.querySelector(".text-js").textContent = item.weaknesses;
        
        elFragment.appendChild(elClone);
    });
    
    elList.appendChild(elFragment);
};


// Form orqali search qilish

elForm.addEventListener("submit" , function(evt) {
    evt.preventDefault();
    
    const elSearchValue = elSearch.value.trim();
    const elSelectValue = elSelect.value;
    
    const elRegPokemon = new RegExp(elSearchValue , "gi");
    
    const elCartoonSearch = pokemons.filter(element => (element.name.match(elRegPokemon) && ( element.weaknesses.includes(elSelectValue) || elSelectValue === "All")));
    
    
    if(elCartoonSearch.length > 0){
        renderPokimon(elCartoonSearch)
    }else {
        alert("No such cartoon found!❌❌❌")
    };
    
});


// ElSelect orqali qidirish

function renderSelect(pok){
    
    const selectArr = [];
    
    pok.forEach(list => {
        
        list.weaknesses.forEach(et => {
            if(!selectArr.includes(et)){
                selectArr.push(et);
            };
        });
        
    });

    const selectFragment = document.createDocumentFragment();

    selectArr.forEach(option => {

        const elOption = document.createElement("option");

        elOption.value = option;
        elOption.textContent = option;

        selectFragment.appendChild(elOption);
    });

    elSelect.appendChild(selectFragment);
    
};

renderSelect(pokemons);
renderPokimon(pokemons);





