import icon_discover from 'imgs/icons/icon';
import icon_explorer from 'imgs/icons/icon-1';
import icon_search from 'imgs/icons/icon-2';
import icon_music from 'imgs/icons/icon-3';
import icon_albums from 'imgs/icons/icon-4';
import icon_artist from 'imgs/icons/icon-5';
import icon_cover from 'imgs/icons/icon-6';
import icon_favorites from 'imgs/icons/icon-7';
import icon_shared from 'imgs/icons/icon-8';
import icon_downloads from 'imgs/icons/icon-9';

import icon_settings from 'imgs/icons/icon-10';
import icon_logout from 'imgs/icons/icon-11';


type Type = Array<{
  head: string,
  items: Array<{
    Icon: any,
    text: string,
    route: string
    active?: boolean,
  }>
}>

export const routes: Type = [
  {head: "Menu",
    items: [
      {
        Icon: icon_discover, 
        text: "Dscover", 
        route: "",
        active: true,
      },
      {
        Icon: icon_explorer, 
        text: "Explorer", 
        route: "",
      },
      {
        Icon: icon_search , 
        text: "Search", 
        route: "",
      }
    ]
  },
  {head: "Library",
    items: [
      {
        Icon: icon_music, 
        text: "My Music", 
        route: "",
      },
      {
        Icon: icon_albums, 
        text: "Albums", 
        route: "",
      },
      {
        Icon: icon_artist, 
        text: "Artists", 
        route: "",
      }
    ]
  },
  {head: "Playlist",
    items: [
      {
        Icon: icon_cover, 
        text: "Cover", 
        route: "",
      },
      {
        Icon: icon_favorites, 
        text: "Favorites", 
        route: "",
      },
      {
        Icon: icon_shared , 
        text: "Shared", 
        route: "",
      },
      {
        Icon: icon_downloads , 
        text: "Downloads", 
        route: "",
      }
    ]
  },
  {head: "Others",
    items: [
      {
        Icon: icon_settings, 
        text: "Settings", 
        route: "",
      },
      {
        Icon: icon_logout, 
        text: "Logout", 
        route: "",
      },
    ]
  },
]

export default routes;