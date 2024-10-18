import { Routes } from "constants/routes";
import { lazy, Suspense } from "react";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";

// Lazy loading the components
const Dashboard = lazy(() => import("components/page/Dashboard"));
const FriendsPage = lazy(() => import("components/page/friends"));
const TonWallet = lazy(() => import("components/page/TonWallet"));
const Earn = lazy(() => import('components/page/earn'));

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  allows_write_to_pm: boolean;
}

interface QueryParams {
  user?: User;
  chat_instance?: string;
  chat_type?: string;
  start_param?: string;
  auth_date?: string;
  hash?: string;
}

function App() {
  const queryParams: any= {};

  if (window.Telegram) {
    const urlEncodedString = window.Telegram.WebApp.initData;
    const decodedString = decodeURIComponent(urlEncodedString);
    const queryParamsArray = decodedString.split('&');

    queryParamsArray.forEach(param => {
      const [key, value] = param.split('=');
      queryParams[key as keyof QueryParams] = value;
    });

    if (queryParams.user) {
      try {
        queryParams.user = JSON.parse(queryParams.user) as User;
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }

    console.log(queryParams);
  }

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <PublicRoute path={Routes.Dashboard} component={Dashboard} />
          <PublicRoute path={'/friends'} component={FriendsPage} />
          <PublicRoute path={'/wallet'} component={TonWallet} />
          <PublicRoute path={'/missions'} component={Earn} />
          <Redirect to={Routes.Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

const LoadingSpinner = () => {
  return (
    <div style={styles.spinnerContainer as any}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

// Custom styles for the spinner
const styles = {
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    color: '#007bff', // Color of loading text
  },
  spinner: {
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  },
};

// Add keyframes for the spinner
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default App;
