import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
            public service: UserService,
            private snackBarService: SnackbarService,) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.snackBarService.show('Good Entry');
        } else {
        res.errors.forEach(element => {
          switch (element.code) {
            case 'DuplicateUserName':
              //username taken
              break;

              default:
            //registration failed
              break;
          }  
        });  
        }
      },
      (error: any) => {
        this.snackBarService.show('username name taken');
      }
    )
  }

}