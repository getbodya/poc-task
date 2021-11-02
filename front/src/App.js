import './App.css';
import { Form } from './components/form/form.component';
import { Loader } from './components/loader/loader.component';
import { UserList } from './components/userList.js/userList.component';
import { Context } from './ctx';
import { reducer } from './store/reducer';
import { initialState } from './store/state';
import { useReducerWithThunk } from './store/useReducerWithThunk';
import logger from 'use-reducer-logger';
import { Notification } from './components/notification/notification';

function App() {
  const [state, dispatch] = useReducerWithThunk(logger(reducer), initialState);
  
  return (
    <Context.Provider value={{state, dispatch}}>
      <Loader/>
      <Form/>
      <Notification/>
      <UserList/>
    </Context.Provider>
  );
}

export default App;
