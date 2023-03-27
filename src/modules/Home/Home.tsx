import React, { FC, useState } from 'react'

import secret from 'assets/images/Home/SECRET.png'

const Home: FC = () => {
  const [secretIsVisible, setSecretIsVisible] = useState<boolean>(false)

  const openSecret = () => {
    setSecretIsVisible(!secretIsVisible)
  }

  return (
    <div>
      <span
        onClick={openSecret}
        style={{ cursor: 'pointer', fontSize: '20px' } }
        >
        Home page

      </span>
      {
        secretIsVisible
          ? (<div style={{ margin: '0 auto' } } >
          <hr/>
          <p>зачем ты это сделал.</p>
          <img src={secret} alt={'secret'} />
        </div>)
          : ''
      }

    </div>
  )
}

export { Home }
