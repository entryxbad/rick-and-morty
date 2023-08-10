import { useEffect, useState } from 'react'
import Item from '../components/Item'
import { fetchAllCharacters } from '../config/api'
import NotFound from './NotFound'

const HomePage = () => {
    const [mainData, setMainData] = useState([])
    const [search, setSearch] = useState('')
    const [selectedSpecies, setSelectedSpecies] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [selectedGender, setSelectedGender] = useState('')

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
            setSearch('')
        }
    }

    const buttonClick = () => {
        searchCharacter(search, selectedSpecies, selectedStatus, selectedGender)
        checkFilters()
        setSearch('')
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

    useEffect(() => {
        fetchAllCharacters()
            .then((response) => {
                setMainData(response.results)
                console.log('data', response.results)
            })
            .catch((error) => {
                console.log('Error from HomePage', error)
            })
    }, [])

    const searchCharacter = (strName, typeSpecies, typeStatus, typeGender) => {
        let apiUrl = 'https://rickandmortyapi.com/api/character'

        const queryParams = []

        if (strName) queryParams.push(`name=${strName}`)
        if (typeSpecies) queryParams.push(`species=${typeSpecies}`)
        if (typeStatus) queryParams.push(`status=${typeStatus}`)
        if (typeGender) queryParams.push(`gender=${typeGender}`)

        if (queryParams.length > 0) {
            apiUrl += `?${queryParams.join('&')}`
        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMainData(data.results))
            .catch((error) => {
                console.log('Error from search', error)
            })
    }

    return (
        <div className='flex-1 justify-center items-center mx-5 pb-5'>
            {/* Header */}
            <div className='flex justify-between p-10 items-center'>
                {/* Filter */}
                <div>
                    <input
                        className='px-2 py-2 rounded-xl'
                        type='search'
                        placeholder='Enter name...'
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                        value={search}
                    />
                    <button
                        className='bg-[#444955] p-2 rounded-xl ml-2 cursor-pointer text-white hover:text-black hover:bg-white'
                        onClick={buttonClick}
                    >
                        Search
                    </button>
                </div>
                <div className='text-white'>
                    Filter by species:
                    <select
                        onChange={(e) => handleFilterSpecies(e.target.value)}
                        className='ml-2 text-black cursor-pointer'
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
                <div className='text-white'>
                    Filter by status:
                    <select
                        onChange={(e) => handleFilterStatus(e.target.value)}
                        className='ml-2 text-black cursor-pointer'
                    >
                        <option value={'#'}>Choose status</option>
                        <option value={'alive'}>Alive</option>
                        <option value={'dead'}>Dead</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
                <div className='text-white'>
                    Filter by gender:
                    <select
                        onChange={(e) => handleFilterGender(e.target.value)}
                        className='ml-2 text-black cursor-pointer'
                    >
                        <option value={'#'}>Choose gender</option>
                        <option value={'female'}>Female</option>
                        <option value={'male'}>Male</option>
                        <option value={'genderless '}>Genderless</option>
                        <option value={'unknown'}>Unknown</option>
                    </select>
                </div>
            </div>

            {/* Content */}
            <div className='grid grid-cols-3 gap-4'>
                {!mainData ? (
                    <div className='col-span-3 flex justify-center items-center'>
                        <NotFound />
                    </div>
                ) : (
                    mainData.map((item) => (
                        <Item
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            location={item.location.name}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default HomePage
