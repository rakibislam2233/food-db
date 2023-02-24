const getItemName = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>loadData(data.meals))
}
const loadData = (data) =>{
    const rakib = data;
    const rakib2 = rakib.slice(0,6);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ''
   for(let datas of rakib2){
    const div = document.createElement("div");
    div.innerHTML= `
    <div class="card card-side bg-base-100 shadow-xl">
    <figure><img class="w-[90%] h-[80%] rounded" src="${datas.strMealThumb}" alt="Movie"/></figure>
    <div class="card-body">
      <h2 class="card-title text-2xl">${datas.strMeal}</h2>
      <p class="text-xl">There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions">
      <label onclick="displayModal(${datas.idMeal})" for="my-modal-6" class=" btn border-none bg-amber-500">View Details</label>
      </div>
    </div>
  </div> 
    `
    cardContainer.appendChild(div)
   }
}
document.getElementById("btn").addEventListener("click",()=>{
    const input = document.getElementById("input");
    const inputvalue = input.value;
    getItemName(inputvalue)
    input.value = ''

})
const displayModal = (idMeals) =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
   fetch(url)
   .then(res=>res.json())
   .then(id =>displayData(id.meals[0]))
}
const displayData = (data) =>{
   document.getElementById("image").setAttribute("src",data.strMealThumb);
   document.getElementById("name").innerText = data.strMeal;
   document.getElementById("category").innerText = data.strCategory;
   document.getElementById("Area").innerText = data.strArea;
   document.getElementById("Instructions").innerText =data.strInstructions;
   
   document.getElementById("Youtube").href = data.strYoutube;
   document.getElementById("Youtube").innerText = data.strYoutube;
   document.getElementById("Youtube").target= "_blank";
}
let click = true;
const showAll = document.getElementById("showAll").addEventListener("click",()=>{
    if(click){
        const getItemName = (search) =>{
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            fetch(url)
            .then(res =>res.json())
            .then(data =>loadData(data.meals))
        }
        const loadData = (data) =>{
            const rakib = data;
            const rakib2 = rakib.slice(7,rakib.length);
            console.log(rakib2);
            const cardContainer = document.getElementById("card-container");
            cardContainer.innerHTML = ''
           for(let datas of rakib2){
            const div = document.createElement("div");
            div.innerHTML= `
            <div class="card card-side bg-base-100 shadow-xl">
            <figure><img class="w-[90%] h-[80%] rounded" src="${datas.strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title text-2xl">${datas.strMeal}</h2>
              <p class="text-xl">There are many variations of passages of available, but the majority have suffered</p>
              <div class="card-actions">
              <label onclick="displayModal(${datas.idMeal})" for="my-modal-6" class=" btn border-none bg-amber-500">View Details</label>
              </div>
            </div>
          </div> 
            `
            cardContainer.appendChild(div)
           }
        }
        document.getElementById("btn").addEventListener("click",()=>{
            const input = document.getElementById("input");
            const inputvalue = input.value;
            getItemName(inputvalue)
            input.value = ''
        
        })
        const displayModal = (idMeals) =>{
           const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
           fetch(url)
           .then(res=>res.json())
           .then(id =>displayData(id.meals[0]))
        }
        const displayData = (data) =>{
           document.getElementById("image").setAttribute("src",data.strMealThumb);
           document.getElementById("name").innerText = data.strMeal;
           document.getElementById("category").innerText = data.strCategory;
           document.getElementById("Area").innerText = data.strArea;
           document.getElementById("Instructions").innerText =data.strInstructions;
           
           document.getElementById("Youtube").href = data.strYoutube;
           document.getElementById("Youtube").innerText = data.strYoutube;
           document.getElementById("Youtube").target= "_blank";
        }
        getItemName('chi')
        click = false;
        let showAll = document.getElementById("showAll")
        showAll.innerText = "Show Off"
    }else{
        const getItemName = (search) =>{
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            fetch(url)
            .then(res =>res.json())
            .then(data =>loadData(data.meals))
        }
        const loadData = (data) =>{
            const rakib = data;
            const rakib2 = rakib.slice(0,6);
            const cardContainer = document.getElementById("card-container");
            cardContainer.innerHTML = ''
           for(let datas of rakib2){
            const div = document.createElement("div");
            div.innerHTML= `
            <div class="card card-side bg-base-100 shadow-xl">
            <figure><img class="w-[90%] h-[80%] rounded" src="${datas.strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title text-2xl">${datas.strMeal}</h2>
              <p class="text-xl">There are many variations of passages of available, but the majority have suffered</p>
              <div class="card-actions">
              <label onclick="displayModal(${datas.idMeal})" for="my-modal-6" class=" btn border-none bg-amber-500">View Details</label>
              </div>
            </div>
          </div> 
            `
            cardContainer.appendChild(div)
           }
        }
        document.getElementById("btn").addEventListener("click",()=>{
            const input = document.getElementById("input");
            const inputvalue = input.value;
            getItemName(inputvalue)
            input.value = ''
        
        })
        const displayModal = (idMeals) =>{
           const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`
           fetch(url)
           .then(res=>res.json())
           .then(id =>displayData(id.meals[0]))
        }
        const displayData = (data) =>{
           document.getElementById("image").setAttribute("src",data.strMealThumb);
           document.getElementById("name").innerText = data.strMeal;
           document.getElementById("category").innerText = data.strCategory;
           document.getElementById("Area").innerText = data.strArea;
           document.getElementById("Instructions").innerText =data.strInstructions;
           
           document.getElementById("Youtube").href = data.strYoutube;
           document.getElementById("Youtube").innerText = data.strYoutube;
           document.getElementById("Youtube").target= "_blank";
        }
        getItemName("chi")
        click = true;
        let showAll = document.getElementById("showAll")
        showAll.innerText = "Show All"

    }
  
    



})
getItemName("chi")