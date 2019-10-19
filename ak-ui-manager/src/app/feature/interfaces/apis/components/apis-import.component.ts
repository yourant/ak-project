import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Config} from "@config/config";
import {BaseService} from "@service/http/base.service";
import {GatewayService} from "@service/http/gateway.service";

@Component({
    selector: 'app-apis-import',
    templateUrl: './apis-import.component.html',
    styles: [`
    `],
})
export class ApisImportComponent implements OnInit {
    constructor(public fb: FormBuilder,
                public config: Config,
                private nzMessageService: NzMessageService,
                public modalService: NzModalService,
                public baseService: BaseService,
                public gatewayService: GatewayService) {
    }

    form: FormGroup;
    loading = false;
    current = 0;

    ngOnInit(): void {
        this.form = this.fb.group({
            routeName: ['', [Validators.required]],
        });
    }
}
