import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: "ReactReduxWeatherApp",
    title: "Weather App build using React+Redux",
    watchHref: "https://github.com/DaniyarJakupov/ReactReduxWeatherApp",
    authorId: "daniyar-jakupov",
    category: "react"
  },
  {
    id: "ReactBlog",
    title: "Blog App build using React+Redux",
    watchHref: "https://github.com/DaniyarJakupov/ReactBlog",
    authorId: "daniyar-jakupov",
    category: "react"
  },
  {
    id: "js-dev-env",
    title: "Starter Kit for modern JS Apps",
    watchHref: "https://github.com/DaniyarJakupov/js-dev-env",
    authorId: "daniyar-jakupov",
    category: "js"
  },
  {
    id: "StuttgartGems",
    title: "Stuttgart Gems",
    watchHref: "https://github.com/DaniyarJakupov/StuttgartGems",
    authorId: "daniyar-jakupov",
    category: "expressjs"
  },
  {
    id: "BlogAPI",
    title: "Blog App Web API",
    watchHref: "https://github.com/DaniyarJakupov/BlogAPI",
    authorId: "daniyar-jakupov",
    category: "expressjs"
  },
  {
    id: "DaniyarJakupov.github.io",
    title: "My personal website",
    watchHref: "https://github.com/DaniyarJakupov/DaniyarJakupov.github.io",
    authorId: "daniyar-jakupov",
    category: "personal"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (project) => {
  return replaceAll(project.title, ' ', '-');
};

class ProjectApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

  static saveProject(project) {
    project = Object.assign({}, project); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (project.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (project.id) {
          const existingCourseIndex = projects.findIndex(a => a.id == project.id);
          projects.splice(existingCourseIndex, 1, project);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          project.id = generateId(project);
          project.watchHref = `https://github.com/DaniyarJakupov/${project.id}`;
          projects.push(project);
        }

        resolve(project);
      }, delay);
    });
  }

  static deleteCourse(projectId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = projects.findIndex(project => {
          project.id == projectId;
        });
        projects.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProjectApi;
