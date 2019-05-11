# Relay

## Declarative as React

- React = Component driven user interface development
- Relay = Data-driven user interface development
- As React declares how the UI should look and behave with _components_ &mdash; Relay declares what data pieces are needed for the UI using _GraphQL fragments_.
- As components fragments can be reused, composed.
- All the rest is done by the middleware, no need to worry about it.

## Data containers / Higher Order renders

- Relay uses `<QueryRenderer>` as a higher order component to fetch data first then render the associated component: https://facebook.github.io/relay/docs/en/thinking-in-relay#rendering
- This will change soon with Hooks

## Compared to other GraphQL solutions

- `schema.graphql` should be not edited directly: https://facebook.github.io/relay/docs/en/graphql-in-relay.html#graphql-schema
- `relay-compiler` collects all GraphQL stuff from component files and generates all what's needed: https://facebook.github.io/relay/docs/en/graphql-in-relay.html#source-files
