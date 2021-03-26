(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1491:function(e,t,o){"use strict";o.r(t);var n=o(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"e-goi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e-goi"}},[e._v("#")]),e._v(" E-goi")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.e-goi.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("E-goi"),n("OutboundLink")],1),e._v(" is an omnichannel marketing automation platform.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Egoi/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Contact")]),e._v(" "),n("ul",[n("li",[e._v("Create a member")]),e._v(" "),n("li",[e._v("Get a member")]),e._v(" "),n("li",[e._v("Get all members")]),e._v(" "),n("li",[e._v("Update a member")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get a contact using the E-goi node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/852",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("E-goi")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(720),alt:"A workflow with the E-goi node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-e-goi-node-create-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-e-goi-node-create-contact"}},[e._v("#")]),e._v(" 2. E-goi node (create: contact)")]),e._v(" "),n("p",[e._v("This node will create a new contact in E-goi. We will add the first name of the contact along with their email.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the E-goi node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Egoi/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select a list from the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the email address in the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter the name of the contact in the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new contact with their first name and email.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(721),alt:"Using the E-goi node to create a new contact"}})]),e._v(" "),n("h3",{attrs:{id:"_3-e-goi1-node-update-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-e-goi1-node-update-contact"}},[e._v("#")]),e._v(" 3. E-goi1 node (update: contact)")]),e._v(" "),n("p",[e._v("This node will update the information of the contact that we created in the previous node. We will update the first name of the contact using this node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > E-goi > Parameters > list. You can also add the following expression: "),n("code",[e._v('{{$node["E-goi"].parameter["list"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Contact ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > E-goi > Output Data > JSON > base > contact_id. You can also add the following expression: "),n("code",[e._v('{{$node["E-goi"].json["base"]["contact_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter the first name of the contact in the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the information of the contact that we created in the previous node. Here, the node has updated the first name of the contact.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(722),alt:"Using the E-goi node to update the contact"}})]),e._v(" "),n("h3",{attrs:{id:"_3-e-goi2-node-get-contact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-e-goi2-node-get-contact"}},[e._v("#")]),e._v(" 3. E-goi2 node (get: contact)")]),e._v(" "),n("p",[e._v("This node will return the information of the contact that we created using the E-goi node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Get' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("List ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > E-goi1 > Parameters > list. You can also add the following expression: "),n("code",[e._v('{{$node["E-goi1"].parameter["list"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Contact ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > E-goi1 > Output Data > JSON > base > contact_id. You can also add the following expression: "),n("code",[e._v('{{$node["E-goi"].json["base"]["contact_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the contact that we created using the E-goi node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(723),alt:"Using the E-goi node to get the information of the contact"}})])])}),[],!1,null,null,null);t.default=a.exports},720:function(e,t,o){e.exports=o.p+"assets/img/workflow.5df77b20.png"},721:function(e,t,o){e.exports=o.p+"assets/img/e-goi_node.4604a6f8.png"},722:function(e,t,o){e.exports=o.p+"assets/img/e-goi1_node.6fe7d226.png"},723:function(e,t,o){e.exports=o.p+"assets/img/e-goi2_node.2cd82b0e.png"}}]);