const Item = ({ name, status, species, gender, location, image, id, togglePopup }) => {
    return (
        <div className='flex space-x-5 bg-[#444955] rounded-xl relative'>
            {/* Image */}
            <div>
                <img className='rounded-l-xl h-56' src={image} alt={name} />
            </div>
            {/* Description */}
            <div className='flex flex-col justify-center'>
                <div>
                    <span className='text-white text-4xl font-bold' onClick={togglePopup}>
                        {name}
                    </span>
                    <span className='text-white text-xl flex items-center'>
                        <span
                            className={`h-2 w-2 rounded-full mr-2 ${
                                status === 'Alive' ? 'bg-green-600' : status === 'Dead' ? 'bg-red-600' : 'bg-gray-600'
                            }`}
                        ></span>
                        {status} - {species}
                    </span>
                </div>
                <div>
                    <p className='text-[#9e9e9e] font-semibold'>Last known location:</p>
                    <p className='text-white text-lg'>{location}</p>
                </div>
                <div>
                    <p className='text-[#9e9e9e] font-semibold'>Gender:</p>
                    <p className='text-white text-lg'>{gender}</p>
                </div>
            </div>
            <div
                className='absolute right-3 bottom-3 bg-[#2c3038] rounded-xl p-2 text-white hover:text-black hover:bg-white'
                onClick={togglePopup}
            >
                <button>Show more</button>
            </div>
        </div>
    )
}

export default Item
