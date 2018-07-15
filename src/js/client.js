const state = {
  squares: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  currentSquare: 0,
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'Totito';
 
  const table = document.createElement('table');
  table.border = 0;

  let turn = 'x';

  const message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = `Es el turno de: ${turn}`;

  const button = document.createElement('button');
  button.className = 'button';
  button.innerHTML = 'Reiniciar juego';

  
  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.className = 'square';
  const td2 = document.createElement('td');
  td2.className = 'square';
  const td3 = document.createElement('td');
  td3.className = 'square';

  const td4 = document.createElement('td');
  td4.className = 'square';
  const td5 = document.createElement('td');
  td5.className = 'square';
  const td6 = document.createElement('td');
  td6.className = 'square';

  const td7 = document.createElement('td');
  td7.className = 'square';
  const td8 = document.createElement('td');
  td8.className = 'square';
  const td9 = document.createElement('td');
  td9.className = 'square';

  
  const x1 = false;
  const x2 = false;
  const x3 = false;
  const x4 = false;
  const x5 = false;
  const x6 = false;
  const x7 = false;
  const x8 = false;
  const x9 = false;
  const o1 = false;
  const o2 = false;
  const o3 = false;
  const o4 = false;
  const o5 = false;
  const o6 = false;
  const o7 = false;
  const o8 = false;
  const o9 = false;

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Main rendering

  root.appendChild(title);
  root.appendChild(message);
  
  root.appendChild(table);
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr2.appendChild(td4);
  tr2.appendChild(td5);
  tr2.appendChild(td6);
  tr3.appendChild(td7);
  tr3.appendChild(td8);
  tr3.appendChild(td9);

  root.appendChild(button);


  /*
  const lightElements = lState.lights.map(
    (lightColor, i) => {
      const lightElement = document.createElement('div');
      lightElement.className = `light ${lightColor}`;

      if (i === lState.currentLight) {
        lightElement.classList.add('on');
      }

      return lightElement;
    }
  );

  lightElements.forEach(
    lightElement => semaforo.appendChild(lightElement)
  );
*/
  // Events
  button.onclick = () => {
    render(lState);
    console.log('reinicio');

  };

  td1.onclick = () => {
    console.log('casilla');
    td1.classList.add('onX');
 
  };
  td2.onclick = () => {
    console.log('casilla');
    td2.classList.add('onX');
 
  };
  td3.onclick = () => {
    console.log('casilla');
    td3.classList.add('onX');
 
  };
  td4.onclick = () => {
    console.log('casilla');
    td4.classList.add('onX');
 
  };
  td5.onclick = () => {
    console.log('casilla');
    td5.classList.add('onX');
 
  };
  td6.onclick = () => {
    console.log('casilla');
    td6.classList.add('onX');
 
  };
  td7.onclick = () => {
    console.log('casilla');
    td7.classList.add('onX');
 
  };
  td8.onclick = () => {
    console.log('casilla');
    td8.classList.add('onX');
 
  };
  td9.onclick = () => {
    console.log('casilla');
    td9.classList.add('onX');
 
  };
}

render(state);