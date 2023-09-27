function revealTospan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });

  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[0].childNodes[0];

    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: "100",
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  })

    .to("#loader .parent .child", {
      y: "-110%",
      duration: 1,
      ease: Circ.easeInOut,
    })

    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })

    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
    })

    .to("#green", {
      height: "0%",
      delay: -0.3,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateHomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      ease: Expo.easeInOut,
      delay: -0.5,
      onComplete: function () {
        animateSvg();
      },
    });
}

function animateSvg() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay: -0.5,
  });
}

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function cardshow() {
    document.querySelectorAll(".cnt")
    .forEach(function (cnt) {
        var showingImage;
      cnt.addEventListener("mousemove", function (dets) {
       document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
       document.querySelector("#cursor").children[dets.target.dataset.index].style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`;
      })

      cnt.addEventListener("mouseleave", function (dets) {
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=0;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`;
       })

    })
  }
  
revealTospan();
valueSetters();
loaderAnimation();
locoInitialize();
cardshow();
