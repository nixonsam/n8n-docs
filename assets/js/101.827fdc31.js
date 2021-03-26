(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1146:function(e,t,o){e.exports=o.p+"assets/img/workflow.c0ef17ef.png"},1147:function(e,t,o){e.exports=o.p+"assets/img/GetResponseTrigger_node.a9cb5cf5.png"},1148:function(e,t,o){e.exports=o.p+"assets/img/Set_node.577823ca.png"},1149:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.f280f59e.png"},1654:function(e,t,o){"use strict";o.r(t);var n=o(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getresponse-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getresponse-trigger"}},[e._v("#")]),e._v(" GetResponse Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.getresponse.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GetResponse"),n("OutboundLink")],1),e._v(" is an online platform that offers email marketing software, landing page creator, webinar hosting, and much more.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/GetResponse/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),n("ul",[n("li",[e._v("Receive notifications when a customer is subscribed to a list")]),e._v(" "),n("li",[e._v("Receive notifications when a customer is unsubscribed from a list")]),e._v(" "),n("li",[e._v("Receive notifications when an email is opened")]),e._v(" "),n("li",[e._v("Receive notifications when an email is clicked")]),e._v(" "),n("li",[e._v("Receive notifications when a survey is submitted")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive updates when a customer gets subscribed to a list in GetResponse and add them to a base in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/933",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("GetResponse Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1146),alt:"A workflow with the GetResponse Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-getresponse-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-getresponse-trigger"}},[e._v("#")]),e._v(" 1. GetResponse Trigger")]),e._v(" "),n("p",[e._v("The GetResponse Trigger node will trigger the workflow when a customer is subscribed to a list in GetResponse.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the GetResponse Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/GetResponse/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Customer Subscribed' from the "),n("em",[n("strong",[e._v("Events")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a list from the "),n("em",[n("strong",[e._v("List IDs")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the customer that gets subscribed to a list in GetResponse. This output is passed on to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1147),alt:"Using the GetResponse Trigger node to trigger the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > contact_name. You can also add the following expression: "),n("code",[e._v('{{$json["contact_name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Email")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > contact_email. You can also add the following expression: "),n("code",[e._v('{{$json["contact_email"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1148),alt:"Using the Set node to set the data"}})]),e._v(" "),n("h3",{attrs:{id:"_3-airtable-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node-append"}},[e._v("#")]),e._v(" 3. Airtable node (Append)")]),e._v(" "),n("p",[e._v("This node will store the data coming from the previous node in a table in Airtable. Create a table like "),n("a",{attrs:{href:"https://airtable.com/shruNwTykzR3tkr6d",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the base ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),n("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID under the Introduction section.")]),e._v(" "),n("li",[e._v("In n8n, paste the ID of the base in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the table name in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" name field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node adds the information of the customer from the previous node in a table in Airtable.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1149),alt:"Using the Airtable node to append the information of a customer"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the GetResponse Trigger node.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);