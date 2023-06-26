import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import useScrollDirection from '../Hooks/useScrollDirection.jsx';
import CartContext from '../Context/Context.js';
import { navItems } from '../assets/data.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import prodQuery from '../Firebase/query.js';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion } from 'framer-motion'
import Animation from './Animation.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollDirection = useScrollDirection()
  const [products, loading] = useCollectionData(prodQuery)
  const element = useRef()
  const { cartItems } = useContext(CartContext)

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch)
    if (setOpenSearch) {
      setIsOpen(false)
      setSearchValue('')
    }
  }

  useEffect(() => {
    if (scrollDirection === 'down') {
      setTimeout(() => {
        setOpenSearch(false)
        setIsOpen(false)
      }, 200)
    }
  }, [scrollDirection])

  //Handle click out of nav menu
  useEffect(() => {
    const handleOutClick = (e) => {
      if (!element.current.contains(e.target))
        setOpenSearch(false)
    }
    document.addEventListener('mousedown', handleOutClick)
  });

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!element.current.contains(e.target))
        setIsOpen(false)
    }
    document.addEventListener('mousedown', handleOutClick)
  });

  //Handle screen sizing
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  });

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsOpen(false)
    }
  }, [windowWidth])

  return (
    <header ref={element} className={`fixed transition-all z-50 w-full ${isOpen ? 'text-black' : 'text-white'} ${scrollDirection === 'down' ? "-top-96" : "top-0"}`} >
      <nav className={`max-w-7xl my-0 mx-auto py-3 px-2 flex justify-between items-center ${isOpen ? 'bg-amber-500' : ''}`} >
        <h2 className='text-2xl font-bold cursor-pointer'>
          <Link to='/'>DelishDelivery<span className={isOpen ? 'text-white' : 'text-amber-500'}>.</span></Link>
        </h2>
        <ul className='gap-10 text-lg hidden sm:flex'>
          {navItems.map((item, index) => <li key={index} className='relative cursor-pointer before:transition-all before:duration-300 hover:before:absolute before:w-0 hover:before:w-full hover:before:bottom-0 hover:before:h-1 hover:before:bg-amber-500'><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
        <div className='flex gap-3 items-center cursor-pointer'>
          <div onClick={handleOpenSearch}>
            <SearchIcon sx={{ fontSize: '2em' }} />
          </div>
          <div className='relative cursor-pointer'>
            <Link to='/cart'>
              <ShoppingCartIcon sx={{ fontSize: '2em' }} />
              {
                cartItems.length  ?
                <div className={`absolute flex justify-center items-center rounded-lg top-0 left-0 w-5 h-5 ${isOpen ? 'bg-white' : 'bg-amber-500'}`}>
                  {cartItems.length}
                </div> : ''
              }
            </Link>
          </div>
          <div onClick={() => { setIsOpen(!isOpen) && setOpenSearch(false) }} className='menu-icon block cursor-pointer sm:hidden'>
            <MenuIcon
              sx={{ fontSize: '2em' }}
            />
          </div>
        </div>
      </nav>
      {
        isOpen ?
          <ul className={`absolute top-14 z-50 w-full flex sm:hidden flex-col bg-amber-500`}>
            <>
              {navItems.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li className='w-full text-lg text-center py-3 hover:bg-amber-400 cursor-pointer'>
                    {item.name}
                  </li>
                </Link>
              ))}
            </>
          </ul> : ''
      }
      <Animation>
        {openSearch ? <motion.div
          initial={{
            y: '-100vh',
            opacity: 0
          }}
          animate={{
            y: '0',
            opacity: 1,
            transition: {
              duration: 0.05,
              type: 'spring',
              damping: 35,
              stiffness: 500
            }
          }}
          exit={{
            y: '-100vh',
            opacity: 0
          }}
          className='relative max-w-xl w-full mx-auto'>
          <input className='w-full p-2 text-black border-2 border-amber-500' type="text" placeholder='Search...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <div className='absolute z-30 w-full min-h-fit max-h-80 bg-amber-500 overflow-auto'>
            {searchValue.length !== 0 ? products
              .filter(prod => prod.name.toLowerCase().includes(searchValue.toLowerCase(), 0) || prod.type.toLowerCase().includes(searchValue.toLowerCase(), 0))
              .map(prod => {
                return <Link key={prod.id} to={`/product/${prod.id}`}>
                  <div className='flex items-center w-full h-20 p-1 border-b-2 border-amber-400'>
                    <img className='w-24' src={prod.img} alt="" />
                    <p className='text-black sm:text-lg text-center w-full'>{prod.name}</p>
                    <NavigateNextIcon />
                  </div></Link>
              }) : ''}
          </div>
        </motion.div> : ''}
      </Animation>
    </header>
  )
}

export default Navbar