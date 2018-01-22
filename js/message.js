!function () {
    let model = {
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find()  // promise 对象
        },
        save: function(userName, content){
            // 创建一个表
            var Message = AV.Object.extend('Message');
            // 在表中创建一行
            var message = new Message();
            // 在创建的行中存入数据
            return message.save({ // promise 对象
                'userName': userName,
                'content': content,
            })
        },
        init: function(){
            var APP_ID = 'kFqWNLteC0VBQFf7rhFx5wjb-gzGzoHsz';
            var APP_KEY = 'Iwd2tEJfEgh0i2zW4K7n3dox';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        }
    }

    let view = document.querySelector('section.message')

    let controller = {
        view: null,
        messageList: null,
        form: null,
        model: null,
        init: function (view) {
            this.view = view
            this.model = model
            this.message = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')

            this.model.init()
            this.loadMessgaes()
            this.bindEvents()
        },
        loadMessgaes: function () {
            this.model.fetch().then(function (messages) {
                let array = messages.map((item) => { return item.attributes })
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = item.userName + ':' + item.content
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myform = this.form

            let userName = myform.querySelector('input[name=userName]').value
            let content = myform.querySelector('input[name=content]').value
            this.model.save(userName, content).then(function (object) {
                let userName = object.attributes.userName
                let content = object.attributes.content
                let li = document.createElement('li')
                li.innerText = `${userName}：${content}`
                document.querySelector('#messageList').appendChild(li)
                myform.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view)
}.call()


