import prodQuery from "../Firebase/query"
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useTransition } from "react";
import Card from "../Components/Card";
import FilterButton from "../Components/FilterButton";
import { filterTexts } from "../assets/data";

function Menu() {
  const [products, loading] = useCollectionData(prodQuery)
  const [filter, setFilter] = useState('')
  const [isPending, startTransition] = useTransition()

  //filter menu items
  const handleFilter = (text) => {
    const result = text.toLowerCase()
    startTransition(() => {
      if (result === 'all') {
        setFilter('')
      }
      else {
        setFilter(result)
      }
    })
  }

  if (loading) {
    return (
      <div className="bg-black text-white w-full h-screen flex justify-center items-center">
        Loading...
      </div>
    )
  }

  return (
    <main className="bg-black w-full py-16 flex-col min-h-screen flex items-center">
      <h2 className="text-3xl text-white font-bold my-3">Our <span className="text-amber-500">Menu</span></h2>
      <div className={`grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-2 mb-3 md:max-w-lg max-w-xs w-11/12`}>
        {filterTexts.map((text, index) => {
          return <FilterButton
            key={index}
            index={index}
            text={text.text}
            width={32}
            onClick={handleFilter}
          />
        })}
      </div>
      <div className="mx-auto ">
        <div className="container mx-auto flex flex-wrap justify-center px-4 max-w-fit gap-4 ">
          {products ? products.filter(prod => filter.length > 0 ? prod.type === filter : prod.type).map(prod => {
            return <Card
              key={prod.id}
              prod={prod}
            />
          }) : ''}
        </div>
      </div>
    </main>
  )
}

export default Menu