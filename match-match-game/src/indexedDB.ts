const nameDB = 'nekhaychik';
const repositoryUsers = 'users';
const openRequest = indexedDB.open(nameDB, 1);
let db;

openRequest.onerror = () => {
  // console.log('open db request ... error', openRequest.error);
  // console.dir(event);
};

openRequest.onupgradeneeded = () => {
  // console.log('open db request ... onupgradeneeded');
  db = openRequest.result;

  if (!db.objectStoreNames.contains(repositoryUsers)) {
    db.createObjectStore(repositoryUsers, { keyPath: 'id', autoIncrement: true });
  }
};

function addUser() {
  db = openRequest.result;
  const transaction = db.transaction(repositoryUsers, 'readwrite');
  const users = transaction.objectStore(repositoryUsers);

  const FIRST_NAME = <HTMLInputElement>document.getElementById('First_Name');
  const LAST_NAME = <HTMLInputElement>document.getElementById('Last_Name');
  const EMAIL = <HTMLInputElement>document.getElementById('E-mail');

  const user = {
    name: FIRST_NAME.value,
    last: LAST_NAME.value,
    email: EMAIL.value,
  };

  const request = users.add(user);
  request.onsuccess = () => {
    // console.log('Партия записана в БД');
  };

  request.onerror = () => {
    // console.log('Ошибка при записи в БД', openRequest.error);
  };
  const btn = <HTMLInputElement>document.getElementById('btnReg');
  btn.style.display = 'none';
  const btnStartGame = <HTMLInputElement>document.getElementById('btnStartGame');
  btnStartGame.style.display = 'block';
}

openRequest.onsuccess = () => {
  db = openRequest.result;
  // console.log('open db request ... onsuccess');
  document.querySelector('#addUserOK')?.addEventListener('click', addUser);
};
