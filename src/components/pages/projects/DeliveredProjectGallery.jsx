import React from 'react';
import ProjectGallery from './ProjectGallery';
import { deliveredProjectsDetails } from '../../../data/projects/deliveredProjects';

export default function DeliveredProjectGallery() {
    return (
        <ProjectGallery
            projectData={deliveredProjectsDetails}
            projectType="delivered"
            projectTitle="Delivered Project"
        />
    );
}
