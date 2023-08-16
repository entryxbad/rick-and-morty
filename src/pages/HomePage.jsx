import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import { fetchAllCharacters } from '../config/api'
import NotFound from './NotFound'
import Filters from '../components/Filters'
import CharacterModal from '../components/CharacterModal'

const HomePage = () => {
    const [mainData, setMainData] = useState([])
    const [search, setSearch] = useState('')
    const [selectedSpecies, setSelectedSpecies] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [visible, setVisible] = useState(false)
    const [selectedCharacterId, setSelectedCharacterId] = useState(null)

    const onCardClick = (characterId) => {
        setSelectedCharacterId(characterId)
        setVisible(!visible)
    }

    useEffect(() => {
        fetchAllCharacters()
            .then((response) => {
                setMainData(response.results)
            })
            .catch((error) => {
                console.log('Error from HomePage', error)
            })
    }, [])

    const searchCharacter = (strName, typeSpecies, typeStatus, typeGender) => {
        let apiUrl = new URL('https://rickandmortyapi.com/api/character')

        apiUrl.searchParams.set('name', `${strName}`)
        apiUrl.searchParams.set('species', `${typeSpecies}`)
        apiUrl.searchParams.set('status', `${typeStatus}`)
        apiUrl.searchParams.set('gender', `${typeGender}`)

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
                onSearch={search}
                onSetSearch={setSearch}
                onSpeciesSelect={selectedSpecies}
                onSetSpeciesSelect={setSelectedSpecies}
                onStatusSelect={selectedStatus}
                onSetStatusSelect={setSelectedStatus}
                onGenderSelect={selectedGender}
                onSetGenderSelect={setSelectedGender}
                onCharacterSearch={searchCharacter}
            />

            {/* Content */}
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
                {!mainData ? (
                    <div className='flex justify-center items-center lg:col-span-3'>
                        <NotFound />
                    </div>
                ) : (
                    mainData.map((item) => (
                        <CharacterCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            location={item.location.name}
                            onCardClick={() => onCardClick(item.id)}
                        />
                    ))
                )}
            </div>
            {visible && <CharacterModal onCardClick={() => onCardClick(null)} characterId={selectedCharacterId} />}
        </div>
    )
}

export default HomePage
