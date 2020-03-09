function readFile() {
    $('#year').text(new Date().getFullYear());

    //Scroll spy
    $('body').scrollspy({ target: '#main-nav' });

    //Smooth scroll
    $('#main-nav a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
};