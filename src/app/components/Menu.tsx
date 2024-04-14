
const Menu: React.FC = () => {
  
  return (
    <div className="sticky top-0 w-full h-10 flex justify-center items-center text-xl overflow-hidden z-50">
      <ul className="flex w-auto text-green-700 bg-purple-100 bg-opacity-75 rounded-xl">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Portfolio</li>
        <li className="list-item">Shop</li>
        <li className="list-item">Custom</li>
      </ul>
    </div>
  )
}

export default Menu