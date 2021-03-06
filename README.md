# React with Relay

## What's inside

- An Express GraphQL server serving a single static 'Hello world' query
- a `schema.graphql` to make the things work, otherwise all is wired up in the server (this file is not really used)
- an `environment.js` with `fetchQuery()` which works well (any query, CORS solved)
- the `App` running a `QueryRenderer`

## What's needed

- a proper backend which is _very_ complicated to set up
- contenders / examples / approaches are:

### Official `relay-examples/todo`

- Express GraphQL server
- Node web server
- Clean packages
- Messy folder structure (not following React Creat App)

### Unofficial `relay-todomvc`

- Local filesystem database / GraphQL
- Webpack web server
- Messy packages (routing, etc)
- Clean folders (following React Create App)

### `relay-modern-typescript`

- From a React core member https://sibelius.github.io
- Lots of other _best practices_ like colocation, useQuery hook
- However the code is very messy and uses typescript

### Official AWS AppSync Relay

- pretty clean packages and setup
- follows React Create App
- the best contender so far

## Run

Every time the GraphQL Schema is modified run:

```
yarn relay
```

Start Express

```
node server.js
```

Start application

```
yarn start
```

## Installation

### 1. Create React App

- Installation process: Smooth, 1s

### 2. graphql.js

- Required: https://facebook.github.io/relay/docs/en/prerequisites
- Installation: https://graphql.org/graphql-js/
- Installation process: Smooth, 1m

### 3. express-graphql

- Required: https://facebook.github.io/relay/docs/en/prerequisites
- Installation: https://graphql.github.io/graphql-js/running-an-express-graphql-server/
- Installation process: Smooth, 1m

### 4. react-relay

- Installation: https://facebook.github.io/relay/docs/en/installation-and-setup
- Installation process: Extremely heavy, 2-3hrs

1. Schema.graphql needs a hack: https://github.com/facebook/relay/issues/2285
2. The install guide is vague, doesn't follows the previous steps, and is with errors: https://graphql.github.io/graphql-js/running-an-express-graphql-server/
3. The Express server had to be extended with CORS
4. `fetch()` in `src/environment.js` had to be updated, and works after many tries
5. `src/App.js` had to be figured out based on https://github.com/sibelius/relay-modern-course or https://relay-modern-course.now.sh/packages/
