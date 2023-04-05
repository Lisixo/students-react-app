import { useEffect, useState } from 'react';
import './App.css';
import { Navigation } from './components/navigation';
import { StudentList } from './components/list';

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
          const _data = await res.json()

          setData(_data)
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
    {
      (dataState === 'ok' && data && data.students) && (
        <StudentList data={data} />
      )
    }
  </>
}

export default App;
