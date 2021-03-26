(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1231:function(e,t,o){"use strict";o.r(t);var n=o(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"daily-weather-notifications-with-openweathermap-and-twilio-☀️"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#daily-weather-notifications-with-openweathermap-and-twilio-☀️"}},[e._v("#")]),e._v(" Daily Weather Notifications with OpenWeatherMap and Twilio ☀️")]),e._v(" "),n("p",[e._v("Let's create your first workflow in n8n. We'll create a workflow which will run every morning at 8 AM and will send an SMS to tell you if you should take a sweater with you. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/409",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io.")]),e._v(" "),n("p",[e._v("Here's a video that will take you through the process of creating this workflow.")]),e._v(" "),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/QhTsOMvqLuo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("You’ll need the following tools and resources to complete the tutorial:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("n8n")]),e._v(" — You can find details on how to install n8n in the "),n("RouterLink",{attrs:{to:"/getting-started/quickstart.html"}},[e._v("Quickstart")]),e._v(" page.")],1),e._v(" "),n("li",[n("strong",[e._v("OpenWeatherMap account")]),e._v(" - You'll need to obtain an Access Token for the OpenWeatherMap API. You can find instructions on how to obtain that "),n("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[n("strong",[e._v("Twilio account")]),e._v(" - You'll need to obtain the Account SID and Auth Token for the Twilio API. You can find instructions on how to obtain that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[e._v("here")]),e._v(". You will also need a Twilio Phone Number. You can find information on how to obtain that "),n("a",{attrs:{href:"https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")],1)]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" It might take a few minutes for the OpenWeatherMap API Access Token to activate.")]),e._v(" "),n("h2",{attrs:{id:"building-the-workflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-the-workflow"}},[e._v("#")]),e._v(" Building the Workflow")]),e._v(" "),n("p",[e._v("This workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")]),e._v(" - Specify when the workflow should start (be triggered)")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")]),e._v(" - Get weather details for a particular city")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/IF/"}},[e._v("IF")]),e._v(" - Conditional logic to decide the flow of the workflow")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[e._v("Twilio")]),e._v(" - Send an SMS")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("NoOp")]),e._v(" - Do nothing (optional)")],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(371),alt:"The final workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("We'll use the "),n("em",[e._v("Cron")]),e._v(" trigger node for starting the workflow. Add a "),n("em",[e._v("Cron")]),e._v(" node by clicking on the + button on the top right of the Editor UI. Click on the "),n("em",[e._v("Cron")]),e._v(" node under the section marked "),n("em",[n("strong",[e._v("Trigger")])]),e._v(".")]),e._v(" "),n("p",[e._v("Double click on the "),n("em",[e._v("Cron")]),e._v(" node to enter the Node Editor. Click on the "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(" button under the section marked "),n("em",[n("strong",[e._v("Trigger Times")])]),e._v(". Since we want the workflow to run every day at 8 AM, we'll set the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" to 'Every Day' and the "),n("em",[n("strong",[e._v("Hour")])]),e._v(" to "),n("code",[e._v("8")]),e._v(".")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(372),alt:"Creating the Cron node"}})]),e._v(" "),n("h3",{attrs:{id:"_2-openweathermap-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("OpenWeatherMap")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("OpenWeatherMap")]),e._v(" node. Double click on the node and create credentials for the node by clicking on the "),n("em",[n("strong",[e._v("Select Credentials")])]),e._v(" dropdown list and selecting "),n("em",[n("strong",[e._v("Create New")])]),e._v(". Enter the "),n("em",[n("strong",[e._v("Access Token")])]),e._v(" that you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(".")]),e._v(" "),n("p",[e._v("We'll let the different fields stay as they are. I entered "),n("code",[e._v("berlin,de")]),e._v(" in the "),n("em",[n("strong",[e._v("City")])]),e._v(" field. Feel free to enter another city's name. Click on the "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" button on the top right to get the data from the API. You can then see the data from the API in "),n("em",[n("strong",[e._v("JSON")])]),e._v(" or "),n("em",[n("strong",[e._v("Table")])]),e._v(" format.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(373),alt:"Creating the OpenWeatherMap node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("IF")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("IF")]),e._v(" node. This is a conditional logic node that allows us to alter the flow of the workflow depending on the data that we get from the previous node(s).")]),e._v(" "),n("p",[e._v("Double click on the node, click on the "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" button, and select "),n("em",[n("strong",[e._v("Number")])]),e._v(" from the menu. Since the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" (temperature) would be a dynamic piece of information, click on the gears icon next to the field, and select "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("p",[e._v("This will open up the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(". Delete the "),n("code",[e._v("0")]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field on the right. From the left panel, select the following variable:")]),e._v(" "),n("p",[n("code",[e._v("Nodes > OpenWeatherMap > Output Data > JSON > main > feels_like")])]),e._v(" "),n("p",[e._v("For the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" field, we'll let it be set to 'Smaller'. For the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(", I entered "),n("code",[e._v("18")]),e._v(". This will ensure that the "),n("em",[e._v("IF")]),e._v(" node returns true only if the weather is lower than 18°C. Feel free to change this to some other value.")]),e._v(" "),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(374),alt:"Creating the IF node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-twilio-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-twilio-node"}},[e._v("#")]),e._v(" 4. Twilio node")]),e._v(" "),n("p",[e._v("Add the "),n("em",[e._v("Twilio")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("Twilio")]),e._v(" node. Connect this node with the "),n("em",[n("strong",[e._v("true")])]),e._v(" output of the "),n("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),n("p",[e._v("Double click on the node and create credentials for the node by clicking on the "),n("em",[n("strong",[e._v("Select Credentials")])]),e._v(" dropdown list and selecting "),n("em",[n("strong",[e._v("Create New")])]),e._v(". Enter the "),n("em",[n("strong",[e._v("Account SID")])]),e._v(" and "),n("em",[n("strong",[e._v("Auth Token")])]),e._v(" that you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(".")]),e._v(" "),n("p",[e._v("In the "),n("em",[n("strong",[e._v("From")])]),e._v(" field, enter the Twilio phone number you obtained "),n("a",{attrs:{href:"#prerequisites"}},[e._v("earlier")]),e._v(" in "),n("a",{attrs:{href:"https://www.twilio.com/docs/glossary/what-e164",target:"_blank",rel:"noopener noreferrer"}},[e._v("E.164"),n("OutboundLink")],1),e._v(" format.")]),e._v(" "),n("p",[e._v("In the "),n("em",[n("strong",[e._v("To")])]),e._v(" field, enter the mobile phone number you registered when you signed up for your Twilio account. (Twilio trial accounts can only send messages to registered phone numbers. To send messages to other numbers, upgrade to a regular account.) Use E.164 format for this number as well.")]),e._v(" "),n("p",[e._v("You can now add the message that you want to send yourself if the temperature is lower than 18°C. This is what I added in the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field (you can click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(" and paste this):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Wear a sweater today, it is {{$node["OpenWeatherMap"].json["main"]["feels_like"]}}°C outside right now.\n')])])]),n("p",[e._v("Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(375),alt:"Creating the Twilio node"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("If the temperature is greater than 18°C, we don't want the workflow to do anything. We'll use the "),n("em",[e._v("NoOp")]),e._v(" node for that. Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. Add the "),n("em",[e._v("NoOp")]),e._v(" node by clicking on the + button and selecting the "),n("em",[e._v("NoOp")]),e._v(" node. Connect this node with the "),n("em",[n("strong",[e._v("false")])]),e._v(" output of the "),n("em",[e._v("IF")]),e._v(" node.")]),e._v(" "),n("p",[e._v("To test the workflow, click on the "),n("em",[n("strong",[e._v("Execute Workflow")])]),e._v(" button at the bottom of the Editor UI. I didn't get an SMS in my case since it was 24°C in Berlin at the time of writing this tutorial, and the workflow ended at the "),n("em",[e._v("NoOp")]),e._v(" node.")]),e._v(" "),n("p",[e._v("Don't forget to save the workflow and then click on the "),n("em",[n("strong",[e._v("Activate")])]),e._v(" toggle on the top right of the screen to set it to true and activate the workflow. Here's a GIF of me following the steps mentioned above.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(376),alt:"Creating the NoOp node"}})]),e._v(" "),n("p",[e._v("I raised the value of "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" in the "),n("em",[e._v("IF")]),e._v(" node from 18 to 27 to see what the SMS would look like. This is how the finished workflow and the SMS looked like.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(377),alt:"Workflow running with true output from the IF node"}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(378),alt:"SMS sent by the workflow"}})]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Congratulations on creating your first workflow with n8n 🥳")]),e._v(" "),n("p",[e._v("Did you run into any troubles while working on your first workflow? Don't be shy to ask questions or share the challenges you are facing in the community "),n("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),n("OutboundLink")],1),e._v(", we are all learners here 🙌")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🤝 Next Steps")]),e._v(" "),n("p",[e._v("Check out our tutorial on "),n("a",{attrs:{href:"https://medium.com/n8n-io/tracking-time-spent-in-meetings-with-google-calendar-twilio-and-n8n-a5d00f77da8c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking Time Spent in Meetings With Google Calendar, Twilio, and n8n 🗓"),n("OutboundLink")],1),e._v(" to learn about automating the process of calculating your meeting time every week to give you a better idea of how your week is spent.")])])])}),[],!1,null,null,null);t.default=r.exports},371:function(e,t,o){e.exports=o.p+"assets/img/final-workflow.f380b957.png"},372:function(e,t,o){e.exports=o.p+"assets/img/creating-the-cron-node.50f3e0ec.gif"},373:function(e,t,o){e.exports=o.p+"assets/img/creating-the-openweathermap-node.6a25c8fe.gif"},374:function(e,t,o){e.exports=o.p+"assets/img/creating-the-if-node.af39d325.gif"},375:function(e,t,o){e.exports=o.p+"assets/img/creating-the-twilio-node.27bdda07.gif"},376:function(e,t,o){e.exports=o.p+"assets/img/creating-the-noop-node.498edbd4.gif"},377:function(e,t,o){e.exports=o.p+"assets/img/workflow-running-with-true-output-from-the-if-node.8687d193.png"},378:function(e,t,o){e.exports=o.p+"assets/img/sms-sent-by-the-workflow.fc82d6e6.jpeg"}}]);