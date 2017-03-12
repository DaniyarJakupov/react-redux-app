import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/About';
import ProjectsPage from './components/projects/ProjectsPage';
import ManageProjectPage from './components/projects/ManageProjectPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <About path="about" component={About} />
    <ProjectsPage path="projects" component={ProjectsPage}/>
    <ManageProjectPage path="project" component={ManageProjectPage}/>
    <ManageProjectPage path="project/:id" component={ManageProjectPage}/>
  </Route>
);
