// your code goes here
import { NgModule, Componet } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PlatformBrowserDynamic, platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@Componet({
   selector: 'hello-world',
    template: `
    <div>
        Hello World
    </div>
    `
})

class HelloWorld {

}

@NgModule({
    declarations: [ HelloWorld ],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})

class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);