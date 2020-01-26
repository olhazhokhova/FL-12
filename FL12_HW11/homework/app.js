const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');


function addFolderListener(div, icon){
  div.classList.toggle('folder');
  div.addEventListener('click', function() {
    div.classList.toggle('open');

    if(div.classList.contains('open')){
      icon.innerHTML = 'folder_open';
    } else {
      icon.innerHTML = 'folder';
    }
  });
}

function addTree(structure, node){
  const elUl = document.createElement('ul');

  for (let el of structure) {
    const elLi = document.createElement('li');
    const icon = document.createElement('i');
    const div = document.createElement('div');

    node.appendChild(elUl);

    const textLi = document.createTextNode(el.title);
    let newLi = elUl.appendChild(elLi);
    div.appendChild(icon);
    div.appendChild(textLi);
    newLi.appendChild(div);

    icon.classList.add('material-icons');

    if (el.folder) {
      const textIcon = document.createTextNode('folder');
      icon.appendChild(textIcon);
      addFolderListener(div, icon);

      if (el.children) {
        addTree(el.children, elLi);
      } else {
        const i = document.createElement('i');
        i.innerHTML = 'Folder is empty'
        elLi.appendChild(i);
        i.classList.add('empty');
      }
    } else {
      const textIcon = document.createTextNode('insert_drive_file');
      icon.appendChild(textIcon);
      icon.classList.add('file');
    }   
  }
}

addTree(structure, rootNode);