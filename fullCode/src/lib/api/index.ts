import axios, { AxiosResponse } from 'axios';
import Hit from './dto/Hit.dto';

interface Сnverter {
  [U: string]: string
}

export function translit(word:string){
	var converter:Сnverter  = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',   
	};

  return word.toLowerCase().split("").map( (item) => {
    return converter[item]??item;
  }).join("");
}


interface Type {
  token: string,
  searchArtist(name:string):  Promise<Hit[]>,
  searchSong (id:string) : Promise<any>,
}

const api: Type = {
  token:  "uJb5ieWNq-XtoCl8uooVuNJb_ZLobSBJAFhDqGyYX61pCFJmeVKD2ejA4qTpRBtL",

  searchArtist (name:string) : Promise<Hit[]> {
    const url  = `https://api.genius.com/search?access_token=${this.token}&q=${translit(name)}`
    return axios.get(url).then( ({data}: AxiosResponse ) => {
      return data.response.hits as Hit[];
    })
  },

  searchSong (id:string) : Promise<any> {
    const url  = `https://api.genius.com/songs/${id}?access_token=${this.token}`
    return axios.get(url).then( ({data}: AxiosResponse ) => {
      return data.response;
    })
  }
}


export default api;