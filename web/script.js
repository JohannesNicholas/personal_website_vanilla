
async function sendMessage(ev) {

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



    const webhookUrl = 'https://discord.com/api/webhooks/1113712176994201672/FsU3dw1I86aSGfZxMw8b_FcorkcAcwklkV_S-n96l7p4m0TnYacSLqIXz_MCTMM2EuCL';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    
    
    if (response.ok) {
      alert('I have received your message!');
    } else {
      alert('There was an error! Try again later!');
    }
      
    
}