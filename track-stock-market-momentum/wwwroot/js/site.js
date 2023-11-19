// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if ($(ele).prop("checked") == true) {
        $('body').addClass('dark-preview');
        $('body').removeClass('white-preview');
        $('nav').addClass('navbar-dark');
        $('nav').removeClass('navbar-light');
    }
    else if ($(ele).prop("checked") == false) {
        $('body').addClass('white-preview');
        $('body').removeClass('dark-preview')
        $('nav').addClass('navbar-light');
        $('nav').removeClass('navbar-dark');            ;
    }
}
