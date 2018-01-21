!function(){
    // li 点击自动滚动
    let liTags = document.querySelectorAll('.topNavBar nav > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            liTags[i].classList.add('active')
        }
        liTags[i].onmouseleave = function () {
            liTags[i].classList.remove('active')
        }
    }

    // 导航动画
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (e) {
            var currentTop = window.scrollY
            var targetTop = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 80
            var time = Math.abs(Math.abs(currentTop - targetTop) / 100 * 300)
            if (time > 500) { time = 500 }
            var coords = { y: currentTop };
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, time)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        }
    }
}.call()

