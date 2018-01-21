!function(){
    findClosestAndRemoveOffset()
    
    window.addEventListener('scroll',(e) => {
        findClosestAndRemoveOffset()
    })
    
    
    /* helper */
    function findClosestAndRemoveOffset(){
        let specialTags = document.querySelectorAll('[data-anchor]')
        let minIndex = 0
        for(let i = 0;i < specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY )) {
                minIndex = i;         
            } 
        }
        specialTags[minIndex].classList.remove('offset')
        // 技能条动画
        if(specialTags[minIndex].id == 'skills'){
            specialTags[minIndex].classList.add('active')
        }
        
        // 2. 给该目标点的导航栏高亮
        let id = specialTags[minIndex].id
        let a = document.querySelector('[href="#' + id + '"]')
        let li = a.parentNode
        let allLi = li.parentNode.children
        for(let i = 0;i < allLi.length;i++){
            allLi[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()