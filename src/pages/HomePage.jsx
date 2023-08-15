import { useEffect, useState } from 'react'
import Item from '../components/Item'
import { fetchAllCharacters } from '../config/api'
import NotFound from './NotFound'
import Filters from '../components/Filters'
import PopupItem from '../components/PopupItem'

const HomePage = () => {
    const [mainData, setMainData] = useState([])
    const [search, setSearch] = useState('')
    const [selectedSpecies, setSelectedSpecies] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [visible, setVisible] = useState(false)
    const [selectedCharacterId, setSelectedCharacterId] = useState(null)

    const togglePopup = (characterId) => {
        setSelectedCharacterId(characterId)
        setVisible(!visible)
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
        <div className='mx-5 pb-5'>
            {/* Filter */}
            <Filters
                search={search}
                setSearch={setSearch}
                selectedSpecies={selectedSpecies}
                setSelectedSpecies={setSelectedSpecies}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                searchCharacter={searchCharacter}
            />

            {/* Content */}
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                {!mainData ? (
                    <div className='flex justify-center items-center'>
                        <NotFound />
                    </div>
                ) : (
                    mainData.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            location={item.location.name}
                            togglePopup={() => togglePopup(item.id)}
                        />
                    ))
                )}
            </div>
            {visible && <PopupItem togglePopup={() => togglePopup(null)} characterId={selectedCharacterId} />}
        </div>
    )
}

export default HomePage
