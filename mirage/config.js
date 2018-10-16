function constructJSON(collection) {
  const type = collection.modelName;
  let models = collection.models;
  let arrOfObjs = [];
  let band = {};


  for (let model of models) {
    band.id = model.attrs.id;
    band.type = type;
    band.attributes = model.attrs;
    arrOfObjs.push(band);
    band = {};
  }

  return arrOfObjs;
}

export default function() {
  this.namespace = '/api';
  this.get('/bands', function( {bands} ) {
    return {
      "data": constructJSON(bands.all())
    }
  });

  this.get('/bands/:id', function(db, request) {
    let id = request.params.id ? request.params.id : 1;
    
    return { 
      data: {
        type: "bands",
        id: id,
        attributes: db.bands.find(id)
      }
    }
  });
}
