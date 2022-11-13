let btn = document.querySelector('#btn')
let getIndex = document.querySelector('#city')
btn.addEventListener('click',function(){
  //let index = document.querySelector('#city').selectedIndex
  //alert(index)
  let valueSelected = getIndex.options[getIndex.selectedIndex].value
  alert(valueSelected)
})

var control = document.querySelector('#accept')
btn.addEventListener('click',function(){
  if (!(control.checked)) {
    alert('please read privacy policy')
  }
})