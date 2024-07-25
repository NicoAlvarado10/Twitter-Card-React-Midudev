import { useState } from "react";

export function TwitterFollowCard ({ children,userName,initialIsFollowing })  {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClaseName = isFollowing
  ? 'follow-btn is-following'
  : 'follow-btn'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
   
    return (
        <article className='card'>
      <header className='card-header'>
        <img className='card-img' 
        alt="El avatar de midudev" src={`https://unavatar.io/${userName}`} />
        <div className='info-card'>
          <strong className='card-name'>{children}</strong>
          <span className='card-user-name'>@{userName}</span>
        </div>
      </header>
      <aside className='card-btn'>
        <button className={buttonClaseName} onClick={handleClick}>
          {text}
          </button>
      </aside>
    </article>

)

}
