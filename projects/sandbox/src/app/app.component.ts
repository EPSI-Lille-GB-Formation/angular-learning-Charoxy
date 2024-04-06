import { Component } from '@angular/core';
import {HighlightDirective} from "./highlight.directive";
import {NoopenDirective} from "./noopen.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Découverte des directives avec Angular</h1>

    <a appNoopen href="http://google.com">Go to Google</a>

    <p appHighlight bg-color="red" bg-default="blue">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
  `,
  styles: [],
  imports: [
    HighlightDirective,
    HighlightDirective,
    NoopenDirective
  ]
})

export class AppComponent {

}
