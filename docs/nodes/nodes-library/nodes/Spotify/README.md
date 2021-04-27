---
permalink: /nodes/n8n-nodes-base.spotify
description: Learn how to use the Spotify node in n8n
---

# Spotify

[Spotify](https://www.spotify.com/) is a music streaming service containing millions of music tracks and podcasts. Spotify allows users to create and manage their own playlists, explore new music through recommendation services, and listen to songs on demand.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Spotify/README.md).
:::

## Basic Operations

::: details Album
- Get an album by URI or ID
- Get a list of new album releases
- Get an album's tracks by URI or ID
:::

::: details Artist
- Get an artist by URI or ID
- Get an artist's albums by URI or ID
- Get an artist's related artists by URI or ID
- Get an artist's top tracks by URI or ID
:::

::: details Library
- Get the user's liked tracks
:::

::: details Player
- Add a song to your queue
- Get your currently playing track
- Skip to your next track
- Pause your music
- Skip to your previous song
- Get your recently played tracks
- Start playing a playlist, artist, or album
:::

::: details Playlist
- Add tracks from a playlist by track and playlist URI or ID
- Create a new playlist
- Get a playlist by URI or ID
- Get a playlist's tracks by URI or ID
- Get a user's playlists
- Remove tracks from a playlist by track and playlist URI or ID
:::

::: details Track
- Get a track by its URI or ID
- Get audio features for a track by URI or ID
:::

## Example Usage

This workflow allows you to add a song to your queue in Spotify. You can also find the [workflow](https://n8n.io/workflows/440) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Spotify]()

The final workflow should look like the following image.

![A workflow with the Spotify node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Spotify node

1. First of all, you'll have to enter credentials for the Spotify node. You can find out how to do that [here](../../../credentials/Spotify/README.md).
2. Enter the song's URI (or ID) to the *Track ID* field. The following GIF shows you how to find the Track ID on Spotify's UI.
3. Click on *Execute Node* to run the workflow.

![Spotify URI](./spotifyURI.gif)
