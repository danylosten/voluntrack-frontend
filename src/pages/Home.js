import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Головна сторінка Voluntrack</h1>
        <p>Тут буде контент головної сторінки...</p>
      </main>
    </div>
  );
}

export default Home;