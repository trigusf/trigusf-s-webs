


// header section

const menuBtn = document.getElementById("menu-btn");
const menuBar = document.getElementById("menu-header");
const links = document.querySelectorAll(".menu-header a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menuBar.classList.remove('active');
    })
})

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuBar.classList.toggle("active");
})

// end of header section


// project section
const projects = document.querySelectorAll(".project");
const preview = document.getElementById("preview");
const rightSide = document.querySelector(".right");

function updatePreview() {
    let closestProject = null;
    let closestDistance = Infinity;

    const containerRect = rightSide.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;

        const distance = Math.abs(projectCenter - containerCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestProject = project;
        }
    });

    if (closestProject) {
        const newImage = closestProject.dataset.image;

        if (preview.getAttribute("src") !== newImage) {
            preview.style.opacity = 0;

            setTimeout(() => {
                preview.src = newImage;
                preview.style.opacity = 1;
            }, 200);
        }
    }
}

if(rightSide && preview && projects.length > 0){
    rightSide.addEventListener("scroll", updatePreview);
    updatePreview();
}


const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const desc = btn.closest(".project").querySelector(".desc");
    const arrow = btn.querySelector(".arrow");
    
    arrow.classList.toggle("rotate-180")

    desc.classList.toggle("max-h-0");
    desc.classList.toggle("max-h-[500px]");
    desc.classList.toggle("opacity-0");
    desc.classList.toggle("-translate-y-5");
  });
});

// end of project section


// Contact Me

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ut3vjyg",
        "template_7tpttgq",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message");
        console.log(error);
    });
});
// End Of Contact Me