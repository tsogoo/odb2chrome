$(document).ready(function(){
  navigator.bluetooth.requestDevice({
    filters: []
  })
  .then(device => { console.log(device) })
  .catch(error => { console.error(error); });
})