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
    xhr.onreadystatechange = function (aEvt) {
        if (xhr.readyState == 4) {
            if (xhr.readyState == 200)
                console.log(request.responseText);
            else
                console.log('Error loading page\n');
            }
        }

  }
});
