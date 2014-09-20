/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    $('.slideshow-image-thumbs img').click(function(e) {
        $('.image-main').attr('src', e.target.src).fadeOut(0).fadeIn('slow');
    });
});

