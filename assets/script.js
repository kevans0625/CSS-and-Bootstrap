// function backgroundGenerator() {
//     var APIKey = 'tv8PQMBLJYyDCn4l1hQbNUKhXBjEjdO9dBhE1BUkbog'; 
//     let search = 'wallpaper-website-development?color=black'
//     let queryURL = `https://api.unsplash.com/search/photos?query=${search}&client_id=${APIKey}`;
  
    
//     $.ajax({
//      url: queryURL,
//      method: "GET"
//     })
//     .then(function(response){
//         console.log(queryURL)
//         console.log(response)
     
//         var imageURL = response.results[0].urls.raw;
//         $(this).css("background-image:","url(" + imageURL +")")
//         console.log(imageURL)

     
//     })
//     } backgroundGenerator()

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });