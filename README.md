# React Spotify

[![CodeFactor](https://www.codefactor.io/repository/github/matiushariman/spotify-app/badge)](https://www.codefactor.io/repository/github/matiushariman/spotify-app)

React Spotify is a web application that mimics the functionality and user interface of the popular music streaming service, Spotify.

The clone is designed to allow users to view their personalized Spotify data, such as their playlists, listening history, and recommended songs. ReactJS is used to create an interactive user interface that updates in real-time as the user interacts with the application.

## Pre-requisites

- Register your application at [Spotify Dashboard](https://developer.spotify.com/dashboard/) to get your clientId (`VITE_SPOTIFY_CLIENT_ID`).
- Upon successful registration, configure your application's callback URL (`VITE_SPOTIFY_REDIRECT_URI`) to `http://locahost:4200/callback/`.

## Setting up your development environment

Run the commands below to setup the app for development purpose

```shell
# clone the repository
git clone https://github.com/matiushariman/spotify-app.git

# Install dependencies
pnpm install
```

Create a `.env.local` file in the root folder and add the variables below

```shell
# .local.env

# required - see pre-requisites to learn more about getting your clientId
VITE_SPOTIFY_CLIENT_ID=[YOUR_SPOTIFY_APP_CLIENT_ID]

# required
VITE_SPOTIFY_REDIRECT_URI=[YOUR_SPOTIFY_APP_REDIRECT_URI]
```

## Running the application(s)

- To run the application, use `pnpm nx serve react-spotify` command.
  - Alternatively (preferred), use nx console plugin in your IDE to run the application.

## Development Methodology

### Component-Driven Development

Component-driven development (CDD) is a software development approach that focuses on building applications as a collection of reusable and independent components.
These components are self-contained and encapsulate their own logic, styles, and markup. They can be easily reused across different parts of the application, making the development process more efficient and maintainable

In CDD, the development process starts with identifying the different components that make up the application, such as buttons, forms, and navigation menus. These components are then developed and tested independently, before being assembled into the final application.

This approach promotes a modular and composable design, which makes it easy to test and update individual components without affecting the rest of the application.

CDD in this project is powered by [Storybook](https://storybook.js.org).

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Further help

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

Visit the [Nx Documentation](https://nx.dev) to learn more.
