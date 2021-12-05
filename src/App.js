import { useRef, useState } from 'react'
import Items from './components/Items'
const App = () => {
  const items = [
    { id: 1, name: 'iPhone-13', price: 1099 },
    { id: 2, name: 'Note 21Ultra', price: 1044 },
  ]

  const [item, setItem] = useState(items)

  const allItems = item.map((i) => (
    <Items key={i.id} name={i.name} price={i.price} />
  ))

  const nameRef = useRef()
  const priceRef = useRef()

  const add = () => {
    let id = items.length + 1
    const name = nameRef.current.value
    const price = priceRef.current.value
    setItem([...item, { id, name, price }])
  }

  return (
    <div>
      <h1>React useState Tutorial</h1>
      <div>
        <ul>{allItems}</ul>
      </div>
      <div>
        <input type="text" ref={nameRef} />
        <br />
        <br />
        <input type="text" ref={priceRef} />
        <br />
        <br />
        <button type="submit" onClick={add}>
          Add
        </button>
      </div>
    </div>
  )
}

export default App
