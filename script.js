function makeLoader() {
    $(window).on("load", function () {
        $("#PRELOADER").delay(3000);
        $("#PRELOADER").fadeOut(1000);
        $("#CONTENT").fadeIn(1000);
    });
}

function makeDesign() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#909090",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
}

function typedAnimation() {
    var typeData = new Typed(".role", {
        strings: [
            "I'm a Frontend Developer",
            "I Like Working in Frontend  Tool",
            "But My Favourite Role is to solve problems ",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    });
}

const form = document.querySelector("form");
function sendMail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "examplePoject323@gmail.com",
        Password: "3DF0FF70CC67214D8AB1C166BB835CB5837B",
        To: "examplePoject323@gmail.com",
        From: "examplePoject323@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body",
    }).then((message) => alert(message));
}

form.addEventListener(".submit-btn", (e) => {
    e.preventDefault()
    sendMail()
})

makeDesign();
makeLoader();
typedAnimation();
