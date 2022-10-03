var btns = document.querySelectorAll(".listaDeProjetos-slider-item");

btns.forEach(function(btn){

    btn.addEventListener('click', function(event){
        btns.forEach(function(btnRemoveClass){
            btnRemoveClass.classList.remove('listaDeProjetos-slider-item-ativo')
        })
        
        this.classList.add('listaDeProjetos-slider-item-ativo')
    })
})