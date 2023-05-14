import { Web3Button } from '@web3modal/react'

function App() {
  return (
    <div className='flex flex-col items-center justify-center w-5xl mx-auto p-3'>
      <Web3Button />
      <div className="p-3">
          <img src="/3.jpeg" alt="" width={600} className='rounded-tl-lg rounded-tr-lg' />
        </div>
    </div>
  );
}

export default App;
