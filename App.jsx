import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main style={styles.main}>
      <section>
        <h2>About Us</h2>
        <p>
          This is a simple website built with React JSX. You can expand this as you wish!
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email us at <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      &copy; {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
}

const styles = {
  header: {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
  },
  link: {
    color: '#fff',
    margin: '0 1rem',
    textDecoration: 'none'
  },
  main: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  footer: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem'
  }
};

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
