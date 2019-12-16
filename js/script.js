jQuery(document).ready(function(){
    // $('body').html('<img src="https://placehold.it/1000/1000">');
    $('#movies').html('<div class="loader center"></div>');

    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var moviesHTML = response.data.map(function(movie){
              
            return '<li class="movie list-group-item" data-movie="'+movie.id+'">' + 
                movie.title + '</li>' ;
            });
            $('#movies').html(moviesHTML);


        });

        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'http://csc225.mockable.io/movies/' + id;
            $('#current-movie').html('<div class="loader center"></div>');
            axios.get(url).then(function(response){
                var movie = response.data;
                var movieHTML = '<p>Titel: ' + movie.title + '</p>';
                movieHTML += '<p> Director: ' + movie.director + '</p>';
                movieHTML += '<p> Release: ' + (movie.release ? movie.release : "N/A") + '</p>';
                movieHTML += '<img class="poster" src="' + movie.poster + '">';
                $('#current-movie').html(movieHTML);
                
            })

        });
});