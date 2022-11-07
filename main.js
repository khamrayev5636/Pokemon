const elList = document.querySelector(".list-js");
const elBody = document.querySelector("body");
const elTemplate = document.querySelector(".template-pok").content;
const elFragment = document.createDocumentFragment();

// Form 

const elForm = document.querySelector(".form");
const elSearch = elForm.querySelector(".search-js");
const elSelect = elForm.querySelector(".select-js");
const elSelectSort = elForm.querySelector(".form-select-sort");
elBody.classList.add("body-js");


// DOMga chizish

function renderPokimon(cartoon){
    
    elList.innerHTML = ""
    
    cartoon.forEach(item => {
        
        const elClone = elTemplate.cloneNode(true);
        
        elClone.querySelector(".title-js").textContent = item.name;
        elClone.querySelector(".num-js").textContent = item.num;
        elClone.querySelector(".img-js").src = item.img;
        elClone.querySelector(".weight-js").textContent = item.weight;
        elClone.querySelector(".time-js").textContent = item.spawn_time;
        elClone.querySelector(".text-js").textContent = item.weaknesses.join(", ");
        
        elFragment.appendChild(elClone);
    });
    
    elList.appendChild(elFragment);
};

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


// ElSort 


function renderSort(pokemon,value){

    if(value == "a-z"){
        pokemon.sort((a , b) => {
            if(a.name > b.name){
               return 1
            }else if(a.name < b.name){
                return -1;
            }
            return 0;
        });
    };

    if(value == "z-a"){
        pokemon.sort((a , b) => {
            if(a.name > b.name){
               return -1
            }else if(a.name < b.name){
                return 1;
            }
            return 0;
        });
    };

    if(value === "light"){
        pokemon.sort((a , b) => parseFloat(a.weight) - parseFloat(b.weight));
    };

    if(value === "weight"){
        pokemon.sort((a , b) => parseFloat(b.weight) - parseFloat(a.weight));
    };  
};

// Form orqali search qilish

elForm.addEventListener("submit" , function(evt) {
    evt.preventDefault();
    
    const elSearchValue = elSearch.value.trim();
    const elSelectValue = elSelect.value;
    const elSelectSortValue = elSelectSort.value;
    
    const elRegPokemon = new RegExp(elSearchValue , "gi");
    
    const elCartoonSearch = pokemons.filter(element => (element.name.match(elRegPokemon) && ( element.weaknesses.includes(elSelectValue) || elSelectValue === "All")));
    
    
    if(elCartoonSearch.length > 0){
        renderSort(elCartoonSearch ,elSelectSortValue)
        renderPokimon(elCartoonSearch)
    }else {
        alert("No such cartoon found!❌❌❌")
    };
    
});

renderSelect(pokemons);
renderPokimon(pokemons);





