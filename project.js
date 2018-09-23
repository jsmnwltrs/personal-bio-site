const navToBio = document.getElementById('navToBio');
const navToTechnologies = document.getElementById('navToTechnologies');
const navToProjects = document.getElementById('navToProjects');

navToBio.addEventListener('click', () => {
    document.getElementById('bioHeader').scrollIntoView();
});

navToTechnologies.addEventListener('click', () => {
    document.getElementById('technologiesHeader').scrollIntoView();
});

navToProjects.addEventListener('click', () => {
    document.getElementById('projectsHeader').scrollIntoView();
});

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Puppies!", 
        screenshot: "https://assets.rbl.ms/10706353/980x.jpg", 
        description: "This is the most amazing project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

const printProjectCards = () => {
    let newString = '';
    for (let i = 0; i < projects.length; i++) {
        newString += `<div class="projects">`;
        newString += `<h4>${projects[i].title}</h4>`;
        newString += `<img src="${projects[i].screenshot}"/>`;
        newString += `<p>${projects[i].description}`;
        newString += `<p>${projects[i].technologiesUsed}</p>`;
        newString += `<a href='${projects[i].url}>Project Link</a>`;
        newString += `<a href='${projects[i].githubUrl}>GitHub Link</a>`;
        newString += `</div>`
        if (projects[i].available === true) {
            printToDom (newString, 'projectsPage');
            }
    }
}

printProjectCards();

