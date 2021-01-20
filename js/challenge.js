let i = -1
let L = 0 
interval = setInterval(increment, 1000);

function increment(){
    i++;
    document.querySelector('#counter').textContent = i 
    L = 0 
}

let decrement = document.getElementById('minus').addEventListener("click", function() {
    i--;
    document.querySelector('#counter').textContent = i     
});

let increase = document.getElementById('plus').addEventListener("click", function(){
    i++;
    document.querySelector('#counter').textContent = i 
});

let heart = document.getElementById("heart").addEventListener("click", function(){
    L++;
    let li = document.createElement("li");
    let node = document.createTextNode(i + " has been liked " + L + " time(s).")
    let likes = document.querySelector('.likes')
    let lastLike = document.querySelector('.likes').lastChild
    li.appendChild(node);
    if(L>1){
     lastLike.replaceWith(li)
    } else {
      likes.appendChild(li);
    }
  });

document.getElementById("pause").addEventListener("click", function(){
  if(document.querySelector('#pause').innerText == "pause") {
    clearInterval(interval)
    document.querySelector('#pause').innerText = "resume"
    decrement.disabled = true;
    increase.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
  } else {
    interval = setInterval( increment, 1000);
    document.querySelector('#pause').innerText = "pause"
    decrement.disabled = true;
    increase.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
  }
});

  let submit = document.getElementById("#submit").addEventListener("click", function(event){
    event.preventDefault();
    let comment = document.querySelector('input#comment-input').value
    const commentsList = document.querySelector('.comments')
    let p = document.createElement("p");
    let node = document.createTextNode(comment)
    p.appendChild(node);
    commentsList.appendChild(p);
    document.querySelector('input#comment-input').value = ''
  });