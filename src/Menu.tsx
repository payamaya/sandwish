import { useEffect, useState } from 'react'
import './Menu.css' // We'll create this CSS file next
const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Apply the color scheme when the component mounts or when isDarkMode changes
    applyColorScheme(isDarkMode)
  }, [isDarkMode])

  const applyColorScheme = (darkMode: boolean) => {
    const root = document.documentElement
    if (darkMode) {
      // Dark mode colors
      root.style.setProperty('--bg-color', '#421c02')
      root.style.setProperty('--body-bg-color', '#2a1200') // Darker brown for body
      root.style.setProperty('--text-color', '#ffcaa6')
      root.style.setProperty('--accent-color', '#d35400')
      root.style.setProperty('--section-bg', '#361b00')
      root.style.setProperty('--border-color', '#fda943')
      root.style.setProperty('--shadow-color', 'rgba(255, 165, 80, 0.335)')
    } else {
      // Light mode colors - corrected values
      root.style.setProperty('--bg-color', '#ffcaa6') // Light peach container
      root.style.setProperty('--body-bg-color', '#ffcaa6') // Slightly darker peach for body
      root.style.setProperty('--text-color', '#5a2c02') // Dark brown text
      root.style.setProperty('--accent-color', '#d35400')
      root.style.setProperty('--section-bg', '#ffebd8')
      root.style.setProperty('--border-color', '#d35400')
      root.style.setProperty('--shadow-color', 'rgb(153, 62, 1)')
    }
  }

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className='menu-container'>
      <button
        onClick={toggleColorScheme}
        className='theme-toggle'
        style={{
          position: 'absolute',
          top: '55px',
          left: '55px',
          zIndex: 1000,
          padding: '8px 16px',
          borderRadius: '4px',
          backgroundColor: isDarkMode ? '#ffcaa6' : '#d35400',
          color: isDarkMode ? '#fff' : '#333',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <header className='header'>
        {/* Remove the h1 since we'll put the text on the image */}
        <div className='logo-container'>
          <div className='logo-text-top'>Sandwish</div>
          <img className='logo-image' src='/sandwish.png' alt='Sandwish Inn' />
          <div className='logo-text-bottom'>Inn</div>
        </div>
        <div className='opening-info'>
          <p className='opening'>
            <time dateTime='2024-04-22T07:00'>
              Opening at 07:00 Tuesday <br /> <span>April 22nd</span>
            </time>
          </p>
          <p className='delivery'>
            Delivery:
            <a href='tel:0096181531725' className='delivery-link'>
              81531725
            </a>
          </p>
        </div>
      </header>

      <div className='menu-content'>
        <section className='sandwiches-section'>
          <div className='section-header'>
            <h2>Sandwishes</h2>
            <div className=' sandwich-image'>
              <img className='img' src='/baguette.png' />
              {/* Replace with your actual image */}
              {/* <p>Sandwich Image</p> */}
            </div>
          </div>
          <ul className='menu-list'>
            <li>
              <label htmlFor=''>Taouk:</label>
              <span className='price'>350,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Kasbe:</label>
              <span className='price'>300,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Makanek:</label>
              <span className='price'>300,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Soujouk:</label>
              <span className='price'>300,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Fajita:</label>
              <span className='price'>350,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Ham & Cheese:</label>
              <span className='price'>300,000L.L</span>
            </li>
            <li>
              <label htmlFor=''> Fries sandwish(L):</label>{' '}
              <span className='price'>250,000L.L</span>
            </li>
            <li>
              <label htmlFor=''> Fries sandwish(S):</label>{' '}
              <span className='price'>200,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Crispy Sand:</label>
              <span className='price'>350,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Fajitas + Fries(L):</label>
              <span className='price'>550,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Fajitas + Fries(S):</label>
              <span className='price'>450,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Lebanese burger + Fries:</label>
              <span className='price'>450,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Crispy Sand + Fries:</label>
              <span className='price'>450,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Tawouk + Fries:</label>
              <span className='price'>450,000L.L</span>
            </li>
          </ul>
        </section>

        <section className='drinks-section'>
          <div className='section-header'>
            <div className='drink-image'>
              <img className='img' src='/cola.png' />
            </div>
            <h2>Drinks</h2>
          </div>
          <ul className='menu-list'>
            <li>
              <label htmlFor=''>Soft drink plastic:</label>{' '}
              <span className='price'>70,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Soft drink glass:</label>{' '}
              <span className='price'>30,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Water Small:</label>{' '}
              <span className='price'>30,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Water Big:</label>{' '}
              <span className='price'>40,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Beer:</label>{' '}
              <span className='price'>110,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Buz:</label>{' '}
              <span className='price'>100,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Najjar:</label>
              <span className='price'>50,000L.L</span>
            </li>
            <li>
              <label htmlFor=''>Nescafe:</label>
              <span className='price'>60,000L.L</span>
            </li>
          </ul>
        </section>
      </div>
      <fieldset>
        <legend className='legend'>Extras:</legend>
        <ul className='extra-ul'>
          <li className='extra-list'>
            Jello <span className='extra-span'>100,000L.L</span>
          </li>
          <li className='extra-list'>
            Castar <span className='extra-span'>150,000L.L</span>
          </li>
          <li className='extra-list'>
            Add Cheese: <span className='extra-span'>50,000L.L</span>
          </li>
          <li className='extra-list'>
            Fries box: <span className='extra-span'>150,000L.L</span>
          </li>
        </ul>
      </fieldset>

      {/* Placeholder for the map you'll add later */}
      <div className='map-container'>
        <h3>Our Location</h3>
        <div className='map-placeholder'>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.225348381774!2d35.55576631521086!3d33.88668098065161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzEyLjEiTiAzNcKwMzMnMjcuNSJF!5e0!3m2!1sen!2slb!4v${Math.floor(Date.now() / 1000)}!5m2!1sen!2slb`}
            width='100%'
            height='300'
            style={{ border: 0 }}
            // allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Sandwish Inn Location'
          ></iframe>
        </div>
        <div className='location-info'>
          <p className='para'>Sed el Bouchrieh, Lebanon</p>
          <a
            href='https://maps.google.com?q=33.886689,35.557916'
            target='_blank'
            rel='noopener noreferrer'
            className='directions-link'
          >
            Get Directions →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menu
