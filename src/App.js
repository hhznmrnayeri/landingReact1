import './App.css';
import Header from './components/Header/Header'
import Clients from './components/clients/clients'
import Community from './components/community/Community'
import Section from './components/section/Section'
import Help from './components/help/Help';
import Customer from './components/customer/Customer';
import Marketing from './components/marketing/Marketing';
import Demo from './components/demo/Demo';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App bg-neutral-silver text-neutral-d-gray font-inter">
      <Header></Header>
      <Clients></Clients>
      <Community></Community>
      <Section></Section>
      <Help></Help>
      <Section></Section>
      <Customer></Customer>
      <Marketing></Marketing>
      <Demo></Demo>
      <Footer></Footer>
    </div>
  );
}

export default App;
