import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import selfPhoto from './assets/images/download.jpg'
import './App.css'
import MainCard from './components/MainCard.jsx'
import ImageWrapper from './components/ImageWrapper.jsx'
import Title from './components/Title.jsx'
import Chip from './components/Chip.jsx'
import { faFileCode, faLaptopCode, faLocationDot, faMobileScreenButton, faGlobe, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <div className="max-w-[1280px] h-screen m-auto p-[2rem] flex items-center">
        <MainCard className="flex flex-row gap-16">
          <ImageWrapper image={selfPhoto} alt="Photo of Josh Banggud"/>
          <div className='w-max h-full py-16 flex flex-col justify-center items-start'>
            <p className='text-2xl italic font-normal'>
              Hey! I'm
            </p>
            <div className='flex flex-wrap gap-x-4'>
              <span className='relative group'>
                <Title text="Josh" className='animate group-hover:text-black transition duration-100'/>
                <svg className='absolute inset-0 z-0 scale-x-150 scale-y-125 translate-2 opacity-0 animate group-hover:opacity-100 group-hover:animate-draw' width="139" height="72" viewBox="0 0 139 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M94.7495 66.8978C70.0645 60.9183 37.2722 65.9761 14.6987 55.102C10.0097 52.8432 6.72244 49.4826 4.95856 46.0212C-10.4308 15.821 25.1374 8.88605 47.5 5.40844C67.9236 2.23236 120.099 4.81599 133.574 24.4397C143.927 39.5171 129.271 50.928 116.839 55.1721C99.502 61.0903 80.5855 67.9054 62.1244 68.9118C42.5298 69.9799 11.0624 74.9591 3.94874 51.4094C2.63279 47.0529 2.67178 43.9238 3.23447 40.8394C8.27313 13.2201 57.409 11.1073 77.5 11C88.5912 10.9408 129.276 19.8807 129.923 35.0457C130.358 45.2566 116.261 55.0505 107.563 58.0974C103.393 59.5581 98.0158 60.9336 85.4299 61.9548C72.8441 62.976 53.2122 63.6012 41.3482 63.7357C25.6507 63.9137 6.02851 63.5711 4.19125 43.6472C2.04935 20.4198 21.3115 9.09648 41.2004 5.10151C50.4158 3.25049 62.9202 2.12509 75.0513 1.92048C90.9621 1.65211 138.349 3.68106 127.539 31.7965C121.67 47.0631 104.494 50.4392 98.1598 63.1086"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  pathLength={1}
                />
                </svg>
              </span>
              <Title text="Elizalde"/>
              <Title text="Banggud"/>
            </div>
            <div className='pt-12 pb-8 flex flex-col items-start gap-2'>
              <p>
                I'm a Computer Science graduate focusing on web and mobile development, creating functional and aesthetically-pleasing systems for users.
              </p>
              <Chip icon={faLocationDot} text="Davao City, Philippines" style={0}/>
            </div>
            <div className='flex flex-wrap gap-6'>
              <Chip icon={faLaptopCode} text="Frontend Development" style={1}/>
              <Chip icon={faGlobe} text="UI/UX Design" style={1}/>
              <Chip icon={faMobileScreenButton} text="Mobile Development" style={1}/>
              <Chip icon={faFileCode} text="Full-Stack Development" style={1}/>
            </div>
          </div>
        </MainCard>
      </div>
    </>
  )
}

export default App
