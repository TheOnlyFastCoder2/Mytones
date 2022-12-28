import icon_search  from 'imgs/icons/search.svg';
import React, {useEffect, useRef } from 'react';

type Details = HTMLDetailsElement;
type Input = HTMLInputElement;



export default function () {
  const refInput = useRef(null);
  const refDetails = useRef(null);

  function searcher({key, target}: React.KeyboardEvent<HTMLInputElement>) {
      const input = target as HTMLInputElement;

      // if(key === "Enter") {
      //     searchArtist(input.value)
      //     .then( (artist) => {
      //         const {hits} = artist;
      //         console.log(artist)
      //         hits.map( ({result}) => {
      //           console.log(result)
      //       })
      //     })
      // }
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
          <li>sdsfsdfsdf</li>
          <li>sdsfsdfsdf</li>
          <li>sdsfsdfsdf</li>
          <li>sdsfsdfsdf</li>
          <li>sdsfsdfsdf</li>
        </ul>
        <div className="background"></div>
      </details>
    </div>
  ) 
}