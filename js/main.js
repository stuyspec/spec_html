function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
        });
    }
}

ready(
    function() {
        var main = document.getElementsByTagName("main")[0];
        var header = document.getElementsByTagName("header")[0];
        main.addEventListener("scroll", function(e) {
            var main = e.target;
            var top = main.scrollTop;
            if (top >= 5) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        });
    });
