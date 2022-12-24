$(document).ready(function(){
  $('li').click(function(){
    navigator.bluetooth.requestDevice({
      filters: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']
    })
    .then(device => { console.log(device) })
    .catch(error => { console.error(error); })  
  })
})