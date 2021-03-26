(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1420:function(r,e,o){"use strict";o.r(e);var t=o(25),s=Object(t.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"error-trigger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-trigger"}},[r._v("#")]),r._v(" Error Trigger")]),r._v(" "),t("p",[r._v("The Error Trigger node triggers a workflow when another workflow has an error. Once a workflow fails, this node gets details about the failed workflow and the errors. This triggers the error workflow.")]),r._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[r._v("💡 Keep in mind")]),r._v(" "),t("ol",[t("li",[r._v("If a workflow is using the Error Trigger node, you don't have to activate the workflow.")]),r._v(" "),t("li",[r._v("If you want to receive error messages for a workflow, make sure that you select the 'Error Workflow' in the "),t("em",[t("strong",[r._v("Workflow Settings")])]),r._v(" for the workflow.")]),r._v(" "),t("li",[r._v("If a workflow is using the Error Trigger node, by default, the workflow will use itself as the Error Workflow.")])])]),r._v(" "),t("h2",{attrs:{id:"example-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[r._v("#")]),r._v(" Example Usage")]),r._v(" "),t("p",[r._v("This workflow allows you to send an SMS when a workflow fails. You can also find the "),t("a",{attrs:{href:"https://n8n.io/workflows/665",target:"_blank",rel:"noopener noreferrer"}},[r._v("workflow"),t("OutboundLink")],1),r._v(" on n8n.io. This example usage workflow would use the following nodes.")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:""}},[r._v("Error Trigger")])]),r._v(" "),t("li",[t("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[r._v("Twilio")])],1)]),r._v(" "),t("p",[r._v("The final workflow should look like the following image.")]),r._v(" "),t("p",[t("img",{attrs:{src:o(554),alt:"A workflow with the Error Trigger node"}})]),r._v(" "),t("h3",{attrs:{id:"_1-error-trigger-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-error-trigger-node"}},[r._v("#")]),r._v(" 1. Error Trigger node")]),r._v(" "),t("p",[r._v("This node will execute when an error occurs.")]),r._v(" "),t("h3",{attrs:{id:"_2-twilio-node-send-sms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-twilio-node-send-sms"}},[r._v("#")]),r._v(" 2. Twilio node (send: sms)")]),r._v(" "),t("ol",[t("li",[r._v("First of all, you'll have to enter credentials for the Twilio node. You can find out how to do that "),t("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[r._v("here")]),r._v(".")],1),r._v(" "),t("li",[r._v("Enter the Twilio phone number in the "),t("em",[t("strong",[r._v("From")])]),r._v(" field.")]),r._v(" "),t("li",[r._v("Enter the receiver's phone number in the "),t("em",[t("strong",[r._v("To")])]),r._v(" field.")]),r._v(" "),t("li",[r._v("Click on the gears icon next to the "),t("em",[t("strong",[r._v("Message")])]),r._v(" field and click on "),t("em",[t("strong",[r._v("Add Expression")])]),r._v(".")])]),r._v(" "),t("div",{pre:!0},[t("ol",{pre:!0,attrs:{start:"5"}},[t("li",[r._v("Enter "),t("code",[r._v('Your workflow with ID: {{$node["Error Trigger"].json["workflow"]["id"]}} and name: {{$node["Error Trigger"].json["workflow"]["name"]}} failed to execute.')]),r._v(" in the "),t("em",[t("strong",[r._v("Expression")])]),r._v(" field.")]),r._v(" "),t("li",[r._v("The node will execute when the Error Trigger node is triggered.")])])]),t("h2",{attrs:{id:"faqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[r._v("#")]),r._v(" FAQs")]),r._v(" "),t("h3",{attrs:{id:"how-to-set-an-error-workflow-for-an-n8n-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-an-error-workflow-for-an-n8n-workflow"}},[r._v("#")]),r._v(" How to set an error workflow for an n8n workflow?")]),r._v(" "),t("p",[r._v("Let's say we want to get a notification every time "),t("strong",[r._v("Workflow A")]),r._v(" fails. Create a new workflow, "),t("strong",[r._v("Workflow B")]),r._v(". Add an Error Trigger node and set "),t("strong",[r._v("Workflow B")]),r._v(" as the error workflow for "),t("strong",[r._v("Workflow A")]),r._v(" by following these steps.")]),r._v(" "),t("ul",[t("li",[r._v("Open "),t("strong",[r._v("Workflow A")]),r._v(".")]),r._v(" "),t("li",[r._v("Click on "),t("em",[t("strong",[r._v("Workflows")])]),r._v(" in the left menu and select 'Settings' from the dropdown list.")]),r._v(" "),t("li",[r._v("Select "),t("strong",[r._v("Workflow B")]),r._v(" from the "),t("em",[t("strong",[r._v("Error Workflow")])]),r._v(" dropdown list.")]),r._v(" "),t("li",[r._v("Click on the "),t("em",[t("strong",[r._v("Save")])]),r._v(" button.")])]),r._v(" "),t("h3",{attrs:{id:"can-we-send-a-custom-error-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-we-send-a-custom-error-message"}},[r._v("#")]),r._v(" Can we send a custom error message?")]),r._v(" "),t("p",[r._v("The Error Trigger node sends the actual error message thrown by the workflow. You can use this information as shown in the "),t("a",{attrs:{href:"#example-usage"}},[r._v("Example Usage")]),r._v(" section as well as send a custom error message like in the Twilio node. However, you cannot send a custom error message to the Error Trigger node.")]),r._v(" "),t("h3",{attrs:{id:"how-do-we-call-the-error-workflow-manually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-we-call-the-error-workflow-manually"}},[r._v("#")]),r._v(" How do we call the Error Workflow manually?")]),r._v(" "),t("p",[r._v("There is currently no functionality to call an Error Workflow manually.")]),r._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[r._v("#")]),r._v(" Further Reading")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://medium.com/n8n-io/creating-error-workflows-in-n8n-6e03c9ecbc0f",target:"_blank",rel:"noopener noreferrer"}},[r._v("Creating Error Workflows in n8n 🌪"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports},554:function(r,e,o){r.exports=o.p+"assets/img/workflow.a8e84c47.png"}}]);