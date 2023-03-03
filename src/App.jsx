import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
  let [list, setList] = useState([])
  const fetchApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setList(data)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  let [filtredItems, setFiltredItems] = useState(list)
  const handleChange = (event) => {

    if (event.target.value === "") { setFiltredItems(list) }
    filtredItems = list.filter((item) => item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    setFiltredItems(filtredItems)
  }

  return (
    <>
      <div className="container mt-5">
        <h6 className="text-center my-3">Data availaible in
          <strong>
            <a href=" https://jsonplaceholder.typicode.com/posts" target="_blank">
              https://jsonplaceholder.typicode.com/posts
            </a>
          </strong>
        </h6>
        <h5 className="text-center my-3">Total items: {list.length}</h5>
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            placeholder="Search for items by title"
            className="form-control my-2"
            onChange={handleChange}
          />
        </div>
        <div className="row mx-auto">
          {
            filtredItems.map((item, index) => {
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


