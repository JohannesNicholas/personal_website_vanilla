
async function sendMessage(ev) {

    snackbar("snackbar_sending");

    ev.preventDefault();

    const senderName = document.getElementById('name').value;
    const senderEmail = document.getElementById('email').value;
    const senderMessage = document.getElementById('message').value;

    const webhookBody = {
      embeds: [{
        title: 'Contact Form Submitted',
        fields: [
          { name: 'Name', value: senderName },
          { name: 'Email', value: senderEmail },
          { name: 'Message', value: senderMessage }
        ]
      }],
    };


    //get the webhookUrl from ./webhookUrl.json using a get request
    const webhookUrl = await fetch('https://joeyn.dev/assets/webhoockUrl.json')
      .then((response) => response.json())
      .then((data) => data.url);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    
    
    if (response.ok) {
        snackbar("snackbar_sent");
    } else {
        snackbar("snackbar_error");
    }
}


function snackbar(id) {
    
    let x = document.getElementById(id);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }