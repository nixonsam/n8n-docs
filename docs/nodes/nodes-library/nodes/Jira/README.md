---
permalink: /nodes/n8n-nodes-base.jira
description: Learn how to use the Jira node in n8n
---

# Jira

[Jira](https://www.atlassian.com/software/jira) is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Jira/README.md).
:::

## Basic Operations

::: details Issue
- Create a new issue
- Update an issue
- Get an issue
- Get all issues
- Get issue changelog
- Create an email notification for an issue and add it to the mail queue
- Return either all transitions or a transition that can be performed by the user on an issue, based on the issue's status
- Delete an issue
:::

::: details Issue Attachment
- Add attachment to an issue
- Get an attachment
- Get all attachments
- Remove an attachment
:::

::: details Issue Comment
- Add comment to issue
- Get a comment
- Get all comments
- Remove a comment
- Update a comment
:::

::: details User
- Create a new user
- Delete a user
- Retrieve a user
:::

## Example Usage

This workflow allows you to create a new issue in Jira. You can also find the [workflow](https://n8n.io/workflows/459) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Jira]()

The final workflow should look like the following image.

![A workflow with the Jira node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Jira node

1. First of all, you'll have to enter credentials for the Jira node. You can find out how to do that [here](../../../credentials/Jira/README.md).
2. Select your project from the dropdown list for the *Project* field.
3. Select an issue type from the dropdown list for the *Issue Type* field.
4. Enter the summary of the issue in the *Summary* field.
5. Click on *Execute Node* to run the workflow.

## FAQs

### How to fetch issues for a specific project?

The 'Get All' operation returns all the issues from Jira. To fetch issues for a particular project, you need to use JQL (Jira Query Language).

For example, if you want to receive all the issues of a project named `n8n`, follow the steps mentioned below.
- Select 'Get All' from the ***Operation*** dropdown list.
- Toggle ***Return All*** to true.
- Click on ***Add Option*** and select 'JQL'.
- Enter `project=n8n` in the ***JQL*** field.

This query will fetch all the issues in the project named `n8n`. Enter the name of your project instead of `n8n` to fetch all the issues for your project.

You can refer to the [official documentation](https://www.atlassian.com/software/jira/guides/expand-jira/jql) about JQL to learn more about it.

## Further Reading

<FurtherReadingBlog node="Jira Software" />
