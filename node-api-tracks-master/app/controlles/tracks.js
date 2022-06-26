const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const URL_PUBLIC = `http://localhost:${process.env.PORT}`
const getItems = async(req, res) => {
    try {
        const bestTracksList = [{
                "_id": 1,
                "name": "The Gong of Knockout",
                "album": "Hypertoughness",
                "cover": "https://i.scdn.co/image/ab67616d0000b27345e4e07ff59243f539283e36",
                "artist": {
                    "name": "Fear, and Loathing in Las Vegas",
                    "nickname": "Fear, and Loathing in Las Vegas",
                    "nationality": "JP"
                },
                "duration": "3:30",
                "url": `${URL_PUBLIC}/the-gong-of-knockout.mp3`
            },
            {
                "_id": 2,
                "name": "Journey",
                "album": "The City Where the Wind Blows",
                "cover": "https://i.kfs.io/album/global/72822253,0v1/fit/500x500.jpg",
                "artist": {
                    "name": "Luck Life",
                    "nickname": "Luck Life",
                    "nationality": "JP"
                },
                "duration": "3:57",
                "url": `${URL_PUBLIC}/journey.mp3`
            },
            {
                "_id": 3,
                "name": "Valhalleluja",
                "album": "Stairway to Valhalla",
                "cover": "https://m.media-amazon.com/images/I/81ogiYG6-FL._SS500_.jpg",
                "artist": {
                    "name": "Nanowar Of Steel",
                    "nickname": "Nanowar Of Steel",
                    "nationality": "IT"
                },
                "duration": "5:49",
                "url": `${URL_PUBLIC}/valhalleluja.mp3`
            },
            {
                "_id": 4,
                "name": "Shimi",
                "album": "Join the Ranks of All Time",
                "cover": "https://i1.sndcdn.com/artworks-juposKR7GBcHrzXq-HrrRNQ-t500x500.jpg",
                "artist": {
                    "name": "Howl Be Quiet",
                    "nickname": "Howl Be Quiet",
                    "nationality": "JP"
                },
                "duration": "2:56",
                "url": `${URL_PUBLIC}/shimi.mp3`
            },
            {
                "_id": 5,
                "name": "Sugar Song To Bitter Step",
                "album": "Dr.Izzy",
                "cover": "https://m.media-amazon.com/images/I/51OA2vxJWSL.jpg",
                "artist": {
                    "name": "Unison Square Garden",
                    "nickname": "Unison Square Garden",
                    "nationality": "JP"
                },
                "duration": "4:13",
                "url": `${URL_PUBLIC}/sugar-song-to-bitter-step.mp3`
            }, 
            {
                "_id": 6,
                "name": "The State Of Massachusetts",
                "album": "The Meanest of Times",
                "cover": "https://i.scdn.co/image/ab67616d0000b273bbde8c132ee637be75212e26",
                "artist": {
                    "name": "Dropkick Murphys",
                    "nickname": "Dropkick Murphys",
                    "nationality": "US"
                },
                "duration": "3:54",
                "url": `${URL_PUBLIC}/the-state-of-massachusetts.mp3`
            },
            {
                "_id": 7,
                "name": "Kickapoo",
                "album": "The Pick Of Destiny",
                "cover": "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2021/11/the-pick-of-destiny-4e0fa734efce5.jpg",
                "artist": {
                    "name": "Tenacious D",
                    "nickname": "Tenacious D",
                    "nationality": "US"
                },
                "duration": "4:14",
                "url": `${URL_PUBLIC}/kickapoo.mp3`
            },
            {
                "_id": 8,
                "name": "Hazme Un Sitio Entre Tu Piel",
                "album": "Gaia II: La Voz Dormida",
                "cover": "https://m.media-amazon.com/images/I/619gYUR5LnL.jpg",
                "artist": {
                    "name": "Mägo de Oz",
                    "nickname": "Mägo de Oz",
                    "nationality": "ES"
                },
                "duration": "4:54",
                "url": `${URL_PUBLIC}/hazme-un-sitio-entre-tu-piel.mp3`
            }
        ];

        const metalTracksList = [
            {
                "_id": 1,
                "name": "Kaunaz Dagaz",
                "album": "Emblas Saga",
                "cover": "https://www.rafabasa.com/wp-content/uploads/imagenes/web/brothers_of_metal/portadas/emblas_saga300.jpg",
                "artist": {
                    "name": "Brothers Of Metal",
                    "nickname": "Brothers Of Metal",
                    "nationality": "SE"
                },
                "duration": "4:13",
                "url": `${URL_PUBLIC}/kaunaz-dagaz.mp3`
            },
            {
                "_id": 2,
                "name": "Shipwrecked",
                "album": "Back Through Time",
                "cover": "https://i.discogs.com/zUknlRgYf7GZ1RjZeyT7xcIiYlY3-eyPkumTW0-GRzQ/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMjkx/MDctMTMyNTk5OTAy/Ny5qcGVn.jpeg",
                "artist": {
                    "name": "Alestorm",
                    "nickname": "Alestorm",
                    "nationality": "Scotland"
                },
                "duration": "3:30",
                "url": `${URL_PUBLIC}/shipwrecked.mp3`
            },
            {
                "_id": 3,
                "name": "No Surrender",
                "album": "From Hell with Love",
                "cover": "https://m.media-amazon.com/images/I/61a-yOxT8NL.jpg",
                "artist": {
                    "name": "Beast In Black",
                    "nickname": "Beast In Black",
                    "nationality": "FI"
                },
                "duration": "4:15",
                "url": `${URL_PUBLIC}/no-surrender.mp3`
            },
            {
                "_id": 4,
                "name": "Skalds & Shadows",
                "album": "A Twist in the Myth",
                "cover": "https://e.snmc.io/i/1200/s/b730792b7ddcc97dfa410e1ef41b03a7/2704546",
                "artist": {
                    "name": "Blind Guardian",
                    "nickname": "Blind Guardian",
                    "nationality": "DE"
                },
                "duration": "3:13",
                "url": `${URL_PUBLIC}/skalds-and-shadows.mp3`
            },
            {
                "_id": 5,
                "name": "The Number Of The Beast",
                "album": "The Number Of The Beast",
                "cover": "https://i.discogs.com/yN5pSOYZWvad07aQ9iVpdJme_MBFvTl9b2EqAresvMw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMjg5/Ni0xMjE2NzU1MjM5/LmpwZWc.jpeg",
                "artist": {
                    "name": "Iron Maiden",
                    "nickname": "Iron Maiden",
                    "nationality": "EN"
                },
                "duration": "4:50",
                "url": `${URL_PUBLIC}/the-number-of-the-beast.mp3`
            },
            {
                "_id": 6,
                "name": "Ironmonger (The Copier of the Seven Keys)",
                "album": "Stairway To Valhalla",
                "cover": "https://m.media-amazon.com/images/I/51utmlc1XlL.jpg",
                "artist": {
                    "name": "Nanowar Of Steel",
                    "nickname": "Nanowar Of Steel",
                    "nationality": "IT"
                },
                "duration": "4:59",
                "url": `${URL_PUBLIC}/ironmonger.mp3`
            },
            {
                "_id": 7,
                "name": "Cowboys From Hell",
                "album": "Cowboys From Hell",
                "cover": "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/pantera.jpg",
                "artist": {
                    "name": "Pantera",
                    "nickname": "Pantera",
                    "nationality": "US"
                },
                "duration": "4:03",
                "url": `${URL_PUBLIC}/cowboys-from-hell.mp3`
            },
            {
                "_id": 8,
                "name": "Red Silence",
                "album": "Headshot",
                "cover": "https://f4.bcbits.com/img/a1480673840_10.jpg",
                "artist": {
                    "name": "Blaze Out",
                    "nickname": "Blaze Out",
                    "nationality": "ES"
                },
                "duration": "4:42",
                "url": `${URL_PUBLIC}/red-silence.mp3`
            }
        ];

        const jrockTracksList = [
            {
                "_id": 1,
                "name": "Kaikai Kitan",
                "album": "Kaikai Kitan / Ao no Waltz",
                "cover": "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/0/f/5/1222461641227035.jpg",
                "artist": {
                    "name": "Eve",
                    "nickname": "Eve",
                    "nationality": "JP"
                },
                "duration": "3:41",
                "url": `${URL_PUBLIC}/kaikai-kitan.mp3`
            },
            {
                "_id": 2,
                "name": "Atria",
                "album": "Atria",
                "cover": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/24/8a/e9/248ae9c9-853d-861c-763e-04e6bf9f326b/LACM-14765.jpg/1000x1000bf.webp",
                "artist": {
                    "name": "Fo'xTails",
                    "nickname": "Fo'xTails",
                    "nationality": "JP"
                },
                "duration": "3:47",
                "url": `${URL_PUBLIC}/atria.mp3`
            },
            {
                "_id": 3,
                "name": "Lemon",
                "album": "Lemon",
                "cover": "https://images.genius.com/25112a2aceb327ad70acfd5e7f69e812.999x999x1.jpg",
                "artist": {
                    "name": "Kenshi Yonezu",
                    "nickname": "Kenshi Yonezu",
                    "nationality": "JP"
                },
                "duration": "4:16",
                "url": `${URL_PUBLIC}/lemon.mp3`
            },
            {
                "_id": 4,
                "name": "Namae wo Yobu yo",
                "album": "Namae wo Yobu yo",
                "cover": "https://i.kfs.io/album/global/72822253,0v1/fit/500x500.jpg",
                "artist": {
                    "name": "Luck Life",
                    "nickname": "Luck Life",
                    "nationality": "JP"
                },
                "duration": "4:30",
                "url": `${URL_PUBLIC}/namae-wo-yobu-yo.mp3`
            },
            {
                "_id": 5,
                "name": "Grand Blue",
                "album": "湘南乃風〜一五一会〜",
                "cover": "https://i.scdn.co/image/ab67616d0000b2732d6b2cf75e4263dd3a047bb9",
                "artist": {
                    "name": "Shōnan no Kaze",
                    "nickname": "Shōnan no Kaze",
                    "nationality": "JP"
                },
                "duration": "5:13",
                "url": `${URL_PUBLIC}/grand-blue.mp3`
            },
            {
                "_id": 6,
                "name": "Till the End",
                "album": "Unknown",
                "cover": "https://cdns-images.dzcdn.net/images/cover/a026225645b821f6880eb6ae5299ce32/500x500.jpg",
                "artist": {
                    "name": "ReoNa",
                    "nickname": "ReoNa",
                    "nationality": "JP"
                },
                "duration": "6:04",
                "url": `${URL_PUBLIC}/till-the-end.mp3`
            },
            {
                "_id": 7,
                "name": "Magic",
                "album": "Familia",
                "cover": "https://i.scdn.co/image/ab67616d0000b2732438b9937def49e0103ad236",
                "artist": {
                    "name": "Sumika",
                    "nickname": "Sumika",
                    "nationality": "JP"
                },
                "duration": "3:52",
                "url": `${URL_PUBLIC}/magic.mp3`
            },
            {
                "_id": 8,
                "name": "10% Roll, 10% Romance",
                "album": "Mode Mood Mode",
                "cover": "https://i.scdn.co/image/ab67616d0000b273478f32140a15d0c861c9b5e9",
                "artist": {
                    "name": "Unison Square Garden",
                    "nickname": "Unison Square Garden",
                    "nationality": "JP"
                },
                "duration": "4:37",
                "url": `${URL_PUBLIC}/10-roll-10-romance-.mp3`
            }
        ];
        
        res.send({ data: [bestTracksList, metalTracksList, jrockTracksList]})
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }