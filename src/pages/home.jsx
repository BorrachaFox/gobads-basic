import { useEffect, useState } from 'react'
import axios from 'axios'

import './home.css'

function Home() {
  const [listaPlayers, setListaPlayers] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('https://badminton-etec.herokuapp.com/p/')
      .then(res => {
        const listaPlayers = (res.data).sort((a, b) => (a.wins < b.wins) ? 1 : -1)
        console.log(listaPlayers)
        setListaPlayers(listaPlayers)
      })
    }, [])
  
  return (
    <div className='Home'>
      <h1>GoBads</h1>

      <div className='tournament-card'>    
        <div className='title'> 
          <p>Next Tournament</p>
          <div className='tournament-data'>
            <h2 className='date'>21/06</h2>
            <p>Inscritos 0/16</p>
            <button>Inscrever-se</button>
          </div>
        </div>  
      </div>

      <div className='top-players'>
        <div className='title'> 
          <p>Top Players</p>
        </div>  
        {
          listaPlayers
            .map((player) => 
              <a href={`/${player.nickname}`}>
                <div className='player-card'>
                <img src={player.avatar} alt="" className='profile-pic'/><p>{player.nickname}</p>
                </div>
              </a>
            )
        }
      </div>
    </div>
  )
}

export default Home
