import React from 'react'
import "./index.css"
import Input from './Input'

const App = () => {
  const solve = document.querySelector('h3')

  const buttons = document.querySelectorAll('.button')
  
  const equal = document.querySelector('#equal')
  
  const result = document.querySelector('h1')
  
  const clear = document.querySelector('.clear')
  const del = document.querySelector('.del')
  const percentage = document.querySelector('#perc')
  
  
  buttons.forEach((button) => {
      button.addEventListener('click', ()=>{
         solve.textContent += button.textContent
      })
  })
  
  
  equal.addEventListener('click', ()=>{
  
    result.textContent = eval(solve.textContent)
     
  })
  
  clear.addEventListener('click', ()=>{
      solve.textContent = " "
      result.textContent = " "
  })
  
  del.addEventListener('click', ()=>{
      solve.textContent = solve.textContent.slice(0, -1)
  })
  
  percentage.addEventListener('click', ()=>{
      let myResult = parseFloat(solve.textContent)
      result.textContent = myResult / 100
  })
  return(
    <div>
     <Input/>

    </div>
  )
}

export default App