import bands from "../factories/bands";

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
      songs: ['Black Dog', 'All my Love']
    }
  ];
  
  listOfBands.forEach((band) => {
    server.create('band', band);
  })
}
