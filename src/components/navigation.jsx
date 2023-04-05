import css from './navigation.module.css'


export function Navigation({ dataStatus }){
  return <>
    <div className={css.container}>
      <span className={css.title}>Lista Studentów</span>
      {
        dataStatus === 'requesting'
        ? <span className={css.status} style={{color: 'blue'}}>Pobieranie danych</span>
        : dataStatus === 'ok'
        ? <span className={css.status} style={{color: 'green'}}>Pobrano</span>
        : <span className={css.status} style={{color: 'red'}}>Wystąpił błąd</span>
      }
    </div>
  </>
}