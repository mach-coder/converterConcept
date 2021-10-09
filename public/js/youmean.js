const   socket = io.connect('http://localhost:3000')
        mean = document.querySelector('.mean'),
        replacement = document.querySelector('.replacement'),
        message = document.getElementById('message');
    console.log(socket);
message.addEventListener('keyup', function(){
    socket.emit('converting', {
      message: message.value
    });
});
setTimeout(() => {
    socket.on('converting', function(data){
        console.log(data);
        mean.hidden = false;
        replacement.innerHTML = data.message;
        replacement.onclick = () =>{
            mean.hidden = true;
            message.value = data.message
            replacement.innerHTML = '';

        };
    });
    
});