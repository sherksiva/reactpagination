import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='flex-between'>
          <div className='logo-area'>
            <h2 className='logo'>Siva's Page...</h2>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <a className='btn' href='https://github.com/sherksiva?tab=repositories'>
                  Go to my Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
