jQuery(document).ready(function(){
    // $('body').html('<img src="https://placehold.it/1000/1000">');
    $('#books').html('<div class="loader center"></div>');

    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var booksHTML = response.data.map(function(book){
                // console.log(book);
                // return $('<p>')
                //     .addClass('book')
                //     .data('book', book.id)
                //     .html(book.title);
            return '<li class="book list-group-item" data-book="'+book.id+'">' + 
                book.title + '</li>' ;
            });
            // console.log(booksHTML);
            $('#books').html(booksHTML);


        });

        $('body').on('click', '.book', function(){
            var id = $(this).data('book');
            var url = 'http://csc225.mockable.io/movies/' + id;

            axios.get(url).then(function(response){
                var book = response.data;
                var bookHTML = '<p>' + book.author + '</p>';
                bookHTML += '<p>' + book.title + '</p>';
                bookHTML += '<p>' + book.language + '</p>';
                bookHTML += '<a href="' + book.link + '">[LINK]</a>';
                $('#current-book').html(bookHTML);
                
            })

        });



        // console.log('i come after the request');
});