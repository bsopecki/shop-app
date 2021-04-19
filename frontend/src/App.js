import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <main className='main py-3'>
        <Container>
          <Homescreen/>
      </Container>
    </main>
        <Footer />
    </>
  );
}

export default App;
