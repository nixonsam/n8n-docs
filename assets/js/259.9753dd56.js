(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1416:function(t,e,a){"use strict";a.r(e);var v=a(25),o=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"date-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#date-time"}},[t._v("#")]),t._v(" Date & Time")]),t._v(" "),v("p",[t._v("The Date & Time node is used to manipulate date and time data and convert it to different formats.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),v("p",[t._v("Make sure that the timezone is set correctly for the n8n instance (or the workflow).")])]),t._v(" "),v("h2",{attrs:{id:"node-reference"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),v("ul",[v("li",[t._v("Action\n"),v("ul",[v("li",[t._v("Convert a date to a different format")])])])]),t._v(" "),v("p",[t._v("You can specify the format that the date has to be converted to from the "),v("em",[t._v("To Format")]),t._v(" dropdown list.")]),t._v(" "),v("ul",[v("li",[t._v("To Format\n"),v("ul",[v("li",[t._v("MM/DD/YYYY")]),t._v(" "),v("li",[t._v("YYYY/MM/DD")]),t._v(" "),v("li",[t._v("MMMM DD YYYY")]),t._v(" "),v("li",[t._v("MM-DD-YYYY")]),t._v(" "),v("li",[t._v("YYYY-MM-DD")]),t._v(" "),v("li",[t._v("Unix Timestamp")]),t._v(" "),v("li",[t._v("Unix Ms Timestamp")])])])]),t._v(" "),v("p",[t._v("You can also specify a custom format by setting the "),v("em",[t._v("Custom Format")]),t._v(" toggle to 'On'.")]),t._v(" "),v("ul",[v("li",[t._v("Options\n"),v("ul",[v("li",[v("em",[t._v("From Format")]),t._v(" field: Allows you to specify the format of the input values. Refer to the "),v("a",{attrs:{href:"#what-values-can-i-use-in-the-from-format-field"}},[t._v("FAQs")]),t._v(" to learn about the possible vaules.")]),t._v(" "),v("li",[v("em",[t._v("From Timezone")]),t._v(" field: Allows you to specify the timezone of the input values, for input timezones that are different from n8n's system clock.")]),t._v(" "),v("li",[v("em",[t._v("To Timezone")]),t._v(" field: Allows you to specify the timezone that the input values have to be converted to.")])])])]),t._v(" "),v("h2",{attrs:{id:"example-usage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),v("p",[t._v("This workflow allows you to convert a date from one format to another using the Date & Time node. You can also find the "),v("a",{attrs:{href:"https://n8n.io/workflows/575",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),v("OutboundLink")],1),t._v(" on the website. This example usage workflow would use the following two nodes.")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),v("li",[v("a",{attrs:{href:""}},[t._v("Date & Time")])])]),t._v(" "),v("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),v("p",[v("img",{attrs:{src:a(549),alt:"A workflow with the Date & Time node"}})]),t._v(" "),v("h3",{attrs:{id:"_1-start-node"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),v("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),v("h3",{attrs:{id:"_2-date-time-node"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-date-time-node"}},[t._v("#")]),t._v(" 2. Date & Time node")]),t._v(" "),v("ol",[v("li",[t._v("Enter the date that you want to convert in the "),v("em",[t._v("Value")]),t._v(" field.")]),t._v(" "),v("li",[t._v("Click on the "),v("em",[t._v("Add Option")]),t._v(" dropdown.")]),t._v(" "),v("li",[t._v("Click on the "),v("em",[t._v("From Format")]),t._v(" option, and enter the format of the input date.")]),t._v(" "),v("li",[t._v("Select the format you want to convert it to from the "),v("em",[t._v("To Format")]),t._v(" dropdown list.")]),t._v(" "),v("li",[t._v("Click on "),v("em",[t._v("Execute Node")]),t._v(" to run the workflow.")])]),t._v(" "),v("h2",{attrs:{id:"faqs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),v("h3",{attrs:{id:"what-values-can-i-use-in-the-from-format-field"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#what-values-can-i-use-in-the-from-format-field"}},[t._v("#")]),t._v(" What values can I use in the From Format field?")]),t._v(" "),v("p",[t._v("You can use the following values in the "),v("em",[v("strong",[t._v("From Format")])]),t._v(" field:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Input")]),t._v(" "),v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("X")]),t._v(" "),v("td",[t._v("1616108400")]),t._v(" "),v("td",[t._v("Unix timestamp")])]),t._v(" "),v("tr",[v("td",[t._v("x")]),t._v(" "),v("td",[t._v("1616108400000")]),t._v(" "),v("td",[t._v("Unix ms timestamp")])]),t._v(" "),v("tr",[v("td",[t._v("DD-MM-YYYY")]),t._v(" "),v("td",[t._v("19-03-2021")]),t._v(" "),v("td",[t._v("Date, month, and year separated by "),v("code",[t._v("-")])])]),t._v(" "),v("tr",[v("td",[t._v("DD/MM/YYYY")]),t._v(" "),v("td",[t._v("19/03/2021")]),t._v(" "),v("td",[t._v("Date, month, and year separated by "),v("code",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("DD.MM.YYYY")]),t._v(" "),v("td",[t._v("19.03.2021")]),t._v(" "),v("td",[t._v("Date, month, and year separated by "),v("code",[t._v(".")])])]),t._v(" "),v("tr",[v("td",[t._v("DD.MM.YYYY HH:MM:SS")]),t._v(" "),v("td",[t._v("19.03.2021 08:00:00")]),t._v(" "),v("td",[t._v("Date, month, year, hours, minutes, and seconds")])]),t._v(" "),v("tr",[v("td",[t._v("MM/DD/YYYY")]),t._v(" "),v("td",[t._v("03/19/2021")]),t._v(" "),v("td",[t._v("Month, date, and year separated by "),v("code",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("MM-DD-YYYY")]),t._v(" "),v("td",[t._v("03-19-2021")]),t._v(" "),v("td",[t._v("Month, date, and year separated by "),v("code",[t._v("-")])])]),t._v(" "),v("tr",[v("td",[t._v("MM.DD.YYYY")]),t._v(" "),v("td",[t._v("03.19.2021")]),t._v(" "),v("td",[t._v("Month, date, and year separated by "),v("code",[t._v(".")])])]),t._v(" "),v("tr",[v("td",[t._v("MM/DD/YYYY HH:MM:SS")]),t._v(" "),v("td",[t._v("03/19/2021 08:00:00")]),t._v(" "),v("td",[t._v("Month, date, year, hours, minutes, and seconds")])]),t._v(" "),v("tr",[v("td",[t._v("YYYY/MM/DD")]),t._v(" "),v("td",[t._v("2021/03/19")]),t._v(" "),v("td",[t._v("Year, month, and date separated by "),v("code",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("YYYY-MM-DD")]),t._v(" "),v("td",[t._v("2021-03-19")]),t._v(" "),v("td",[t._v("Year, month, and date separated by "),v("code",[t._v("-")])])]),t._v(" "),v("tr",[v("td",[t._v("YYYY.MM.DD")]),t._v(" "),v("td",[t._v("2021.03.19")]),t._v(" "),v("td",[t._v("Year, month, and date separated by "),v("code",[t._v(".")])])]),t._v(" "),v("tr",[v("td",[t._v("YYYY/MM/DD HH:MM:SS")]),t._v(" "),v("td",[t._v("2021/03/19 08:00:00")]),t._v(" "),v("td",[t._v("Year, month, date, hours, minutes, and seconds")])]),t._v(" "),v("tr",[v("td",[t._v("MMMM DD YYYY")]),t._v(" "),v("td",[t._v("March 03 2021")]),t._v(" "),v("td",[t._v("Month, date, and year")])]),t._v(" "),v("tr",[v("td",[t._v("MMMM DD YYYY HH:MM:SS")]),t._v(" "),v("td",[t._v("March 03 2021 08:00:00")]),t._v(" "),v("td",[t._v("Month, date, year, hours, minutes, and seconds")])]),t._v(" "),v("tr",[v("td",[t._v("DD MMMM YYYY")]),t._v(" "),v("td",[t._v("03 March 2021")]),t._v(" "),v("td",[t._v("Date, month, and year")])]),t._v(" "),v("tr",[v("td",[t._v("DD MMMM YYYY HH:MM:SS")]),t._v(" "),v("td",[t._v("03 March 2021 08:00:00")]),t._v(" "),v("td",[t._v("Date, month, year, hours, minutes, and seconds")])])])])])}),[],!1,null,null,null);e.default=o.exports},549:function(t,e,a){t.exports=a.p+"assets/img/workflow.c23d27d8.png"}}]);