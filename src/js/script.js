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