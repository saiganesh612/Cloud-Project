import { useState, useEffect } from "react"
import Card from "./Components/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Data } from "./Types/dataType"
import "./App.css"

const App: React.FC = () => {
  const [data, setData] = useState([] as Data[])
  useEffect(() => {
    const page = Math.floor(Math.random() * 30)
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`)
      .then(res => {
        return res.json()
      })
      .then((data: Data[]) => {
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App container my-4">
      <h3 className="heading">This site contains random images</h3>
      <div className="row">
        {data?.map((info, ind) => {
          return (
            <div className="col-lg-4 col-md-6" key={ind}>
              <Card key={ind} info={info} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
