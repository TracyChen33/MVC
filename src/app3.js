import $ from 'jquery'
import './app3.css'


const $quare = $('#app3 .square')

$quare.on('click',()=>{
  $quare.toggleClass('active')
})
