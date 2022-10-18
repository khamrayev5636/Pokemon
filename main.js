var list = document.querySelector(".list");
var elBody = document.querySelector("body");

elBody.classList.add("body-js")


for(var pokemon of pokemons){

    list.classList.add("list-js");
    
    var newItem = document.createElement("li");
    newItem.classList.add("item-js");

    var newTitle = document.createElement("h3");
    var newBlock = document.createElement("div");
    newBlock.classList.add("title-js");

    var newNum = document.createElement("span");
    newNum.classList.add("num-js")

    var newImg = document.createElement("img");
    newImg.classList.add("img-js")

    var newTime = document.createElement("time");
    newTime.classList.add("time-js");

    var newText = document.createElement("p");
    newText.classList.add("text-js");

    // Har bir elementga qiymat berish

    newTitle.textContent = pokemon.name;
    newNum.textContent = pokemon.num;
    newImg.src = pokemon.img;
    newImg.width = "100";
    newImg.height = "100";
    newImg.alt = pokemon.name;
    newTime.textContent = pokemon.spawn_time;
    newText.textContent = pokemon.candy;

    // Har bir elementi li ni ichiga qushib chiqish

    // newBlock.appendChild(newTitle)
    newBlock.appendChild(newTitle);
    newItem.appendChild(newBlock);
    newItem.appendChild(newNum);
    newItem.appendChild(newImg);
    newItem.appendChild(newTime);
    newItem.appendChild(newText);


    list.appendChild(newItem);

}
