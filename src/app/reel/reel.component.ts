import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { SmsService } from '../_services/sms.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html'
})
export class ReelComponent {

  constructor(private smsService: SmsService) { }

  sendSms (form: NgForm) {
    let data = { Meldinger: [
      {
        Avsender: form.value.avsender,
        Melding: form.value.melding,
        Mottaker: form.value.nummer,
        NySesjon: false,
        Simulering: form.value.radio,
        PrisGruppe: 0
      }
     ]
    }
    const bekreft = confirm("Sjekk at opplysningene stemmer! Til: " + data.Meldinger[0].Mottaker + ". Tekst: " + data.Meldinger[0].Melding + ". Fra: " + data.Meldinger[0].Avsender + "!")
    if (bekreft === true) {
      this.smsService.sendSms(data)
                      .subscribe(
                        res => alert("Melding sent til " + data.Meldinger[0].Mottaker + ", med teksten " + data.Meldinger[0].Melding + ", fra " + data.Meldinger[0].Avsender + "!"),
                        error =>  alert("Melding ikke sent!"));
      form.reset();
    } 
  }
}
