/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'firebasepipe-app',
    injectables: []})
@View({
    templateUrl: 'firebasepipe.html',
    directives: []
})
class FirebasepipeApp {
    constructor() {

    }
}
bootstrap(FirebasepipeApp);