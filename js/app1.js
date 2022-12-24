$(document).ready(function(){
  $('li').click(function(){
    navigator.bluetooth.requestDevice({
      filters: [
        { services: ["heart_rate"] },
        { services:[0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']},
        { name: "Redmi Note 11 4G" },
        { namePrefix: "Redmi" },
        { namePrefix: "[LG]" },
      ]
    })
    .then(device => { console.log(device) })
    .catch(error => { console.error(error); })  
  })
})