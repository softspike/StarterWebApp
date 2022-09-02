import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogHelperService } from 'src/app/services/dialog-helper.service';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { takeWhile, finalize } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { FreeAgencyModel, ListItem } from 'src/app/models/models.model';
import { FormHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-submit-user',
  templateUrl: './submit-user.component.html',
  styleUrls: ['./submit-user.component.scss']
})
export class SubmitUserComponent implements OnInit {
  editForm: UntypedFormGroup;
model = new FreeAgencyModel;
tournamentTypeSelector = [{value: 1, name: 'Male'},
{value: 2, name: 'Female'}];
selectedType = this.tournamentTypeSelector[0].value;


  private alive = true;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SubmitUserComponent>,
    private dialogHelperService: DialogHelperService,
    private freeAgencyService: FreeAgencyService,
    private snackBarService: SnackbarService,
    public service: UserService,
    public helper: FormHelperService){
   
     }
   

  ngOnInit() {
    this.buildForm();
    this.pachForm();
    this.dialogHelperService.sideBar(this.dialogRef, 450);
  }

  buildForm() {
    this.editForm = this.fb.group({
      id: [0],
      playerId: [null],
      name: [''],
      postCode: [''],
      latitude: [0],
      longitude: [0],
      ageGroup: [''],
      country: [null],
      tournamentTypeId: [null]
    });

  }

  pachForm(){
    var currentUser = this.service.getFromLS();
    this.editForm.patchValue({ playerId : currentUser.id});
    this.editForm.patchValue({ name : currentUser.fullName})

    const country = new ListItem(13, 'PW', 'Palau');
    this.editForm.patchValue({ country : country})
  }

  save() {
    if (!this.editForm.valid) {
      return;
    }

this.helper.setModel(this.model, this.editForm);

    this.freeAgencyService.submitUser(this.model)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){
          this.snackBarService.show('Submitted')
          this.dialogRef.close(res);
        }
      
      },
        (error: any) => {
          this.snackBarService.show('Server Error');
        });
  }

  mapModel(){
    console.log(this.model)
    this.model.id = 0;
    this.model.playerId = this.editForm.get('playerId').value;
    this.model.name = this.editForm.get('name').value;
    this.model.postCode = this.editForm.get('postCode').value;
    this.model.latitude = this.editForm.get('latitude').value;
    this.model.longitude = this.editForm.get('longitude').value; 
    this.model.ageGroup = this.editForm.get('ageGroup').value;
    this.model.country = this.editForm.get('country').value;
    this.model.tournamentTypeId = this.editForm.get('tournamentTypeId').value;
    
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
