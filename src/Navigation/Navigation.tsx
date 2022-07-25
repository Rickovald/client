import { NavLink } from 'react-router-dom'
import s from './navigation.module.sass'

const Navigation = () => {
  return (
    <div className={s.root}>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </div>
  )
}

export default Navigation