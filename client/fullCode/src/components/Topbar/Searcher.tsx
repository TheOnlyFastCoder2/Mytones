import icon_search  from 'imgs/icons/search.svg';
import React, {useEffect, useRef, useState } from 'react';
import api from '../../lib/api/genius';
import IHit from 'lib/api/genius/dto/Hit.dto';


type Details = HTMLDetailsElement;
type Input = HTMLInputElement;

interface EditedHit {
  url: string,
  srcImg: string,
  fullTitle: string,
  title: string,
  key: string,
}


export default function () {
  const refInput = useRef(null);
  const refDetails = useRef(null);
  const [hits,setHits] = useState<EditedHit[]>([]);

  function searcher({key, target}: React.KeyboardEvent<HTMLInputElement>) {
      const input = target as HTMLInputElement;

      if(key === "Enter") {
        api.searchArtist (input.value)
        .then( (hits: IHit[]) => {
            const newState:EditedHit[] = [];

            hits.forEach(({result}) => {
              newState.push({
                url: result.url,
                srcImg: result.header_image_thumbnail_url,
                fullTitle: result.full_title,
                title: result.title,
                key: result.full_title,
              })
            })

            setHits(newState);
        })
      }
  }

  function toggleDetals ({target}: MouseEvent) {
    const input:Input = refInput.current!;
    const details: Details = refDetails.current!;

    if(target ===  input) {
      details.open = true;
      input.classList.add("active");
    }    
    else {
      details.open = false;
      input.classList.remove("active")
    }
  }

  useEffect(() => {
    document.addEventListener('click',toggleDetals);
    return () => {
      document.removeEventListener('click', toggleDetals);
    }
  }, [])

  return (
    <div className="Searcher">
      <div className='Searcher_form'>
        <input ref={refInput} type="text" onKeyDown={searcher}/>
        <img src={icon_search}/>
      </div>

      <details ref={refDetails}>
        <summary></summary>
        <ul>
          {hits.map((data, i) => {
            return <Hit {...data}/>
          })}
        </ul>
        <div className="background"></div>
      </details>
    </div>
  ) 
}

function Hit({srcImg,fullTitle,title}: EditedHit) {
  return (
    <li className="Hit" key={srcImg}>
        <div className="Hit_avatar">
            <img src={srcImg} alt="" />
        </div>
        <h3 
          className="Hit_title" 
          title={fullTitle}>
          {title}
        </h3>
    </li>
  )
}