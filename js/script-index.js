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
var recipe = [];
function renderHighlightedRecipes(recipesArray) {
  for( var i in recipesArray){
    if(recipesArray[i]['highlighted'] === true){
      recipe.push(recipesArray[i]);
    }
  }
  renderRecipe(recipe);
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
  *var template = $('#recetas').html();
  *var item = $(template).clone();
  *item.show();
  *item.find('.title-recipe').text(recipe["title"]);
  *item.find('.author-recipe').text(recipe["name"]);
  *var imagen = recipe["url"].append();
  *item.find(".item-recipe").attr('srcset', recipe["url"]);
  *$('.list-recipes').append(item);
  */
    for(var i in recipe) {
    var titleRecipe = recipe[i].title;
    var authorRecipe = recipe[i].source.name;
    var imagen = recipe[i].name;
    //console.log(titleRecipe, authorName, image);
    $('.list-recipes').append('<a class="item-recipe" href="#">' +
                                '<span class="attribution">'+
                                  '<span class="title-recipe">'+ titleRecipe +'</span>' +
                                  '<span class="metadata-recipe">'+
                                    '<span class="author-recipe">'+ authorRecipe +'</span>' +
                                    '<span class="bookmarks-recipe">' +
                                      '<span class="icon-bookmark"></span>' +
                                    '</span>' +
                                  '</span>' +
                                '</span>' +
                                '<img src="img/recipes/320x350/' + imagen + '.jpg' + '"/>' +
                              '</a>');
    }
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


