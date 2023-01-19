import { Habit } from './components/Habit';
import './styles/global.css';

export default function App() {
  return (
    <div>
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
    </div>
  )
}