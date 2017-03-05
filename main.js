$(document).ready(function() {
    
    var quote;
    var author;
    
    
       function getNewQuote() {
           $.ajax({                //*get API
              url: 'http://api.forismatic.com/api/1.0/',  //api link
               jsonp: 'jsonp',
               dataType: 'jsonp',
                  data: {
                  method: 'getQuote',
                  lang: 'en',
                  format: 'jsonp',
              },
            success: function(response) {
                quote = "\"" + response.quoteText +"\"";
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('- ' + author);
                } else {
                    $('#author').text('- Unknown Author');
                }
            }
           });
       } 
       getNewQuote(); 
    
    $('.get-quote').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });
    
    $('.share-quote').on('click', function(even) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
    })
    
});
    
    
  var images = ["bjj2.jpg", "bjj3.jpg", "bjj4.jpg", "bjj5.jpg","bjj6.jpg","bjj7.jpg","bjj8.jpg"];
        $(function () {
            var i = 0;
            $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
            setInterval(function () {
                i++;
                if (i == images.length) {
                    i = 0;
                }
                $("#dvImage").fadeOut(2000, function () {
                    $(this).css("background-image", "url(images/" + images[i] + ")");
                    $(this).fadeIn(2000);
                });
            }, 15000);
        });

