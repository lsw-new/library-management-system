document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('page-loader');
    var main = document.getElementById('main-content');

    function revealPhase(group, baseDelay) {
        var els = document.querySelectorAll('[data-reveal="' + group + '"]');
        els.forEach(function (el) {
            var d = parseInt(el.getAttribute('data-delay') || '0', 10);
            setTimeout(function () {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
            }, baseDelay + d * 150);
        });

        var maxDelay = 0;
        els.forEach(function (el) {
            var d = parseInt(el.getAttribute('data-delay') || '0', 10);
            if (d > maxDelay) maxDelay = d;
        });
        return baseDelay + (maxDelay + 1) * 150 + 400;
    }

    window.addEventListener('load', function () {
        setTimeout(function () {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(function () {
                loader.style.display = 'none';
                main.style.opacity = '1';

                var t1 = revealPhase('hero', 100);
                revealPhase('bookspine', t1);
                revealPhase('services', t1);
            }, 500);
        }, 300);
    });
});
