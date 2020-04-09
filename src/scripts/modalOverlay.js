function Overlay(templateSelector) {
    const template = document.querySelector(templateSelector);
    const overlay = createOverlay(template);
    const backGround = overlay.querySelector('.overlay');
    const msgContainer = overlay.querySelector('.modal__title');
    const closeBtn = overlay.querySelector('button');
        
    function createOverlay() {
        let overlay = document.createElement('div');
        overlay.innerHTML = template.innerHTML;
        return overlay;
    }
      
       
    this.openOverlay = (message) => {
        document.body.appendChild(overlay);
        msgContainer.textContent = message;   
    }
      
    this.closeOverlay = () => {
        document.body.removeChild(overlay);    
    }
      
    this.changeMessage = (newMessage) => {
        msgContainer.textContent = newMessage;
    }
      
    var eventHandler =  (e) => {
        e.preventDefault();
        if(e.target === closeBtn || e.target === backGround) {
        this.closeOverlay();
        }
    }
      
    var isCloseBtnVisible = true;
      
    this.toggleClsButtonVisibility = () => {  
        if(isCloseBtnVisible) {
            closeBtn.style.display = 'none';
            isCloseBtnVisible = false;
            overlay.removeEventListener('click', eventHandler);
        } else {
            closeBtn.style.display = '';
            isCloseBtnVisible = true;
            overlay.addEventListener('click', eventHandler);
        }
    }
      
    overlay.addEventListener('click', eventHandler);
      
    }