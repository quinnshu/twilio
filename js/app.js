

requirejs.config({

    baseUrl: 'js/lib'
});

requirejs(['angular', 'jquery', 'twilio', 'r'],
function(angular, $, twilio, r){


    angular.module('TwilioApp', [twilio, r])
        .controller('MessageController', function ($scope) {
            'use strict';

            $('.submit').click(function () {
                var to = $scope.index.messageTo;
                var body = $scope.index.messageBody;
                var picture = $scope.index.messagePicture;

                sendMessage(to, body, picture);
            });

            function sendMessage(to, from, picture) {

             //   var requirejs = require('lib/r.js');

//Twilio Credentials
                var accountSID = 'AC2b70a4092de6ebacd7264c59e1d6a157';
                var authToken = '8fb6531e95a59ae9ff73a90d34cf38c3';

//require Twilio module and create REST Client
                //var twilio = require('twilio');
                //    var twilio;
               // var client;
                //   var client = require('twilio')(accountSID, authToken);

                /*
                 define(function(twilio) {
                 console.log('called');
                 client = require('twilio')(accountSID, authToken);

                 });
                 */
                var client = new twilio.RestClient(accountSID, authToken);


                //  client = Twilio(accountSID, authToken);


                client.sendSms({
                    to: "+15098287028",
                    from: "+15093591138",
                    body: "Hey! It works!",
                    mediaUrl: "http://farm2.static.flickr.com/1075/1404618563_3ed9a44a3a.jpg",
                }, function (err, message) {
                    console.log(message.sid);
                    //       });

                    //       })

                })
            }
        });


});