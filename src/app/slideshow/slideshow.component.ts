import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images = [
    "never-stop-learning-3653430_1920.jpg",
    "notebook-computer-macbook-writing-technology-gadget-913320-pxhere.com.jpg",
    "pexels-pixabay-257736.jpg"
  ];

  headlines = [
    "Bring engineering to the next level",
    "Born to code",
    "Graduated at TUM"
  ];

  
  currentImage = 0;
  showImage = true;
  animationHeadline = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      this.animationHeadline = false;
      setTimeout(() => {
        this.showImage = true;
        this.animationHeadline = true;
      }, 10);
    }, 8000);
  }
}
