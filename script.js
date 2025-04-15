function louding(){

    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('picture')
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    msg.innerHTML = ` Agora são ${hour} hora(s) e ${min} minuto(s).`

    if (hour >= 0 && hour <=6 ) {
        // ta de madrugada vai dormir
        img.src = 'image/dawn.png'
        document.body.style.background = "linear-gradient(to top, #0511F2, #37538C, #3E608C, #D97D5B, #0D0D0D)"
    } else if (hour > 6 && hour <= 12){
        // bom dia
        document.body.style.background = "linear-gradient(to top, #F2AA6B, #F28963, #F2786D, #F2BBBB, #0D0D0D  "
        img.src = 'image/morning.png'
    } else if (hour <= 18){
        //boa tarde
        img.src = 'image/afternoon.png'
        document.body.style.background = "linear-gradient(to top, #F2EA7E, #F2E6D8, #A67A53,rgba(218, 22, 22, 0.81), #0D0D0D "
    } else {
        //boa noite 
        img.src = 'image/night.png'
        document.body.style.background = "linear-gradient(to top, #030A8C, #0656BF, #384A59, #D96907, #0D0D0D "
    }

}


//estamos usando var aqui para seguir a ordem dos ensinamentos do professor.