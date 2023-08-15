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
        <div className='p-5 my-5 bg-[#444955] rounded-xl justify-between lg:flex'>
            {/* Search */}
            <div className='flex justify-between mb-5 md:justify-normal lg:mb-0'>
                <input
                    className='px-2 rounded-xl w-full lg:w-56 xl:w-[26rem]'
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
            <div className='space-y-2 md:flex items-baseline 2xl:space-x-20'>
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
                        <option value={'genderless '}>Genderless</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters
