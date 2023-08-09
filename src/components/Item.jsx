const Item = ({ name, status, species, gender, location, image }) => {
    return (
        <div className='flex space-x-5 bg-[#444955] rounded-xl'>
            {/* Image */}
            <div>
                <img className='rounded-l-xl h-56' src={image} alt={name} />
            </div>
            {/* Description */}
            <div className='flex flex-col justify-center'>
                <div>
                    <p className='text-white text-4xl font-bold'>{name}</p>
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
        </div>
    )
}

export default Item
