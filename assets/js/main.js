const $select = document.querySelector('.select')
const $options = document.querySelector('.options')
const $selectContent =document.querySelector('.select__content')
const $optionsO = document.querySelectorAll('.option__content')


$select.addEventListener('click',()=>{
    $select.classList.toggle('active')
    $options.classList.toggle('active')

})

$optionsO.forEach(opcion =>{
    opcion.addEventListener('click',()=>{
        const cloneContent = opcion.cloneNode(true)
        console.log(cloneContent.innerHTML);
        $selectContent.innerHTML = cloneContent.innerHTML
    $select.classList.toggle('active')
    $options.classList.toggle('active')


    })
})

 