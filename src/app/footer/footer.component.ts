import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  goToMap() {
    window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.625638677666!2d77.0583880102975!3d29.87506842647311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701b86c0e33f%3A0x46e48f1399249932!2sAdd%20Visa!5e0!3m2!1sen!2sin!4v1689573987132!5m2!1sen!2sin');
  }
}
