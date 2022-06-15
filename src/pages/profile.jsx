import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './profile.css'

import profile_pic from '../img/profile-pic.jpg'

function Profile() {
  const [player, setPlayer] = useState([])

  let { nickname } = useParams()

  useEffect(() => {
    const playerURL = `https://badminton-etec.herokuapp.com/p/${nickname}`
    console.log(nickname)
    axios.get(playerURL)
      .then(res => {
        const dadosPlayer = res.data
        setPlayer(dadosPlayer[0])
      })
    }, [])

  return (
    <div className="Profile">
      <img src={ player.avatar || profile_pic } alt="" />
      <h2 className='title'>{ player.nickname }</h2>
      <div className='status'>
        <p className='iten'>
          <span>Vitórias:</span>
          <span className='iten-data'>{ player.wins }</span>
        </p>
        <p className='iten'>
          <span>Derrotas:</span>
          <span className='iten-data'>{ player.loses }</span>
        </p>
        <p className='iten'>
          <span>Win Rate %:</span>
          <span className='iten-data'>{  Math.round(player.wins/(player.wins+player.loses)*100) }%</span>
        </p>
      </div>
    </div>
  )
}

export default Profile
