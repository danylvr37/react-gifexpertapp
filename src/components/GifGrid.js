// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ( {category} ) => {


    const { data:images, loading } = useFetchGifs( category );

    return (
        <>        
            <h3> { category } </h3>

            { loading && <p>Loading</p> }  { /*loading ? <p>Loading</p> : null} */}

            <div className='card-grid'>

                {
                    images.map( img => 
                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    )
                }

            </div>
        </>
    )
}
