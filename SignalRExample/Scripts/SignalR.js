﻿(function () {
    //Open the connection to the hub
    var myhub = $.connection.chat;
    $.connection.hub.start()
        .done(function () {
            console.log("Hub Connected");
            myhub.server.announceToEverybody("Pedro");
            myhub.server.getDateTime()
                .done(function(data) {
                    writeToPage(data);
                })
                .fail(function(e) {
                    writeToPage(e +": Failed getting date from server");
                });
        })
        .fail(function () {
            alert("Failed fucker");
        });

    myhub.client.announce = function (msg) {
        writeToPage(msg);
    }
    

    var writeToPage = function (message) {
        $("#welcome").append(message +" <br/>");
    }



    // Button event to test for fail (optional)
    $("#click-me").bind("click",
        function () {
            myhub.server.getDateTime()
                .done(function (data) {
                    writeToPage(data);
                })
                .fail(function (e) {
                    writeToPage(e + ": Failed getting date from server");
                });
        });
})()



