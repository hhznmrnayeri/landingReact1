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
    <div className="App bg-white text-neutral-d-gray font-inter">
      <Header></Header>
      <Clients></Clients>
      <Community></Community>
      <Section styleName='bg-section1 h-96' title='The unseen of spending three years at Pixelgrade' caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'></Section>
      <Help></Help>
      <Section styleName='bg-section2 h-[490px]' title='How to design your site footer like we did' caption='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'></Section>
      <Customer></Customer>
      <Marketing></Marketing>
      <Demo></Demo>
      <Footer></Footer>
    </div>
  );
}

export default App;
