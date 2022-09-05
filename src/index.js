import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./store/reducers/reducers";
import firebase from "./firebase";
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div class="d-flex justify-content-center align-items-center"
    style={{height:"100vh"  }}>
                          <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                          </div>
                        </div>
                        }>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
