import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
    let cross = $( ".cross" );
    let menu = $( ".menu" );
    let hamburger = $( ".hamburger" );

    cross.hide();
    menu.hide();
    hamburger.click(function() {
        menu.slideToggle( 100, function() {
            hamburger.hide();
            cross.show();
        });
    });

    cross.click(function() {
        menu.slideToggle( 100, function() {
            cross.hide();
            hamburger.show();
        });
    });
});
