import ReactPlayer from 'react-player';
import React , {useState , useEffect} from 'react';

function SectionVideo(){
    const [isFavorite, setIsFavorite] = useState(false);
    const [playTime, setPlayTime] = useState(0);

    const handleProgress = (state) => {
        setPlayTime(state.playedSeconds);
    }

    
    return (
         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="gallery-item relative h-80">
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=oUFJJNQGwhk' 
                        controls={true} 
                        onProgress={handleProgress} 
                        height='100%' 
                        width='100%' 
                    />
                </div>
        </div>
    )
}
export default SectionVideo