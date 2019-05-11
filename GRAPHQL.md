# GraphQL

## New design thinking: Graphs and nodes

- Instead of SQL / relational tables you model your app with graphs and modes as in mathematics.
- You describe your app with `what users will do` instead of `how`
- https://graphql.github.io/learn/thinking-in-graphs/

## API versioning

- No need. New stuff can be added without breaking existing code.
- https://graphql.github.io/learn/best-practices/#versioning

## Authorization

- Don't deal with inside code; it lays in another layer
- https://graphql.github.io/learn/authorization/

## Caching

- It's not so trivial like in REST APIs only if the unique ID mechanism is added to GraphQL: https://graphql.github.io/learn/caching/
- However Relay has a solution: https://facebook.github.io/relay/docs/en/thinking-in-graphql#client-caching

## vs. REST

- 1 query vs. `n+1` REST queries: https://facebook.github.io/relay/docs/en/thinking-in-graphql#fetching-data
