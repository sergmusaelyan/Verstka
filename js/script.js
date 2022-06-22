passeye1.addEventListener('click', myf)
passeye3.addEventListener('click', myfunction)
passeye2.addEventListener('click', fun)
passeye4.addEventListener('click', func)

function myf(){
    passeye1.style.display = 'none'
    passeye3.style.display = 'block'
    form3Example1m1.type = 'text'
}

function myfunction(){
    passeye1.style.display = 'block'
    passeye3.style.display = 'none'
    form3Example1m1.type = 'password'
}

function fun(){
    passeye2.style.display = 'none'
    passeye4.style.display = 'block'
    form3Example1n1.type = 'text'
}

function func(){
    passeye2.style.display = 'block'
    passeye4.style.display = 'none'
    form3Example1n1.type = 'password'
}