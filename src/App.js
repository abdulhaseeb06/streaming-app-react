import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamNew from "./components/streams/StreamNew";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamNew} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </React.Fragment>
  );
}

export default App;