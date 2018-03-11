using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRExample
{
    [HubName("chat")]
    public class MyHub : Hub
    {
        [HubMethodName("announceToEverybody")]
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }

        public DateTime GetDateTime()
        {
            return DateTime.Now;
        }
    }
}