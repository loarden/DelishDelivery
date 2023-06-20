import { Link } from 'react-router-dom'
import Button from '../Components/Button'

function Home() {
  return (
    <main className="hero-banner flex justify-center items-center text-white bg-cover bg-center relative z-0 bg-black w-full h-screen before:top-0 before:left-0 before:absolute before:w-full before:h-full before:backdrop-brightness-50 ">
      <div className='relative flex flex-col items-start max-w-lg w-10/12'>
        <h1 className='text-5xl sm:text-6xl my-3 font-bold z-50'>The Number One Choice For Your <span className='text-amber-500'>Hunger</span></h1>
        <p className='text-lg mb-3'>Find Your Favorite Food</p>
        <Link to='/menu'>
          <Button 
            text='Order Now'
            padding={3}
            color='amber'
          />
        </Link>
      </div>
    </main>
  )
}

export default Home