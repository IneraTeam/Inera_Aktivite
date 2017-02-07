import { dummyClient } from './../../../models/dummies';
import { FirebaseListObservable } from 'angularfire2';
import { Client } from './../../../models/classes';
import { UserService } from './../../../services/user/user.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    styleUrls: ['./detail.css']
})

export class DetailComponent implements OnDestroy {
    private $key: string;
    public path: string;
    public dummy;
    constructor(private user: UserService) {
        this.user.routerEvent.subscribe(url => {
            this.$key = this.getItemID(url) || null;
            this.user.pagetarget.subscribe(target => {
                this.path = target;
                if (target === 'clients') {
                    this.dummy = dummyClient;
                } else if (target === 'projects') {
                    // dummyProjects
                }
                if (this.$key) {
                    this.user.db(`/${target}/${this.$key}`)
                        .$ref.once('value', snap => {
                            const v = snap.val();
                            // tslint:disable-next-line:whitespace
                            // tslint:disable-next-line:forin
                            for (const key in v) {
                                this.dummy[key] = v[key];
                            }
                            this.dummy.createdAt = new Date(this.dummy.createdAt);
                        });
                } else {
                    this.dummy.createdAt = new Date();
                }
            });
        });
    }

    ngOnDestroy() {
       console.log(this.dummy);
    }

    checkIfValuesExist(val) {
        // var mı yok mu eklenecek
        this.user.pagetarget.subscribe(target => {
            this.user.db(target, false).push(
                new Client(
                    val.name, val.abbrv, val.pname,
                    val.pphone, val.pmail, val.address
                )
            ).then(() => {
                // pop-up eklenecek
                console.log('Müşteri eklendi');
            });
        });
    }

    getItemID(urlpath: string) {
        const urlparse = urlpath.slice(urlpath.indexOf('shell/') + 6, urlpath.indexOf('?') - 1);
        return urlparse === 'new' ? false : urlparse;
    }
}
