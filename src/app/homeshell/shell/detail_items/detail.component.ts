import { Client } from './../../../models/classes';
import { UserService } from './../../../services/user/user.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    styleUrls: ['./detail.css']
})

export class DetailComponent {
    constructor(private user: UserService) {
    }

    checkIfValuesExist(val) {
        // var mı yok mu eklenecek
        this.user.pagetarget.take(1).subscribe(target => {
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
}
