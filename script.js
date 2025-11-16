const modal = document.getElementById("skillModal");
const closeBtn = document.querySelector(".close");

const project_title = document.getElementById("project-title");
const project_description = document.getElementById("project_description");


document.querySelectorAll(".skill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const label = btn.innerText;
        project_title.innerText = label;
        project_title.style.margin = "10px";
        project_title.style.textAlign = "center";
        project_title.style.color = "darkblue";
        const content = document.getElementById(`${id}_desc`).innerHTML;

        project_description.innerHTML = content;
        project_description.style.textAlign = "justify";
        modal.style.display = "block";
    });
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = function (e) {
    if (e.target === modal) modal.style.display = "none";
};

