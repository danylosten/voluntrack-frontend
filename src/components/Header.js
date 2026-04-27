import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      {/* Link працює як тег <a>, але не перезавантажує сторінку */}
      <Link to="/" style={styles.logo}>
        VOLUNTRACK
      </Link>
      
      <Link to="/login" style={styles.loginButton}>
        Вхід
      </Link>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between', // Розсуває елементи по краях
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#333',
    letterSpacing: '1px'
  },
  loginButton: {
    padding: '8px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: '500'
  }
};

export default Header;