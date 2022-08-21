import './index.css';
import '@aws-amplify/ui-react/styles.css'
import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import ReactDOM from 'react-dom'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import reportWebVitals from './reportWebVitals'
import App from './App';

Amplify.configure(config);

ReactDOM.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
