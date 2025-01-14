import { useCounterContext } from "../hooks/useCounterContext"
// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About