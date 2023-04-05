import css from './list.module.css'

export function StudentList({ data: { students } }){
  return <>
    <div className={css.container}>
      <ListHeader />

      {
        students.map(value => <StudentItem key={value.id} data={value} />)
      }
    </div>
  </>
}

function ListHeader(){
  return <>
    <div className={css.element}>
      <span className={css.id}>ID</span>
      <span className={css.name}>Imię i Nazwisko</span>
      <span className={css.class}>Klasa</span>
      <span className={css.mail}>E-Mail</span>
    </div>
  </>
}

function StudentItem({ data }){
  return <>
  <div className={css.element}>
    <span className={css.id}>{data.id}</span>
    <span className={css.name}>{data.name} {data.surname}</span>
    <span className={css.class}>{data.class}</span>
    <span className={css.mail}>{data.mail}</span>
  </div>
</>
}