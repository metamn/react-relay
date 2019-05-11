// App.js
import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import environment from "./environment.js";

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.toString()}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>Answer: {props.hello}</div>;
        }}
      />
    );
  }
}
