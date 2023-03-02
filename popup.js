var circle_butt = document.querySelector(".circle_butt");
var h4_ = document.querySelector("#h4_");
circle_butt.addEventListener("click", async(e) => {
  // console.log(e.target.innerText);
  transition_func(e);

    const [tabi] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    console.log(tabi.url, tabi.id);
    if (tabi.url.includes("www.youtube.com/watch")) {
      console.log("true");


      chrome.tabs.query(
        { active: true, lastFocusedWindow: true },
        function (tabs) {
          targ = tabs[0].url;
          console.log(targ);

          var toBeOmitted = "youtube";
          var toBeAddded = "ssyoutube";
          newTarg = targ.replace(toBeOmitted, toBeAddded);
          console.log(newTarg);
        }
      );

      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        chrome.tabs.update(null, {
          url: newTarg,
        });
      });


    }
    else{
      h4_.innerText="Click to the video";
    }

    

  


});



function pickcolor() {
  console.log("script working");
//   window.location.href="www.google.com";
// console.log(window.location.href);
//     window.location.href="www.google.com";
}


function transition_func(e)
{
    var value = e.target.innerText;
    if (value === "Off") {
      console.log("true");
      e.target.innerText = "On";
      console.log(e.target.parentNode.parentNode);
      var face_ = e.target.parentNode.parentNode;
      face_.style.width = "250px";
      face_.style.height = "250px";
      var outer_ = e.target.parentNode;
      outer_.style.width = "200px";
      outer_.style.height = "200px";
      setTimeout(() => {
        face_.style.border = "none";
      }, 400);
      setTimeout(() => {
        outer_.style.border = "none";
      }, 1000);
    } else {
      e.target.innerText = "Off";
      var face_ = e.target.parentNode.parentNode;
      face_.style.width = "120px";
      face_.style.height = "120px";
      var outer_ = e.target.parentNode;
      outer_.style.width = "105px";
      outer_.style.height = "105px";
      outer_.style.border = " 3px solid orange";
      face_.style.border = " 1px solid yellow";
    }
    setTimeout(() => {
      e.target.style.width = "102px";
      e.target.style.height = "102px";
    }, 100);
    setTimeout(() => {
      e.target.style.width = "100px";
      e.target.style.height = "100px";
    }, 300);
}