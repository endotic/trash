
import { Shell } from './Shell.jsx';
// import Config from './Config.jsx';
import './App.css';

// const cfg = Config.get();

const App = () => {
  return (
    <Shell
      lines={[
        'Hello, World!1',
        'Hello, World!2',
        'Hello, World!3'
      ]}
      accents={[7, 8, 9, 10, 11, 12]}
    />
  );
};

export default App;
