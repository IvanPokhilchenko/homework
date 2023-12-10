// Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. При нажатии на стрелку влево должен отправиться запрос на получение данных про пользователя с меньшим id, а при нажатии на кнопку вправо данные про следующего пользователя. Для отрисовки и получения данных о пользователе использовать функции из предыдущего занятия.

// В самом начале на странице нужно отрисовать данные о пользователе с id 1.

async function getUserDataWithPosts(userId) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!userResponse.ok) {
      throw new Error('Такого пользователя нет');
    }

    const userData = await userResponse.json();

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsResponse.ok) {
      throw new Error('Не удалось получить посты пользователя');
    }

    const postsData = await postsResponse.json();

    const newUserObject = {
      name: userData.name,
      email: userData.email,
    };

    const result = {
      user: newUserObject,
      posts: postsData,
    };

    return result;
  } catch (e) {
    console.error(e.message);
  }
}

const userInfoElement = document.querySelector('#user-info');
const prevs = document.querySelector("#prev-user");
const nexts = document.querySelector("#next-user");


let currentUserId = 1;

async function displayUserData(userId) {
  const userData = await getUserDataWithPosts(userId);

  userInfoElement.textContent = '';

  const h2 = document.createElement('h2');
  h2.textContent = userData.user.name;
  userInfoElement.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = `Email: ${userData.user.email}`;
  userInfoElement.appendChild(p);

  const h3 = document.createElement('h3');
  h3.textContent = 'Posts:';
  userInfoElement.appendChild(h3);

  const ul = document.createElement('ul');
  userData.posts.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element.title;
    ul.appendChild(li);
  });
  userInfoElement.appendChild(ul);

 prevs.disabled = (userId === 1) ? true : false;
 nexts.disabled = (userId === 10) ? true : false;
}


displayUserData(currentUserId);

prevs.onclick = () => {
  if (currentUserId > 1) {
    currentUserId--;
    displayUserData(currentUserId);
  }
};

nexts.onclick = async () => {
  currentUserId++;
  const userData = await getUserDataWithPosts(currentUserId);

  if (userData.user) {
    displayUserData(currentUserId);
  } else {
    currentUserId--;
  }
};