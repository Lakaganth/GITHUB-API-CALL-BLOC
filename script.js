// Remove the search result

const removeResult = () => {
  $(".card").remove();
};

//Display html
const loadHTML = repo => {
  return `<div class="card mt-2 ">
 
  <div class="card-body">
    <h5 class="card-title">${repo.name}</h5>
    
    <a href="${
      repo.html_url
    }" target='-blank' class="btn btn-success">REPO LINK</a>
  </div>
</div>`;
};

//API call

const githubAPICall = user => {
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data => {
      const reposArr = data;
      console.log(data);
      reposArr.map(repo => {
        $(".display-result").append(loadHTML(repo));
      });
    });

  removeResult();
};

//On user Submit

const onSubmit = () => {
  console.log("onsubmit called");
  $(".user-form").on("submit", e => {
    e.preventDefault();
    const user = $("#search").val();
    console.log(user);

    githubAPICall(user);
  });
};

$(function() {
  console.log("Waiting for user input");
  onSubmit();
});
