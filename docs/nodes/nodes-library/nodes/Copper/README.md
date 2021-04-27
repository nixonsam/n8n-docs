---
permalink: /nodes/n8n-nodes-base.copper
description: Learn how to use the Copper node in n8n
---

# Copper

[Copper](https://www.copper.com/) is a CRM that focuses on strong integration with Google's G Suite, targeted towards small and medium-sized businesses.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Copper/README.md).
:::

## Basic Operations

::: details Company
- Create a company
- Delete a company
- Get a company
- Get all companies
- Update a company
:::

::: details Customer Source
- Get all customer sources
:::

::: details Lead
- Create a lead
- Delete a lead
- Get a lead
- Get all leads
- Update a lead
:::

::: details Opportunity
- Create an opportunity
- Delete an opportunity
- Get an opportunity
- Get all opportunities
- Update an opportunity
:::

::: details Person
- Create a person
- Delete a person
- Get a person
- Get all persons
- Update a person
:::

::: details Project
- Create a project
- Delete a project
- Get a project
- Get all projects
- Update a project
:::

::: details Task
- Create a task
- Delete a task
- Get a task
- Get all tasks
- Update a task
:::

::: details User
- Get all users
:::

## Example Usage

This workflow allows you to create, update, and get a person from Copper. You can also find the [workflow](https://n8n.io/workflows/1021) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Copper]()

The final workflow should look like the following image.

![A workflow with the Copper node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Copper node (create: person)

This node will create a new person in Copper.

1. First of all, you'll have to enter credentials for the Copper node. You can find out how to do that [here](../../../credentials/Copper/README.md).
2. Select 'Person' from the ***Resource*** dropdown list.
3. Enter the name of the lead in the ***Name*** field.
4. Click on the ***Add Field*** button and select 'Emails' from the dropdown list.
5. Click on the ***Add Email*** button.
6. Enter the email in the ***Email*** field.
7. Enter the category of the email in the ***Category*** field.
8. Click on ***Execute Node*** to run the node.

In the screenshot below, you will notice that the node creates a new person in Copper.

![Using the Copper node to create a new person](./Copper_node.png)


### 3. Copper1 node (update: person)

This node will update the information of the person that we created using the previous node.
::: v-pre
1. Select the credentials that you entered in the previous Copper node.
2. Select 'Person' from the ***Resource*** dropdown list.
3. Select 'Update' from the ***Operation*** dropdown list.
4. Click on the gears icon next to the ***Person ID*** field and click on ***Add Expression***.
5. Select the following in the ***Variable Selector*** section: Current Node > Input Data > JSON > id. You can also add the following expression: `{{$json["id"]}}`.
6. Click on the ***Add Field*** button and select 'Phone Numbers' from the dropdown list.
7. Click on the ***Add Phone Number*** field.
8. Enter the phone number in the ***Phone Number*** field.
9. Enter the category in the ***Category*** field.
10. Click on ***Execute Node*** to run the node.
:::

In the screenshot below, you will notice that the node updates the information of the person that got created previously.

![Using the Copper node to update the information of a person](./Copper1_node.png)

### 4. Copper2 node (get: person)

This node will retrieve the information of the person that we created earlier.

::: v-pre
1. Select the credentials that you entered in the previous Copper node.
2. Select 'Person' from the ***Resource*** dropdown list.
3. Select 'Update' from the ***Operation*** dropdown list.
4. Click on the gears icon next to the ***Person ID*** field and click on ***Add Expression***.
5. Select the following in the ***Variable Selector*** section: Current Node > Input Data > JSON > id. You can also add the following expression: `{{$json["id"]}}`.
6. Click on ***Execute Node*** to run the node.

In the screenshot below, you will notice that the node retrieves the information of the person that we created earlier.

![Using the Copper node to retrieve the information of a person](./Copper2_node.png)
