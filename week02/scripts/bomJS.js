let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');


// const li = document.createElement('li');
// const deleteButton = document.createElement('button');
// li.textContent = input.value;

// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '')
        {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
              });
        }
    else {
        input.focus();
    }
    input.value = '';
    input.focus();
  });

  