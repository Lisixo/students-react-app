import { useEffect, useState } from 'react';
import './App.css';
import { Navigation } from './components/navigation';

function App() {
  const [dataState, setDataState] = useState('requesting')
  const [data, setData] = useState({ students: [] })

  useEffect(() => {
    // Anonimowa asynchroniczna funkcja
    (
      async () => {
        // Wyłapywanie błędów
        try{
          const res = await fetch('/students.json')
          const data = await res.json()

          setData(data)
          setDataState('ok')
        } catch(e) {
          console.error(e)
          setDataState('error')
        }
      }
    )()
  })
  return <>
    <Navigation dataStatus={dataState} />
  </>
}

export default App;
