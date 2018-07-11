import React from 'react';
// AppProvider context from app
// AppConsumer get states from app
import { AppProvider, AppConsumer } from '../context-api/context';
// Added browser router to manage urls
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter history={browserHistory}>
          <AppConsumer>
            {context => <Main context={context} />}
          </AppConsumer>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
