const searsSongs= () => {
const searsInput=document.getElementById('searchfild').value;
const url=` https://api.lyrics.ovh/suggest/${searsInput}`
console.log(url);
fetch(url)
.then(res => res.json())
.then(album => songtitel(album.data))
.catch(error => displayErorr('Somthing Wrong.plz Try Again!'));
}

const songtitel = songs =>{
    const songDiv=document.getElementById("showSong"); 
    songDiv.innerHTML='';
   songs.forEach(song => {
      const  showSongTitle=document.createElement('div');
      showSongTitle.className="single-result row align-items-center my-3 p-3"
      songDiv.appendChild( showSongTitle).innerHTML=`<div class="col-md-9">
      <h3 class="lyrics-name">${song.title}</h3>
      <p class="author lead">Album by <span>${song.artist.name}</span></p>
      <audio controls>
  <source src="${song.preview}" type="audio/mpeg">
</audio>
  </div>
  <div class="col-md-3 text-md-right text-center">
      <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
  </div>`

   });
}
const getLyric=(artist,title)=>{
const url=`https://api.lyrics.ovh/v1/${artist}/${title}`
fetch(url)
.then(res=>res.json())
.then(data=> displayLirycs(data.lyrics));
}
const  displayLirycs= lyrics =>{
  const songDiv=document.getElementById('lyrics-song');
  songDiv.innerText= lyrics;
}
const displayErorr= error =>{
    const errorMsg=document.getElementById('errorMssg');
    errorMsg.innerText= error;
}