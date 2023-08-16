const Filters = ({
    onSearch,
    onSetSearch,
    onSpeciesSelect,
    onSetSpeciesSelect,
    onStatusSelect,
    onSetStatusSelect,
    onGenderSelect,
    onSetGenderSelect,
    onCharacterSearch,
}) => {
    const checkFilters = () => {
        if (onSearch !== '') {
            onCharacterSearch(onSearch, onSpeciesSelect, onStatusSelect, onGenderSelect)
        } else {
            onCharacterSearch('', onSpeciesSelect, onStatusSelect, onGenderSelect)
        }
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            checkFilters()
        }
    }

    const handleButtonClick = () => {
        checkFilters()
    }

    const handleFilterSpecies = (species) => {
        onSetSpeciesSelect(species)
        onCharacterSearch(onSearch, species, onStatusSelect, onGenderSelect)
    }

    const handleFilterStatus = (status) => {
        onSetStatusSelect(status)
        onCharacterSearch(onSearch, onSpeciesSelect, status, onGenderSelect)
    }
    const handleFilterGender = (gender) => {
        onSetGenderSelect(gender)
        onCharacterSearch(onSearch, onSpeciesSelect, onStatusSelect, gender)
    }

    return (
        <div className='p-5 my-5 bg-[#444955] rounded-xl justify-between lg:flex'>
            {/* Search */}
            <div className='flex justify-between mb-5 md:justify-normal lg:mb-0'>
                <input
                    className='px-2 rounded-xl w-full lg:w-56 xl:w-[26rem]'
                    type='search'
                    placeholder='Enter name...'
                    onChange={(e) => {
                        onSetSearch(e.target.value)
                        if (e.target.value === '') onCharacterSearch()
                    }}
                    onKeyDown={handleKey}
                    value={onSearch}
                />
                <button
                    className='bg-[#2c3038] p-2 rounded-xl ml-2 cursor-pointer text-white hover:text-black hover:bg-white'
                    onClick={handleButtonClick}
                >
                    Search
                </button>
            </div>

            {/* Filters */}
            <div className='space-y-2 md:flex items-baseline 2xl:space-x-20 2xl:pr-40'>
                <div className='text-white'>
                    Species:
                    <select
                        onChange={(e) => handleFilterSpecies(e.target.value)}
                        className=' text-black cursor-pointer ml-2'
                    >
                        <option value={'#'}>Choose species</option>
                        <option value={'human'}>Human</option>
                        <option value={'humanoid'}>Humanoid</option>
                        <option value={'alien'}>Alien</option>
                        <option value={'animal'}>Animal</option>
                        <option value={'robot'}>Robot</option>
                        <option value={'mytholog'}>Mythological Creature</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
                <div className='text-white md:ml-2'>
                    Status:
                    <select
                        onChange={(e) => handleFilterStatus(e.target.value)}
                        className='text-black cursor-pointer ml-4'
                    >
                        <option value={'#'}>Choose status</option>
                        <option value={'alive'}>Alive</option>
                        <option value={'dead'}>Dead</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
                <div className='text-white md:ml-2'>
                    Gender:
                    <select
                        onChange={(e) => handleFilterGender(e.target.value)}
                        className='text-black cursor-pointer ml-2'
                    >
                        <option value={'#'}>Choose gender</option>
                        <option value={'female'}>Female</option>
                        <option value={'male'}>Male</option>
                        <option value={'genderless'}>Genderless</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters
