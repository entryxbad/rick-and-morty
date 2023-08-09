import { useEffect, useState } from 'react'
import Item from '../components/Item'
import { fetchAllCharacters } from '../config/api'

const HomePage = () => {
    const [mainData, setMainData] = useState([])
    const [search, setSearch] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchCharacter(search)
        }
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

    const searchCharacter = (strName) => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${strName}`)
            .then((response) => response.json())
            .then((data) => setMainData(data.results))
            .catch((error) => {
                console.log('Error from search', error)
            })
    }

    return (
        <div className='flex-1 justify-center items-center mx-5'>
            {/* Header */}
            <div className='flex justify-between p-10 items-center'>
                {/* Filter */}
                <input
                    type='search'
                    placeholder='Enter name...'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <div className='text-white'>
                    Filter by species:
                    <select className='ml-2 text-black'>
                        <option>Human</option>
                        <option>Alien</option>
                    </select>
                </div>
                <div className='text-white'>
                    Filter by status:
                    <select className='ml-2 text-black'>
                        <option>Alive</option>
                        <option>Dead</option>
                        <option>Unknown</option>
                    </select>
                </div>
                <div className='text-white'>
                    Filter by gender:
                    <select className='ml-2 text-black'>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Genderless</option>
                        <option>Unknown</option>
                    </select>
                </div>
            </div>

            {/* Content */}
            <div className='grid grid-cols-3 gap-4'>
                {mainData.map((item) => (
                    <Item
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        location={item.location.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage
