import { useState } from "react";
import Routers from "./Router/routers";
import Context from "./App/components/Context/context";
import { Provider } from 'react-redux';
import { Store } from './store';

function App() {
  const [total, setTotal] = useState("No Data");
  return (
    <>
    <Provider store={Store}>
      <Context.Provider value={[total, setTotal]}>
        <Routers />
      </Context.Provider>
    </Provider>
    </>
  );
}

export default App;
