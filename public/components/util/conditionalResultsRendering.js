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
      const lineTitle = document.createElement('p');
      lineTitle.classList.add('line-title');
      lineTitle.textContent = `${set[0]}:`;
      const lineContent = document.createElement('span');
      lineContent.classList.add('line-content');
      lineContent.textContent = ` ${fieldText}`;
      lineTitle.appendChild(lineContent);
      destination.appendChild(lineTitle);
    }
  });
};

export default conditionalRender;
