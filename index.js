let mySongs = []
let mySingers = []
let myLinks = []
const tableHeading = `<thead>
<tr>
    <td>Title</td>
    <td>Singer</td>
    <td>Links</td>
</tr>
</thead>`
const songName = document.getElementById("title")
const singerName = document.getElementById("singer")
const linkName = document.getElementById("link-input")
const saveBtn = document.getElementById("save-btn")
let songsTable = document.getElementById("table")
const deleteButton = document.getElementById("delete-btn")
let fromLocalStorage = localStorage.getItem("mysongs", "mysingers", "mylinks")
let songsLocalStorage = JSON.parse(localStorage.getItem("mysongs"))
let singerLocalStorage = JSON.parse(localStorage.getItem("mysingers"))
let linksLocalStorage = JSON.parse(localStorage.getItem("mylinks"))
songsTable.innerHTML  = tableHeading

if (fromLocalStorage) {
    mySongs = songsLocalStorage
    mySingers = singerLocalStorage
    myLinks = linksLocalStorage
    displaySongs(mySongs, mySingers, myLinks)
}


function displaySongs(songs, singers, links) {
    let tableData = ""
    for (let i = 0; i < songs.length; i++) {
        tableData += `
        <tr>
            <td>${songs[i]}</td>
            <td>${singers[i]}</td>
            <td>
                <a target = "_blank" href = "${links[i]}">Click Here To Open</a>
            </td>
        </tr>
        `
    }
    songsTable.innerHTML = tableHeading +  tableData
}
saveBtn.addEventListener("click", function () {
    if (songName.value == "") {
        alert("Please enter the name of the song")
    } else if (singerName.value == "") {
        alert("Please enter the name of the singer")
    } else if (linkName.value =="") {
        alert("Please fill in the path to the song")
    }
    else {
        mySongs.push(songName.value)
        mySingers.push(singerName.value)
        myLinks.push(linkName.value)
        localStorage.setItem("mysongs", JSON.stringify(mySongs))
        localStorage.setItem("mysingers", JSON.stringify(mySingers))
        localStorage.setItem("mylinks", JSON.stringify(myLinks))
        displaySongs(mySongs, mySingers, myLinks)
        singerName.value = ""
        songName.value = "" 
        linkName.value = ""
    }
})

deleteButton.addEventListener("dblclick", function() {
    localStorage.clear()
    mySongs = ""
    myLinks = ""
    mySingers = ""
    displaySongs(mySongs, mySingers, myLinks)
})
