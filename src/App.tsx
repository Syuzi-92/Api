import { useEffect, useState } from "react";
import Org from "./pages/Org";
import { Requests } from "./type";

function App() {
  const [data, setData] = useState<Requests>({} as Requests)
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch("https://httpbin.org/get")
    const data = await response.json()
    setData(data)
  }

  return <>
    <Org data={data} />
  </>
}

export default App;
