import React from 'react';
import ProjectGallery from './ProjectGallery';
import { featuredProjectsDetails } from '../../../data/projects/featuredProjects';

export default function FeaturedProjectGallery() {
    return (
        <ProjectGallery
            projectData={featuredProjectsDetails}
            projectType="featured"
            projectTitle="Featured Project"
        />
    );
}
