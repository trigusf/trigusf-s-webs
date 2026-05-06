// header section

const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
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

rightSide.addEventListener("scroll", updatePreview);

updatePreview();


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


