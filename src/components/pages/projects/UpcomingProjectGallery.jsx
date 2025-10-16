import React from 'react';
import ProjectGallery from './ProjectGallery';
import { upcomingProjectsDetails } from '../../../data/projects/upcomingProjects';

export default function UpcomingProjectGallery() {
    return (
        <ProjectGallery
            projectData={upcomingProjectsDetails}
            projectType="upcoming"
            projectTitle="Upcoming Project"
        />
    );
}
