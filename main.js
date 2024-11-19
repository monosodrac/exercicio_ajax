$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/monosodrac';
    const nameElement = document.querySelector('#name');
    const usenameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            $(nameElement).text(json.name);
            $(followersElement).text(json.followers);
            $(usenameElement).text(json.login);
            $(avatarElement).attr('src', json.avatar_url);
            $(reposElement).text(json.public_repos);
            $(followingElement).text(json.following);
            $(linkElement).attr('href', json.html_url);
        })
        .catch(function (erro) {
            alert("Ocorreu um erro, tente novamente mais tarde.")
        })
});