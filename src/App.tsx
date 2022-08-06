import './App.css';
import data from './utils/Data';
import AssetCard from './components/AssetCard';
import Activity from './assets/activity';

function App() {
  return (
    <div className="min-h-screen bg-background-black pt-[200px] px-[83.89px]">
      <div className='flex justify-start items-center space-x-4 text-text-white text-base font-normal'>
        <Activity/>
        <span>Trending Assets</span>
      </div>
      <div className='flex space-x-10 overflow-scroll mt-[58px] no-scrollbar'>
        {
          data.map((asset , id)=>{
            return (
              <AssetCard key={id} asset={asset}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
