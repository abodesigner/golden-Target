/*global console,$*/
$(document).on('click', '.navbar-collapse.in', function (e) {
    'use strict';
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});