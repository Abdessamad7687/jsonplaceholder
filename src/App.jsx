import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const [list, setList] = useState([])
  const fetchApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    setList(data)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
      <div className="container mt-5">
        <h6 className="text-center my-3">This data is availaible in <strong>https://jsonplaceholder.typicode.com/posts</strong></h6>
        <h5 className="text-center my-3">Total items: {list.length}</h5>
        <div className="row mx-auto">
          {
            list.map((item, index) => {
              return (
                <Card
                  key={index}
                  userId={item.userId}
                  title={item.title}
                  body={item.body}
                />
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
