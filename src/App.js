import { BrowserRouter, Switch, Route } from "react-router-dom";


import "./App.css";
import Posts from "./components/posts/Posts";
import Appbar from "./components/appbar/Appbar";
import Auth from "./components/auth/Auth";
import CreatePost from "./components/posts/createPost/CreatePost";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/posts" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
