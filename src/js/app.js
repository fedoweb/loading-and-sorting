import Table from './Table.js';
import Data from './Data.js'


document.addEventListener('DOMContentLoaded', async () => {
  const data = new Data();
  await data.init();
  
  const table = new Table(data.data);
  table.init();
  
  let count = 0;
  let sortType;
  let key;

  setInterval(() => {
    if (count % 2 === 0) {
      key = data.getNextKey();
      sortType = 'abc';
    } else {
      sortType = 'cba';
    }
    
    table.sortTable(key, sortType);
    table.addArrow(key, sortType);

    count++;
  }, 3000);
});
