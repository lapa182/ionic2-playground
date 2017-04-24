import { LoadingController } from "ionic-angular";
import { Observable } from "rxjs/Observable";  
import { Observer } from "rxjs/Observer";  
import 'rxjs/add/operator/share';
import { Injectable } from "@angular/core";

/**
 * Singleton service, injected at app level
 */
@Injectable()
export class LoadingService {
    loader: any;
    isLoading: Observable<String>;
    private _observer: Observer<String>;

    constructor(public loadingCtrl: LoadingController) {
        this.isLoading = new Observable(observer => this._observer = observer).share();
        this.loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...'
        });
    }

    toggleLoadingIndicator(name) {
        if (this._observer) {
            this._observer.next(name);
        }
    }

    showOrHideLoadingIndicator(loading) {
        return loading ? this.playLoadingAnimation() : this.stopLoading();
    }

    playLoadingAnimation() {
        this.loader.present();
    }

    stopLoading() {
        this.loader.dismiss();
    }

}