import { useEffect, useState } from 'react'
import axios from 'axios'

import './home.css'

function Home() {
  const [listaPlayers, setListaPlayers] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('https://badminton-etec.herokuapp.com/')
      .then(res => {
        const listaPlayers = (res.data).sort((a, b) => (a.wins < b.wins) ? 1 : -1)
        console.log(listaPlayers)
        setListaPlayers(listaPlayers)
      })
    }, [])
  
  return (
    <div className='Home'>
      <h1>GoBads</h1>
      {
        listaPlayers
          .map((player) => 
            <a href={`/${player.nickname}`}>
              <div className='player-card'>
                <p>{player.nickname}</p><p>{Math.round(player.wins/(player.wins+player.loses)*100)}%</p>
              </div>
            </a>
          )
      }
    </div>
  )
}

export default Home
