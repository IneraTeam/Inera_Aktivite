import { dummyClient, dummyProject, dummyUser } from './../../../models/dummies';
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
                    this.dummy = dummyProject;
                } else if (target === 'users') {
                    this.dummy = dummyUser;
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
                            this.dummy.$key = this.$key;
                            this.dummy.createdAt = new Date(this.dummy.createdAt);
                        });
                } else {
                    this.dummy.createdAt = new Date();
                }
            });
        });
    }

    ngOnDestroy() {
        this.clearDummyContent();
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

    qwe(values: any) {
        console.log(values);
    }

    update(key: string, changes: any) {
        // değişiklik var mı yok mu kontrol edilecek
        // değişiklik var ise güncelle tıklanabilir olcak. (outline -> normal buton)
        // custom directive
        this.user.db(this.path).update(key, changes);
    }

    getItemID(urlpath: string) {
        const urlparse = urlpath.slice(urlpath.indexOf('shell/') + 6, urlpath.indexOf('?') - 1);
        return urlparse === 'new' ? false : urlparse;
    }

    clearDummyContent() {
        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:forin
        for (const key in this.dummy) {
            this.dummy[key] = null;
        }
    }
}
