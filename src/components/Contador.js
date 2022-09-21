import '../css/Contador.css'

export function Contador({ numClicks }){
  return (
    <div className='contador'>
      { numClicks }
    </div>
  );
}