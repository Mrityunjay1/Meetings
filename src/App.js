import {Route, Switch} from 'react-router-dom'
import AllMeetup from './Pages/AllMeetup'
import NewMeetup from './Pages/NewMeetup'
import Favorites from './Pages/Favorites'
import Layouts from './layouts/Layouts'

function App() {
  return (
    
    <Layouts>
    <Switch>
      <Route path="/" exact><AllMeetup /></Route>
      <Route path="/Favorites" exact><Favorites /></Route>
      <Route path="/new-meetup" exact><NewMeetup /></Route>
      </Switch>
    </Layouts>
  );
}

export default App;
