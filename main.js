(function () {
    'use strict'
    const API_URL = "https://api.github.com/users";

    function getData(user) {
        let header = new Headers();
        header.append('accept', 'application/vnd.github.v3+json');
        fetch(`${API_URL}/${user}`, {
            method: 'GET',
            headers: header,
            mode: 'cors',
            cache: 'default'
        }).then(function (resp) {
            return resp.json()
        }).then(parse).then((html) => document.body.innerHTML = html)
    }

    function parse(data) {
        if (data.email === null) {data.email= "Unknown"};
        return (`
            <div id="banner">${data.name}</div>
            <div id="content">
                <div id="info">
                    <span class="title">The Basics</span>
                    <br>
                    <span class="key">Name:</span><span class="value">${data.name}</span>
                    <br>
                    <span class="key">Github URL:</span><span class="value url"><a href="${data.html_url}">${data.name}</a></span>
                    <br>
                    <span class="key">Email:</span><span class="value">${data.email}</span>
                    <br>
                    <span class="key">Company:</span><span class="value">${data.company}</span>
                    <br>
                    <span class="key">Website:</span><span class="value url"><a href="${data.blog}">${data.blog}</a><span>
                </div>
                <div class="sep"></div>
                <div id="story">
                    <span class="title">The Story</span>
                    <br>
                    <span class="value" id="bio">${data.bio}</span>
                </div>
                <image class="circle-img" src=${data.avatar_url}>
            </div>`)
    }
    getData("fuzen-py")
}())