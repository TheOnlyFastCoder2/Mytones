import IconIcList from 'imgs/icons/ic-list';

export default function () {
  return (
    <div className="Main">
  
      <div className="Main_left"></div>

      <div className="Main_right">

        <div className="topPanel">
          <h2>Top 100 Weekly</h2>
          <h4>More list</h4>
        </div>
        
        <ul className="tracks">
          {Array.from(new Array(40)).map((_, i) => {
            return <Track index={i+1}  key={i}/>
          })}
        </ul>

        <div className="player">
            <h2>Now playing</h2>

            <div className="container">
              <div className="player_picture"></div>
              <h1 className="player_songName">Dynamite</h1>
              <p className="player_teamName">BTS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

type TTrack = {index:number};

function Track ({index}:TTrack) {
  return (
    <li className="Track">
      <h2 className="Track_num">
        {`${index}`.length > 2 ? index : "0"+index}
      </h2>

      <div className="song">
        <div className="song_avatar"></div>
        <div className="song_info">
          <h3>Anyone</h3>
          <h5>Justin Bieber</h5>
        </div>
        <span>03:11</span>
        <IconIcList/>
      </div>
    </li>
  )
}