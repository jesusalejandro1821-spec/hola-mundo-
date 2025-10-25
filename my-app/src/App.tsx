import './App.css'
import Vehiculos from './components/Vehiculos'

function App() 
{
  return (
    <>
      <h1>venta de coches</h1>
      <Vehiculos description='coche 1' precio={500}  agencia='lagos' imagen='https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2024/10/prueba-aston-martin-vanquish-4256121.jpg?tf=1920x'/> 
      <Vehiculos description='coche 2' precio={5000} agencia='perro' imagen='https://th.bing.com/th/id/R.43318d7b8db2824b52561915c0e6bd2f?rik=r3c3yzt4JG2fig&riu=http%3a%2f%2fwww.autopista.es%2fmedia%2fcache%2foriginal%2fupload%2fimages%2fimagegallery%2fimagegallery-45597-564c91d585489.jpg&ehk=%2fjWqIzFybmmAjpqAzX4cCy8r3GXziUqNIsZuKSFmhfY%3d&risl=&pid=ImgRaw&r=0'/>  
      <Vehiculos description='coche 3' precio={200} agencia='las joyas' imagen='https://th.bing.com/th/id/R.56356441b87f55fa9e981f888b2e9b5e?rik=SPffjbS9jtrljg&riu=http%3a%2f%2fwww.autopista.es%2fmedia%2fcache%2foriginal%2fupload%2fimages%2fimagegallery%2fimagegallery-45597-564c91cee3d2a.jpg&ehk=LRSD%2f4NoJsMY2Qi7txioIBgTVtnwu6sKtTukRA%2f0V84%3d&risl=&pid=ImgRaw&r=0'/>  
      

    </>
  )
}

export default App
