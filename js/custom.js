$(document).ready(function() {

    const nav     = $('#mainMenu');
    const about   = $('#about');
    const knowledge   = $('#knowledge');
    const experience   = $('#experience');
    const header  = $('#header');
    const headerH = header.height();

    var waypointAbout = new Waypoint({
        element: about,
        handler: function(direction) {
            if(direction === 'down') {
                $('.menu-item').removeClass('active');
                $('a[data-item="knowledge"]', nav).addClass('active');
            }
            else {
                $('.menu-item').removeClass('active');
                $('a[data-item="experience"]', nav).addClass('active');
            }
        },
        offset: headerH
    });

    var waypointAgenda = new Waypoint({
        element: agenda,
        handler: function(direction) {
            if(direction === 'down') {
                $('.menu-item').removeClass('active');
                $('a[data-item="agenda"]', nav).addClass('active');
            }
            else {
                $('.menu-item').removeClass('active');
                $('a[data-item="evento"]', nav).addClass('active');
            }
        },
        offset: headerH
    });

    

});
