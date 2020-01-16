const conditionalRender = (object, setArray, destination) => {
  setArray.forEach(set => {
    if(object[set[1]]){            
      const p = document.createElement('p');
      p.class = set[0];
      let fieldText;
      if(typeof object[set[1]] === 'object'){
        fieldText = object[set[1]].entry;
      } else {
        fieldText = object[set[1]];
      }
      p.textContent = `${set[0]}: ${fieldText}`;
      destination.appendChild(p);
    }
  });
};

export default conditionalRender;
