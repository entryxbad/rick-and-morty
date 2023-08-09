import { useEffect, useState } from 'react'
import Item from '../components/Item'
import { fetchAllCharacters } from '../config/api'

const HomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchAllCharacters()
            .then((response) => {
                setData(response.results)
                console.log('data', response.results)
            })
            .catch((error) => {
                console.log('Error from HomePage', error)
            })
    }, [])

    return (
        <div className='flex-1 justify-center items-center mx-5'>
            {/* Header */}
            <div className='flex justify-between'>
                {/* Filter */}
                <div>dead</div>
                <div>name</div>
                <div>human</div>
                <div>not human</div>
            </div>

            {/* Content */}
            <div className='grid grid-cols-3 gap-4'>
                {data.map((item) => (
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
