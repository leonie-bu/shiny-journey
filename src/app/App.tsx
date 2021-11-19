import React, { useState }  from 'react';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoForm from './components/TodoForm/TodoForm';

function App(): JSX.Element {
  const [todo, setTodo] = useState("");

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <Switch>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <main>Home</main>
              <TodoForm />

            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
