const form = document.querySelector('#form');
const sendBtn = document.querySelector('#send-button');
      
sendBtn.addEventListener('click', function(event) {     
    if(form.checkValidity()){
        event.preventDefault();
      
        const data = new FormData();
        data.append("name", form.elements.name.value);
        data.append("phone", form.elements.phoneNumber.value);
        data.append("comment", form.elements.comment.value);
        data.append("to", "agetta18@gmail.com");
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
        xhr.responseType = 'json';
        xhr.send(data);
            
        var modal = new Overlay('#overlayTemplate');
        
        modal.toggleClsButtonVisibility();
        modal.openOverlay("Ожидайте");
        
        xhr.addEventListener('load', () => {
            modal.toggleClsButtonVisibility();
            modal.changeMessage(xhr.response.message);
        });
            
    };
    
});
    

