export default function() {
  this.namespace = '/api';
  
  this.get('/bands', function( { bands }) {
    debugger;

    return bands.all();

    /*return JSON.stringify({
      bandsArr
    });*/
  });
}
