'use strict';

// post new user

document
  .querySelector('.js-btn-post-new-user')
  .addEventListener('click', () => {
    const inputName = document.querySelector('.js-input-name');
    const inputEmail = document.querySelector('.js-input-email');

    // create query params
    const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

    fetch('http://localhost:3500/user' + queryParams, { method: 'POST' })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Server response:', responseData);
        printJson('.js-post-new-user-result', responseData);
      });
  });

// get users data

document.querySelector('.js-btn-get-users').addEventListener('click', () => {
  const filterByName = document.querySelector('.js_name_filter');
  const filterByEmail = document.querySelector('.js_email_filter');

  // create query params
  const queryParams = `?nameFilter=${filterByName.value}&emailFilter=${filterByEmail.value}`;

  fetch('http://localhost:3500/users' + queryParams, { method: 'GET' })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Server response:', responseData);
      printJson('.js-get-users-result', responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
