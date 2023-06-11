
const btn = document.querySelector('#submit-btn')

const mensaje = 'Campo requerido'

btn.addEventListener('click',(event) => {
  if(checkInputs()) window.alert('Producto creado con exito')
})

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

  input.addEventListener('input',(event) => {
    console.log(event.target.value)
    if(event.target.value === '') {
      setError(event.target,mensaje,true)
    }else {
      setError(event.target,'',false)
    }
  })

})

function checkInputs() {

  let emptyFieldsCounter = 0;

  inputs.forEach(input => {
    if(input.value === '') {
      emptyFieldsCounter++
      setError(input, mensaje, true)
    } else {
      setError(input, '', false)
    }
  })

  return emptyFieldsCounter === 0;
}

function setError(input, message, isError) {
  const group = input.parentElement
  const field = group.querySelector('input')
  const small = group.querySelector('small')
  if(isError) {
    small.className = 'visible'
    field.classList.add('error')
    small.innerText = message
  } else {
    if(small) small.className = 'hidden'
    field.classList.remove('error')
  }
} 
