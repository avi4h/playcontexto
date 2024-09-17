import React from 'react'
import Header from "./components/Header"
import Score from "./components/Score"
import Input from "./components/Input"
import How from "./components/How"
import Faq from "./components/Faq"
import Foot from "./components/Foot"

export default function App() {
  return (
    <main className="flex flex-col justify-center items-center max-w-[480px] sm:w-[480px] md:w-[480px] lg:w-[480px] px-[15px]">
      <Header />
      <Score game={729} guesses={0} />
      <Input />
      <How />
      <Faq />
      <Foot />    
    </main>
  )
}