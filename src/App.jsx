import React from 'react'
import Header from "./components/Header"
import Score from "./components/Score"
import Input from "./components/Input"
import How from "./components/How"
import Faq from "./components/Faq"
import Foot from "./components/Foot"

export default function App() {
  const [isFaqDetailedOpen, setIsFaqDetailedOpen] = React.useState(false)
  
  return (
    <main className="flex flex-col justify-center items-center max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] px-[15px]">
      <Header isFaqDetailedOpen={isFaqDetailedOpen} setIsFaqDetailedOpen={setIsFaqDetailedOpen} />
      <Score game={12} guesses={0} hints={0}/>
      <Input />
      <How />
      <Faq />
      <Foot setIsFaqDetailedOpen={setIsFaqDetailedOpen}/>    
    </main>
  )
}