import React, { Component } from 'react';
import { render } from 'react-dom';
import StyleGallery from '../Styles/gallery.css';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 257,
        thumbnailHeight: 320,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://images.unsplash.com/photo-1548113675-a253ca768435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        thumbnail: "https://images.unsplash.com/photo-1548113675-a253ca768435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        thumbnailWidth: 1024,
        thumbnailHeight: 768,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://images.unsplash.com/photo-1548092390-991d752538dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        thumbnail: "https://images.unsplash.com/photo-1548092390-991d752538dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        thumbnailWidth: 1024,
        thumbnailHeight: 768,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 620,
        thumbnailHeight: 374,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 620,
        thumbnailHeight: 374
},
{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 257,
        thumbnailHeight: 320,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://images.unsplash.com/photo-1548113675-a253ca768435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        thumbnail: "https://images.unsplash.com/photo-1548113675-a253ca768435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        thumbnailWidth: 1024,
        thumbnailHeight: 768,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://images.unsplash.com/photo-1548092390-991d752538dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        thumbnail: "https://images.unsplash.com/photo-1548092390-991d752538dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        thumbnailWidth: 1024,
        thumbnailHeight: 768,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 620,
        thumbnailHeight: 374,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 620,
        thumbnailHeight: 374
}]

class imgGallery extends Component {
    render() {
      return (
        <div className="gallery">
                <Gallery images={IMAGES} enableImageSelection={false}/>
        </div>
      );
    }
}
  
export default imgGallery;