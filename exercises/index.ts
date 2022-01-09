interface Artist {
    name: string;
    category: "artist";
}

interface Album {
    name: string;
    artistName: string;
    category: "album";
}

const artists: Artist[] = [
    {
        name: "Madonna",
        category: "artist",
    },
    {
        name: "Led Zeppelin",
        category: "artist",
    },
    {
        name: "Earth, Wind, and Fire",
        category: "artist",
    },
];

let albums: Album[] = [
    {
        name: "Like a Virgin",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Like a Prayer",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Houses of the Holy",
        artistName: "Led Zeppelin",
        category: "album",
    },
    {
        name: "In Through the Out Door",
        artistName: "Led Zeppelin",
        category: "album",
    },
];

// 1 - Write an extractName function that expects to be passed an object that has a name property and returns the value of that name property.
//
const extractName = (obj: { name: string }): string => {
    return obj.name;
};
//
// 2 - Write a getAlbumsByArtistName function that expects to receive a string as an argument and returns an array of objects of the Album type whose artistName property matches the argument.
//
const getAlbumsByArtistName = (arg: string): Album[] => {
    let album: Album[] = [];
    for (let i = 0; i < albums.length; i++) {
        if (arg === albums[i].artistName) {
            album.push(albums[i]);
        }
    }
    return album;
};
//
// 3 - Write a getArtistAndAlbumsByArtistName function that expects to receive a string as an argument and returns an array. The array it returns should contain:

// The one object of the Artist type whose name property matches the argument

// All of the objects of Album type whose artistName property matches the argument

// To find the objects of the Album type, use the getAlbumsByArtistName function that you wrote.
//
const getArtistAndAlbumsByArtistName = (arg: string): (Album | Artist)[] => {
    let album: (Album | Artist)[] = [];
    for (let i = 0; i < artists.length; i++) {
        if (arg === artists[i].name) {
            album.push(artists[i]);
        }
    }
    album.push(...getAlbumsByArtistName(arg));
    return album;
}; //
// 4 - Write a getArtistWithAlbumNames function that expects to receive an array that contains a single object of the Artist type and any number of objects of the Album type (the idea is that the caller would obtain this array by calling the getArtistAndAlbumsByArtistName function). The getArtistWithAlbumNames function should return an object of a new type that has all the same properties as objects of the Artist type but with the addition of an albumNames property, whose value is an array of strings. The strings in the albumNames array should be extracted from the objects of the Album type in the array that was passed to getArtistWithAlbumNames.
//
const getArtistWithAlbumNames = function (getArtistAndAlbumsByArtistName: function {
    
}) {
    let newAlbum = {
        name: "",
        category: "artist",
        albumNames: [],
    };
    getArtistAndAlbumsByArtistName.forEach(function (newObj: object) {
        if (newObj.category === "artist") {
            newAlbum.name = newObj.name;
        } else {
            newAlbum.albumNames.push(newObj);
        }
    });
    return newAlbum;
};