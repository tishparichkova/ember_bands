export default function(server) {
  let listOfBands = [
    {
      name: 'Led Zeppelin',
      image: 'http://2.bp.blogspot.com/_9n816j7EPLw/TGoeE4zqpFI/AAAAAAAAA38/ybkixAd59es/s1600/ledzeppelin.jpg',
      songs: ['Black Dog', 'All my Love']
    },
    {
      name: 'Metallica',
      image: 'https://cps-static.rovicorp.com/3/JPG_400/MI0003/589/MI0003589822.jpg?partner=allrovi.com',
      songs: ['Nothing Really Matters', 'The Unforgiven']
    },
    {
      name: 'Foo Fighters',
      image: 'https://cps-static.rovicorp.com/3/JPG_400/MI0004/260/MI0004260585.jpg?partner=allrovi.com',
      songs: ['War', 'No way back']
    },
    {
      name: 'Red Hot Chilli Peppers',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHI_nUlGEBftc3RiSFqCcuxqeHa2PG-LngnwGH_mx-1SM5cIvGA',
      songs: ['Snow', 'Otherside', 'Californication']
    },
    {
      name: 'Nirvana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiT5ZzVGW_29Jb6Z49muRehkaYtrac7ytHGsDcKMjNVxVWw2yQw',
      songs: ['Heart-shaped box', 'Smells like teenage spirit']
    }
  ];
  
  listOfBands.forEach((band) => {
    server.create('band', band);
  })
}
