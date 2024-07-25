import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: false
    },
    {
      userName: 'TMchein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  return (
    <section className='app'>
    {
    users.map(({ userName, name, isFollowing }) => (
      <TwitterFollowCard
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
      >
        {name}
      </TwitterFollowCard>
    ))
    }
    
      
    
    </section>
  )
}
