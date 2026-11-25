import { useState } from 'react'

function App() {

  const [display, setDisplay] = useState("")

  const handleClick = (value) => {
    setDisplay(display + value)
  }

  const calculate = () => {
    try {
      setDisplay(String(eval(display)))
    } catch {
      setDisplay("Error")
    }
  }

  const clear = () => {
    setDisplay("")
  }

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-6 rounded-2xl w-80 shadow-xl">

        <h1 className="text-white text-2xl font-bold text-center mb-5">
          Calculator
        </h1>

        <input
          type="text"
          value={display}
          readOnly
          className="w-full p-4 mb-4 text-right text-2xl bg-gray-200 rounded-lg"
        />

        <button
          onClick={clear}
          className="w-full bg-red-500 text-white p-3 rounded-lg mb-3"
        >
          CLEAR
        </button>

        <div className="grid grid-cols-4 gap-3">

          {buttons.map((btn) => (

            <button
              key={btn}
              onClick={() =>
                btn === "=" ? calculate() : handleClick(btn)
              }
              className="bg-gray-600 text-white p-4 rounded-lg text-xl hover:bg-blue-500"
            >
              {btn}
            </button>

          ))}

        </div>

      </div>

    </div>
  )
}

export default App