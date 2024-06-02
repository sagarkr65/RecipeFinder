// script.js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const apiKey = '628ae5b5ca9462b3f460093544ccab70';
const appId = '212c0595';

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal-list');
const mealDetailsModal = document.getElementById('meal-details-modal');
const recipeDetails = document.getElementById('recipe-details');

searchBtn.addEventListener('click', searchRecipes);

function searchRecipes() {
    const searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayRecipes(data.hits))
        .catch(error => console.log(error));
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach(recipe => {
        html += `
            <div class="meal-item" data-recipe="${encodeURIComponent(recipe.recipe.uri)}">
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <div class="meal-name">
                    <h3>${recipe.recipe.label}</h3>
                    <button class="recipe-btn">View Recipe</button>
                </div>
            </div>
        `;
    });
    mealList.innerHTML = html;

    // Add event listener to view recipe buttons
    const recipeBtns = document.querySelectorAll('.recipe-btn');
    recipeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const recipeURI = btn.parentElement.parentElement.dataset.recipe;
            fetchRecipeDetails(recipeURI);
        });
    });
}

function fetchRecipeDetails(recipeURI) {
    const decodedURI = decodeURIComponent(recipeURI);
    const encodedURI = encodeURIComponent(decodedURI);
    fetch(`https://api.edamam.com/search?r=${encodedURI}&app_id=${appId}&app_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch recipe details');
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                displayRecipeDetails(data[0]);
            } else {
                throw new Error('No recipe details found');
            }
        })
        .catch(error => console.error(error));
}



function displayRecipeDetails(recipe) {
    let html = `
        <h2>${recipe.label}</h2>
        <img src="${recipe.image}" alt="${recipe.label}">
        <p>${recipe.source}</p>
        <ul>
            ${recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <a href="${recipe.url}" target="_blank">Full Recipe</a>
    `;
    recipeDetails.innerHTML = html;
    mealDetailsModal.style.display = 'block';

    // Close modal
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        mealDetailsModal.style.display = 'none';
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === mealDetailsModal) {
        mealDetailsModal.style.display = 'none';
    }
});
const footer = document.querySelector('footer');

// Add event listener for window resize to adjust emoji pattern size
window.addEventListener('resize', () => {
  const footerHeight = footer.offsetHeight;
  footer.style.backgroundSize = `${footerHeight}px ${footerHeight}px`;
});

// Initial setup on page load
window.addEventListener('load', () => {
  const footerHeight = footer.offsetHeight;
  footer.style.backgroundSize = `${footerHeight}px ${footerHeight}px`;
});

gsap.from("#pg2 img",{
     scale:0.5,
     duration:2,
     rotate:360,
     delay:2,
     opacity:1,
     scrollTrigger:{
        trigger:"#pg2 img",
        scrub:3
     }
})

gsap.from("#pg3 #pg33",{
    x:-200,
    scale:1,
    opacity:5,
    scrollTrigger:{
        trigger:"#pg3 #pg33",
        scrub:4
    }
})
const tl=gsap.timeline();
tl.from("#faltu img" ,{
    scale:2,
    duration:2,
    rotate:360

})
tl.to("#faltu img" , {
    opacity:0,
    scale:25,
})
const tl1=gsap.timeline();
tl1.from("#nav1 img" ,{
    y:-100,
    duration:0.7,
    delay:2.2,
    scale:0.7
})
tl1.from("#nav1 h2" ,{
    y:-100,
    duration:0.5,
    scale:0.7
})
tl1.from("#nav2 #hm" ,{
    y:-100,
    duration:0.5,
    scale:0.7
})
tl1.from("#nav2 #abt" ,{
    y:-100,
    duration:0.5,
    scale:0.7
})
tl1.from("#nav2 button" ,{
    y:-100,
    duration:0.5,
    scale:0.7
})
tl1.from("#caption" ,{
    y:-200,
    duration:0.7,
    scale:0.7
})




