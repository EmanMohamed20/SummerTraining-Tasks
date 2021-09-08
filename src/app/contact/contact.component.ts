import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
</head>
<body>

<h2>services</h2>
<p>I can handle many languages ,Frameworks and Activites to serve the needed new websites as follows:</p>

<div class="container">
  <img src="/assets/img/img2.png" alt="Avatar" class="image" style="width:115%">
  <div class="middle">
    <div class="text">Languages I Serve</div>
  </div>
</div>
  
</body>
</html>

  `,
  styles: [
   

  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
