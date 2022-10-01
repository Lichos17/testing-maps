import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type Address = {
  street: string;
  city: string;
  state: string;
  location: {
    lang: number;
    lng: number;
  };
};

type Contact = {
  site: string;
  email: string;
  phone: string;
};

type Restaurants = {
  id: string;
  rating: number;
  name: string;
  contact: Contact;
  address: Address;
};

function App() {
  const [count, setCount] = useState(0);
  const [restaurants, setRestaurants] = useState<Restaurants | null>(null);

  useEffect(() => {
    const getRestaurantsInformation = async () => {
      try {
        const apiResp = await fetch(
          "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(apiResp);
        // const restaurantsInfo = await apiResp.json();

        // setRestaurants(restaurantsInfo);
      } catch (error) {
        console.log(error);
      }
    };

    getRestaurantsInformation();
  }, []);

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
