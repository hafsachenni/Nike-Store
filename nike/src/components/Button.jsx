const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-gray-600 rounded-full text-white border-gray-700 hover:bg-gray-500">
        {label}
        <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button