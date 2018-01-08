$(document).ready( function(){
  /*
  *ocultar icono back
  */
  $('.js-back').hide();
  /*
  *asignar texto nuevas recetas en printNews
  */
  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

});
/*
*funcion agrega texto nuevas recetas
*/
function printNews(){
  $('#print').append('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  for( var i in recipesArray){
    if(recipesArray[i]['highlighted'] === true){
      renderRecipe(recipesArray[i]);
    }
  }
  console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
  /*
  *guardo en una variable el template
  */
  var template = $('#recetas').html();

/*
*se clona para poderlo modificar...
*/
var item = $(template).clone();
//habia ocultado el div en el html, ahora lo muestro
item.show();
/*
*se modifica lo que sea necesario...
*/
item.find('.title-recipe').text(recipe["title"]);
/*
*y se incrusta donde se quiera
*/
$('.list-recipes').append(item);

}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  
}


