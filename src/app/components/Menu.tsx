
const Menu: React.FC = () => {
  
  return (
    <div className="sticky top-0 w-full h-10 flex justify-center items-center text-xl z-50">
      <ul className="flex w-auto gap-10 px-6 text-green-700 bg-purple-100 bg-opacity-60 rounded-xl">
        <li className="list-item">Home</li>
        <li className="list-item">Shop</li>
        <li className="list-item">Portfolio</li>
        <li className="list-item">Custom</li>
        <li className="list-item">About</li>
      </ul>
    </div>
  )
}

export default Menu