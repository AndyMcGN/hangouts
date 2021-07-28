import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";


function App() {
	const [data, setData] = useState(null);


	useEffect(() => {
		callBackendAPI()
			.then((res) => setData(res))
			.catch((err) => console.log(err));
	});

  const callBackendAPI = async () => {
    
    const response = await fetch('/get-users');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
      <p className="App-intro">{data}</p>
		</div>
	);
}

export default App;
