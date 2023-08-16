const CharacterCard = ({ name, status, species, gender, location, image, onCardClick }) => {
    return (
        <div className='flex space-x-2 bg-[#444955] rounded-xl relative sm:space-x-4'>
            {/* Image */}
            <div>
                <img className='rounded-l-xl w-40 h-48 sm:w-full' src={image} alt={name} />
            </div>
            {/* Description */}
            <div className='flex-1'>
                <div>
                    <span className='text-white text-base font-bold sm:text-2xl' onClick={onCardClick}>
                        {name}
                    </span>
                    <span className='text-white text-base flex items-center sm:text-lg'>
                        <span
                            className={`h-2 w-2 rounded-full mr-2 ${
                                status === 'Alive' ? 'bg-green-600' : status === 'Dead' ? 'bg-red-600' : 'bg-gray-600'
                            }`}
                        ></span>
                        {status} - {species}
                    </span>
                </div>
                <div>
                    <p className='text-[#9e9e9e] font-semibold text-base sm:text-lg'>Last known location:</p>
                    <p className='text-white text-base sm:text-lg'>{location}</p>
                </div>
                <div>
                    <p className='text-[#9e9e9e] font-semibold text-base sm:text-lg'>Gender:</p>
                    <p className='text-white text-base sm:text-lg'>{gender}</p>
                </div>
            </div>
            <div
                className='absolute right-2 bottom-2 bg-[#2c3038] rounded-xl p-2 text-white hover:text-black hover:bg-white'
                onClick={onCardClick}
            >
                <button>Show more</button>
            </div>
        </div>
    )
}

export default CharacterCard
