import axios, { AxiosResponse } from 'axios';

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

interface Artist {"annotation_count":number,"api_path":string,"artist_names":string,"full_title":string,"header_image_thumbnail_url":string,"header_image_url":string,"id":number,"language":string,"lyrics_owner_id":number,"lyrics_state":string,"path":string,"pyongs_count":number,"relationships_index_url":string,"release_date_components":{"year":number,"month":number,"day":number},"release_date_for_display":string,"release_date_with_abbreviated_month_for_display":string,"song_art_image_thumbnail_url":string,"song_art_image_url":string,"stats":{"unreviewed_annotations":number,"hot":boolean,"pageviews":number},"title":string,"title_with_featured":string,"url":string,"featured_artists":[],"primary_artist":{"api_path":string,"header_image_url":string,"id":number,"image_url":string,"is_meme_verified":boolean,"is_verified":boolean,"name":string,"url":string,"iq":number}};

export const api = {
  token:  "uJb5ieWNq-XtoCl8uooVuNJb_ZLobSBJAFhDqGyYX61pCFJmeVKD2ejA4qTpRBtL",

  searchArtist (name:string) : Promise<Artist> {
    const url  = `https://api.genius.com/search?access_token=${this.token}&q=${translit(name)}`
    return axios.get(url).then( ({data}: AxiosResponse ) => {
      return data.response as Artist
    })
  }
}
