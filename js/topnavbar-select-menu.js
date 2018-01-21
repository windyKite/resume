!function(){
    let view = document.querySelectorAll('.topNavBar nav > ul > li')

    let controller = {
        view: null,
        init: function(){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            for (let i = 0; i < this.view.length; i++) {
                this.view[i].onmouseenter = (e) => {
                    this.active(e.currentTarget)
                }
                this.view[i].onmouseleave = (e) => {
                    this.deactive(e.currentTarget)
                }
            }
        },
        active: function(element){
            element.classList.add('active')
        },
        deactive: function(element){
            element.classList.remove('active')
        },
    }

    controller.init(view)
}()