!function(){
    let view = document.querySelector('#topNavBar')

    let controller = {
        view: null,
        init: function(view){
            this.view = view
            this.initSticky()
            this.bindEvent()
        },
        bindEvent: function(){
            let view = this.view
            window.addEventListener('scroll',(e) => {
                if(window.scrollY > 0){
                    this.active()
                } else{
                    this.deactive()
                }
            })
        },
        initSticky: function(){
            if(window.scrollY !== 0 ){
                this.view.classList.add('sticky')
            }
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        },
    }

    controller.init(view)
}.call()