let toolBox = document.getElementById('toolBox');
let toolBoxItems = toolBox.children;
let toolBoxItemsArray = Array.from(toolBoxItems);
// D&Dできるようにする
toolBoxItemsArray.forEach(item => {
  item.draggable = true;
  item.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', item.id);
  });
});
