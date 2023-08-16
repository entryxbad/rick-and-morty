import { useEffect, useState } from 'react'
import { fetchCharacter } from '../config/api'

const CharacterModal = ({ onCardClick, characterId }) => {
    const [characterData, setCharacterData] = useState(null)

    useEffect(() => {
        fetchCharacter(characterId)
            .then((response) => {
                setCharacterData(response)
            })
            .catch((error) => {
                console.log('Error from CharacterModal:', error)
            })
    }, [characterId])

    return (
        <div className='fixed inset-0 flex min-w-[23.5rem] justify-center items-center bg-black bg-opacity-50'>
            <div className='flex flex-col space-y-2 bg-[#444955] p-5 rounded-xl text-white text-base md:text-xl'>
                {characterData ? (
                    <>
                        <p>Name: {characterData.name}</p>
                        <p>Status: {characterData.status}</p>
                        <p>Species: {characterData.species}</p>
                        <p>Gender: {characterData.gender}</p>
                        <p>Location: {characterData.location.name}</p>
                        <p>Origin: {characterData.origin.name}</p>
                        <img src={characterData.image} alt={characterData.name} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <button
                    className='mt-3 text-white bg-[#2c3038] rounded-xl p-2 hover:text-black hover:bg-white'
                    onClick={onCardClick}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default CharacterModal
