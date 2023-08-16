const fetchAllCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (!response.ok) {
            const errorMessage = `Response status: ${response.status} - ${response.statusText}`
            throw new Error(errorMessage)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error from fetchAllCharacters:', error)
        throw error
    }
}

const fetchCharacter = async (characterId) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        if (!response.ok) {
            const errorMessage = `Response status: ${response.status} - ${response.statusText}`
            throw new Error(errorMessage)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error from fetchCharacter:', error)
    }
}

export { fetchAllCharacters, fetchCharacter }
