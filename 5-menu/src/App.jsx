import { useState } from 'react' 
import Menu from './Menu'
import Categories from './Categories'
import data from './data'
import './App.css'

const allCategories = ['all',...new Set(data.map((item)=>item.category))]

function App() {
  const [menuItems,setMenuItems] = useState(data)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category)=>{
    console.log(category)
    if(category==='all'){
      setMenuItems(data)
      return
    }
    const newItem = menuItems.filter((item)=>item.category==category)
    setMenuItems(newItem)
  }

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2> our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
