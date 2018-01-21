!function(){
    let view = document.querySelector('.topNavBar nav')

    let controller = {
        view: null,
        init: function(view){
            this.view = view        
            this.initAnimation()   
            this.bindEvents()         
        },
        initAnimation: function(){
            // 导航动画
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToTargetTop: function(targetTop){
            var time = Math.abs(Math.abs(window.scrollY - targetTop) / 100 * 300)
            if (time > 500) { time = 500 }
            var coords = { y: window.scrollY };
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, time)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindEvents: function(){
            let aTags = this.view.querySelectorAll('ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (e) => {
                    var targetTop = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 80
                    this.scrollToTargetTop(targetTop)
                }
            }
        },
    } 
    controller.init(view)
}()