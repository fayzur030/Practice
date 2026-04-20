import Calculator from './component/Calculator'
import Navbar from './component/Common/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-screen'>
        <Calculator />
      </div>
    </>
  )
}
