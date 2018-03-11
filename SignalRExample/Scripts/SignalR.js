(function() {
    //Open the connection to the hub
    $.connection.hub.start()
        .done(function () {
            console.log("Hub Connected");
            $.connection.myHub.server.announce("Pedro");
        })
        .fail(function () {
            alert("Failed fucker");
        });

    $.connection.myHub.client.announce = function (msg) {
        $("#welcome").append(msg);
    }


})()



