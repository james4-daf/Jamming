import React from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "Dafs playlist",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "playlistArtist1",
          album: "playlistAlbum1",
          id: 4,
        },
        {
          name: "playlistName2",
          artist: "playlistArtist2",
          album: "playlistAlbum2",
          id: 5,
        },
        {
          name: "playlistName3",
          artist: "playlistArtist3",
          album: "playlistAlbum3",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  //
  addTrack(track) {
    let tracks = this.state.playlistTracks; //creating an object of tracks which is playlistTracks
    //using find to to see if track exists
    //using id to see if exists
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    //if doesnt exitst, push the track to tracks
    tracks.push(track);
    //then update the state
    this.setState({
      playlistTracks: tracks,
    });
  }

  removeTrack(track) {
    //filter out
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((filteredTrack) => filteredTrack.id !== track.id);

    this.setState({
      playlistTracks: tracks,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
