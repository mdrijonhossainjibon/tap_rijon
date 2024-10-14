import { Routes } from "constants/routes";
import { lazy, Suspense } from "react";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";
 

// Lazy loading the components
const Dashboard = lazy(() => import("components/page/Dashboard"));
const FriendsPage = lazy(() => import("components/page/friends"));
const TonWallet = lazy(() => import("components/page/TonWallet"));
const Earn = lazy(() => import('components/page/earn'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <PublicRoute path={Routes.Dashboard} component={Dashboard} />
          <PublicRoute path={'/friends'} component={FriendsPage} />
          <PublicRoute path={'/wallet'} component={ TonWallet } />
          <PublicRoute path={'/missions'} component={ Earn } />
          <Redirect to={Routes.Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

 
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
    border: '8px solid #f3f3f3', /* Light grey */
    borderTop: '8px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

 
