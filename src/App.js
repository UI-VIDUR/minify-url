import Header from "./components/Header";
import './assets/styles/App-min.css';
import BannerImg from './assets/images/banner-graphic.svg';

function App() {

  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 lg:px-0 sm:max-w-xl md:px-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="">
          <h1 className="text-5xl font-black uppercase font-sans">Create Short URLs</h1>
          <form className="my-8 flex">
            <input type="text" className="flex-1 border-2 border-r-0 border-b-slate-200 rounded-tl rounded-bl py-3 px-2 font-sans text-base" placeholder="Enter a link to minify it" />
            <button type="submit" className="bg-slate-800 text-white rounded-tr rounded-br py-2 px-5 text-sm uppercase font-semibold tracking-wider font-mono hover:bg-slate-700">Minify URL</button>
          </form>
        </div>
        <div className="">
          <img src={BannerImg} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
