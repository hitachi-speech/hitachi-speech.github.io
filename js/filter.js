var years, categories, filterByYear;

function keywordSearch(text, query) {
    var i;
    var queries = query.split(' ');
    for (i = 0; i < queries.length; i++) {
        if (text.indexOf(queries[i]) <= -1) {
            return false;
        }
    }
    return true;
}

function filter() {
    var currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    $('html, body').animate({
        'scrollTop': Math.min($('header').offset().top + $('header').outerHeight(true), currentScrollPosition)
    }, 0);

    var i;
    var query = document.getElementById('filterByQuery').value.toLowerCase();

    var yearRange = document.getElementById("filterByYear").noUiSlider.get();
    var yearList = "";
    for (i = yearRange[0]; i <= yearRange[1]; i++) {
        if (yearList.length > 0) {
            yearList += ",";
        }
        yearList += "." + parseInt(i);
    }

    $('li').filter("." + parseInt(i)).show();
    var categories = document.getElementsByName("categories");
    var checkedList = "";
    for (i = 0; i < categories.length; i++) {
        if (categories[i].checked) {
            if (checkedList.length > 0) {
                checkedList += ",";
            }
            checkedList += "." + categories[i].id;
        }
    }

    $('li').hide();
    if (query.length > 0) {
        if (checkedList.length > 0) {
            $('li').filter(checkedList).filter(yearList).filter(function() {
                $(this).toggle(keywordSearch($(this).text().toLowerCase(), query))
            }).show();
        } else {
            $('li').filter(yearList).filter(function() {
                $(this).toggle(keywordSearch($(this).text().toLowerCase(), query))
            }).show();
        }
    } else {
        if (checkedList.length > 0) {
            $('li').filter(checkedList).filter(yearList).fadeIn();
        } else {
            $('li').filter(yearList).fadeIn();
        }
    }
}

window.onload = function() {
    document.getElementById('filterByQuery').value = "";

    slider = document.getElementById("filterByYear");
    noUiSlider.create(slider, {
        start: [2015, 2020],
        step: 1,
        connect: true,
        orientation: 'horizontal',
        behaviour: 'tap-drag',
        range: {
            'min': 2015,
            'max': 2020
        },
        pips: {
            mode: 'steps',
        }
    });
    slider.noUiSlider.on('end', filter);

    var categories = document.getElementsByName("categories");
    for (var i = 0; i < categories.length; i++) {
        categories[i].checked = false;
        categories[i].addEventListener("change", filter);
    }
    filter();
}
