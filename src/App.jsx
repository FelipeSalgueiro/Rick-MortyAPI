import { useState, useEffect } from 'react'
import axios from 'axios'
import s from './app.module.scss'

export default function App() {

  const [desenho, setDesenho] = useState([])

  const pegarDados = async () => {
    const dados = await axios.get('https://api.sampleapis.com/rickandmorty/characters')
    setDesenho(dados.data)
  }

  useEffect(() => {
    pegarDados()
  }, [])

  return (
    <main>
      <h1>Aprendendo sobre API</h1>
      <h2>Personagens do desenho Rick & Morty:</h2>
      <section className={s.listCharacters}>
        {desenho.map((item) => (
          <article className={s.cardCharacter}>
            <h3>{item.name}</h3>
            <img src={item.image} alt="" />
            <p>Species: {item.species}</p>
            <p>Type: {item.type}</p>
            <p>Gender: {item.gender}</p>
            <p>Origin: {item.origin}</p>
            <p>Status: {item.status}</p>
          </article>
        ))}
      </section>
    </main>
  )
}