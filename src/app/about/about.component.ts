import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="about-section">
  <h1>Contact Us:</h1>
  <p >Mail: 20182287@fue.edu.eg</p>
  <p>MOBILE PHONE: +01122963959 , +01001212121.</p>
  <p>Also,You can contact with my team:<p>

</div> 


<h2 style="text-align:center">My Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/assets/img/pic2.jfif" alt="Jane" style="width:15%">
      <div class="container">
        <h2>Maria Doe</h2>
        <p class="title">Tester</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>maria@yahoo.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/assets/img/pic3.png" alt="Mike" style="width:15%">
      <div class="container">
        <h2>Monika Ross</h2>
        <p class="title">HTML Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>monika@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/assets/img/pic1.jpg" alt="John" style="width:15%">
      <div class="container">
        <h2>Jenii Doe</h2>
        <p class="title"> Graphic Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jenii8@hotmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
  
    
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
