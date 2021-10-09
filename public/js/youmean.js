const   socket = io.connect('')
        mean = document.querySelector('.mean'),
        replacement = document.querySelector('.replacement'),
        message = document.getElementById('message');
message.addEventListener('keyup', () => socket.emit('converting', { message: message.value }) );
// setTimeout(() => {
    socket.on('converting', function(data){
        mean.hidden = false;
        replacement.innerHTML = data.message;
        replacement.onclick = () =>{
            mean.hidden = true;
            message.value = data.message
            replacement.innerHTML = '';

        };
    });
    
// });