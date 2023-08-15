const Filters = ({
    search,
    setSearch,
    selectedSpecies,
    setSelectedSpecies,
    selectedStatus,
    setSelectedStatus,
    selectedGender,
    setSelectedGender,
    searchCharacter,
}) => {
    const checkFilters = () => {
        if (search !== '') {
            searchCharacter(search, selectedSpecies, selectedStatus, selectedGender)
        } else {
            searchCharacter('', selectedSpecies, selectedStatus, selectedGender)
        }
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            checkFilters()
        }
    }

    const buttonClick = () => {
        searchCharacter(search, selectedSpecies, selectedStatus, selectedGender)
        checkFilters()
    }

    const handleFilterSpecies = (species) => {
        setSelectedSpecies(species)
        console.log(species)
        searchCharacter(search, species, selectedStatus, selectedGender)
    }
    const handleFilterStatus = (status) => {
        setSelectedStatus(status)
        console.log(status)
        searchCharacter(search, selectedSpecies, status, selectedGender)
    }
    const handleFilterGender = (gender) => {
        setSelectedGender(gender)
        console.log(gender)
        searchCharacter(search, selectedSpecies, selectedStatus, gender)
    }

    return (
        <div className='sm:flex-col md:flex xl:flex-row p-5 my-5 bg-[#444955] rounded-xl justify-between'>
            {/* Search */}
            <div className='sm:mb-5 xl:mb-0 flex'>
                <input
                    className='sm:w-full xl:w-72 2xl:w-96 px-2 py-2 rounded-xl'
                    type='search'
                    placeholder='Enter name...'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                    value={search}
                />
                <button
                    className='bg-[#2c3038] p-2 rounded-xl ml-2 cursor-pointer text-white hover:text-black hover:bg-white'
                    onClick={buttonClick}
                >
                    Search
                </button>
            </div>

            {/* Filters */}
            <div className='flex items-center 2xl:space-x-32'>
                <div className='text-white'>
                    Filter by species:
                    <select
                        onChange={(e) => handleFilterSpecies(e.target.value)}
                        className='sm:ml-0 lg:ml-2 text-black cursor-pointer'
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
                    Filter by status:
                    <select
                        onChange={(e) => handleFilterStatus(e.target.value)}
                        className='sm:ml-0 lg:ml-2 text-black cursor-pointer'
                    >
                        <option value={'#'}>Choose status</option>
                        <option value={'alive'}>Alive</option>
                        <option value={'dead'}>Dead</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
                <div className='text-white md:ml-2'>
                    Filter by gender:
                    <select
                        onChange={(e) => handleFilterGender(e.target.value)}
                        className='sm:ml-0 lg:ml-2 text-black cursor-pointer'
                    >
                        <option value={'#'}>Choose gender</option>
                        <option value={'female'}>Female</option>
                        <option value={'male'}>Male</option>
                        <option value={'genderless '}>Genderless</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters
