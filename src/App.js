import "./App.css";
import React from "react";

import { Router, Route, useHistory } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamNew from "./components/streams/StreamNew";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import history from "../src/history";
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router history={history}>
          <Header />

          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamNew} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
