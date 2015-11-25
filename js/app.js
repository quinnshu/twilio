
function sendText() {

//reqeust the credentials for your twilio account
    $.ajax({
        type: 'GET',
        url: 'http://localhost:63342/webdev/twilio/credentials.txt',
        success: function (data) {
	//if successful in getting the account credentials, use an AJAX POST
	//to send request to twilio to send your message
            $.ajax({

                type: "POST",
                url: "https://api.twilio.com/2010-04-01/Accounts/" + $.parseJSON(data).username + "/Messages.json",
                headers: {
			//basic html authentication to twilio
                    "Authorization": "Basic " + btoa($.parseJSON(data).username + ":" + $.parseJSON(data).authkey)
                },
			//replace the "from" field with your twilio number.
                data: {
                    "To": $('#number').val(),
                    "From": "+15093591138",
                    "Body": $('#text').val()
                },
                success: function (data) {
                    console.log(data);
                    alert('Message Sent!');
                    $('#text').val('');
                },
                error: function (err) {
                    alert('You encountered an error, sorry!');
			console.log(err);
                }
            });
        },

        error: function (data) {
            alert('failed');
        }
    })
}