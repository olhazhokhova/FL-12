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

const elUl = document.createElement('ul');

for (let el of structure) {
  const elLi = document.createElement('li');
  const icon = document.createElement('i');
  const div = document.createElement('div');

  rootNode.appendChild(elUl);

  const textLi = document.createTextNode(el.title);
  let newLi = elUl.appendChild(elLi);
  div.appendChild(icon);
  div.appendChild(textLi);
  newLi.appendChild(div);

  icon.classList.add('material-icons');
  const textIcon = document.createTextNode('folder');
  icon.appendChild(textIcon);

  if (el.folder) {
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

 if (el.children) {
  const elUlNew = document.createElement('ul');
   for(let elem of el.children){
    elLi.appendChild(elUlNew);
    const elLiNew = document.createElement('li');
    const div = document.createElement('div');
    elUlNew.appendChild(elLiNew);

    const iconFile = document.createElement('i');
    const textLi = document.createTextNode(elem.title);
    
    elLiNew.appendChild(div);
    div.appendChild(iconFile);
    div.appendChild(textLi);
    iconFile.classList.add('material-icons');

    if(elem.folder){
      const textIcon = document.createTextNode('folder');
      iconFile.appendChild(textIcon);
      div.classList.add('folder');

      div.addEventListener('click', function() {
        div.classList.toggle('open');
        if(div.classList.contains('open')){
          iconFile.innerHTML = 'folder_open';
        } else {
          iconFile.innerHTML = 'folder';
        }
      });

      if (elem.children) {
        const elUlS = document.createElement('ul');

        for(let item of elem.children){
          const elLiS = document.createElement('li');
          const div = document.createElement('div');
          elLiNew.appendChild(elUlS);
          elUlS.appendChild(elLiS);

          const iconFile = document.createElement('i');
          const textLi = document.createTextNode(item.title);
          
          elLiS.appendChild(div);
          div.appendChild(iconFile);
          div.appendChild(textLi);
          iconFile.classList.add('material-icons');

          if(item.folder){
            const textIcon = document.createTextNode('folder');
            iconFile.appendChild(textIcon);
            div.classList.add('folder');

            div.addEventListener('click', function() {
              div.classList.toggle('open');
              if(div.classList.contains('open')){
                iconFile.innerHTML = 'folder_open';
                const i = document.createElement('i');
                i.innerHTML = 'Folder is empty'
                elLiS.appendChild(i);
                i.classList.add('empty');
              } else {
                iconFile.innerHTML = 'folder';
              }
            });
          } else {
            const textIcon = document.createTextNode('insert_drive_file');
            iconFile.appendChild(textIcon);
            iconFile.classList.add('file');
          }
        }
      } else {
        const i = document.createElement('i');
        i.innerHTML = 'Folder is empty'
        elLiNew.appendChild(i);
        i.classList.add('empty');
      }
    } else {
      const textIcon = document.createTextNode('insert_drive_file');
      iconFile.appendChild(textIcon);
      iconFile.classList.add('file');
    }   
   }
  }
}