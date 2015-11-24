
function sendText() {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:63342/webdev/twilio/credentials.txt',
        success: function (data) {

            console.log(data);
            console.log($.parseJSON(data).username);
            $.ajax({

                type: "POST",
                url: "https://api.twilio.com/2010-04-01/Accounts/" + $.parseJSON(data).username + "/Messages.json",
                headers: {
                    "Authorization": "Basic " + btoa($.parseJSON(data).username + ":" + $.parseJSON(data).authkey)
                },

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
                    alert('You encountered an error, sorry!' + err);

                }
            });
        },

        error: function (data) {
            alert('failed');
        }
    })
}