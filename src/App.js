import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './request';
import Nav from './components/Nav';

function App() {
  return (
   <div style={{backgroundColor:"black"}}>
    <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPoster={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending In India" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentry Movies" fetchUrl={requests.fetchDocumentaries}/>



   </div>
  );
}

export default App;
