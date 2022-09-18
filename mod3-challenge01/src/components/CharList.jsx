import { useEffect, useState } from "react";
import { getCharacters } from "../service";
import Char from "./Char";

  
const CharList = () => {
    const [charList, setCharList] = useState([]);
    const[image, setImage] = useState('');
    const[name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getCharacters()
                .then((data) => setCharList(data.results))
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false));
        }, 1500);
        }, []);
        

    
    
    return (
        <div className='page'>        
        {isLoading && <span className='loading-text'>Loading...</span>}
        <div className="color-select" alt="HOLA MUNDO">
            {!isLoading && <img src={image} alt="- No hay imagen..." />}
            <p>{name}</p>
        </div>
            
        {charList.map((char) => (
            <Char 
                key={char.id}
                name={char.name} 
                status={char.status} 
                species={char.species}
                imageUrl={char.image} 
                setImage={setImage}
                setName={setName}
            />))}
        </div>
    );
};

export default CharList;