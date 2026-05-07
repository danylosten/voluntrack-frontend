import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to Voluntrack</h1>
        <p>This is the main page content...</p>
      </main>
    </div>
  );
}

export default Home;