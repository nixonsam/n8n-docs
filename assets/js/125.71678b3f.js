(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1134:function(e,t,o){e.exports=o.p+"assets/img/workflow.3334d3e5.png"},1135:function(e,t,o){e.exports=o.p+"assets/img/FacebookTrigger_node.40c88224.png"},1136:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.c8ea6ae9.png"},1644:function(e,t,o){"use strict";o.r(t);var a=o(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"facebook-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facebook-trigger"}},[e._v("#")]),e._v(" Facebook Trigger")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Facebook"),a("OutboundLink")],1),e._v(" is a social networking site that makes it easy to connect and share with family and friends online.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/FacebookApp/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[e._v("#")]),e._v(" Object")]),e._v(" "),a("ul",[a("li",[e._v("Get updates about an Ad Account")]),e._v(" "),a("li",[e._v("Get updates about the app")]),e._v(" "),a("li",[e._v("Get updates about Certificate Transparency")]),e._v(" "),a("li",[e._v("Get updates about activity in groups and events in groups of Workplace")]),e._v(" "),a("li",[e._v("Get updates about the comments on your media")]),e._v(" "),a("li",[e._v("Get updates about the links for rich previews by an external provider")]),e._v(" "),a("li",[e._v("Page updates")]),e._v(" "),a("li",[e._v("Updates regarding granting or revoking permissions")]),e._v(" "),a("li",[e._v("User profile updates")]),e._v(" "),a("li",[e._v("Get updates about Whatsapp business account")]),e._v(" "),a("li",[e._v("Get updates about Workplace security")])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to receive a Mattermost message when a user updates their profile on Facebook. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/785",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Facebook Trigger")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1134),alt:"A workflow with the Facebook Trigger node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-facebook-trigger-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-facebook-trigger-node"}},[e._v("#")]),e._v(" 1. Facebook Trigger node")]),e._v(" "),a("p",[e._v("The Facebook Trigger node will trigger the workflow when a user updates their profile on Facebook.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Facebook Trigger node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/FacebookApp/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'User' from the "),a("em",[a("strong",[e._v("Object")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter your app ID in the "),a("em",[a("strong",[e._v("App ID")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node returns the updated information of the user from Facebook. This output is passed on to the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1135),alt:"Using the Facebook Trigger node to trigger the workflow"}})]),e._v(" "),a("h3",{attrs:{id:"_2-mattermost-node-post-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),a("p",[e._v("This node will send a message of the updated information in the channel "),a("code",[e._v("Information Updated")]),e._v(" in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[e._v("Select a channel from the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Message")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Enter the following message in the "),a("em",[a("strong",[e._v("Expression")])]),e._v(" field: "),a("code",[e._v('The user with uid {{$node["Facebook Trigger"].json["uid"]}} changed their {{$node["Facebook Trigger"].json["changes"][0]["field"]}} to {{$node["Facebook Trigger"].json["changes"][0]["value"]["page"]}}.')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sends a message about the updated information to the "),a("code",[e._v("Information Updated")]),e._v(" channel in Mattermost.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1136),alt:"Using the Mattermost node to send a message of the updated information"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Facebook Trigger node.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);