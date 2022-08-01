import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {latLng, tileLayer, marker, LayerGroup, Map, LeafletMouseEvent, icon} from 'leaflet';
import { debounceTime, finalize, takeWhile } from 'rxjs/operators';
import { FreeAgencyService } from 'src/app/services/free-agency.service';
import { GenericValidator } from 'src/app/services/generic-validator.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ThrobberService } from 'src/app/services/throbber.service';
import { autoCompleteSelected } from 'src/app/validators/autocomplete-selected.validator';
import { merge as observableMerge, fromEvent as observableFromEvent, Observable } from 'rxjs';
import { DialogHelperService } from 'src/app/services/dialog-helper.service';
import { AgencyResponse } from 'src/app/models/agency-response.model';

@Component({
  selector: 'app-agency-button',
  templateUrl: './agency-button.component.html',
  styleUrls: ['./agency-button.component.scss']
})
export class AgencyButtonComponent implements OnInit, AfterViewInit {
  @ViewChildren (FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];
  model: AgencyResponse;
  editForm: FormGroup;
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};
  validationMessages: { [key: string]: { [key: string]: string } };
  id: number;
  address = 'https://api.mapbox.com/styles/v1/tobyewl/cjvdxryr00fsl1ft65nq52fc0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9ieWV3bCIsImEiOiJjanZkeHFyaDUwOWVhNDVwYW13cm90ZDV4In0.Fn0BPWzyXZCoQpY3tr4ifw';
 

  isTile = false;
  heightStyle = '100%';
  selectedGroups = [];

  map: Map;
  markers = new LayerGroup();
  options = {
    layers: [
      tileLayer(this.address, { maxZoom: 18, attribution: '...' }),
      this.markers
    ],
    zoom: 2,
    center: latLng(53.467747, -2.286369)
  };


  icon = new URL('leaflet/dist/images/marker-shadow.png', import.meta.url);
  shadow = new URL('leaflet/dist/images/marker-icon.png', import.meta.url);


  private alive = true;


  constructor(
    private fb: FormBuilder,
    private freeAgencyService: FreeAgencyService,
    private throbberService: ThrobberService,
    private snackBarService: SnackbarService,
    private dialogRef: MatDialogRef<AgencyButtonComponent>,
    private dialogHelperService: DialogHelperService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

    this.buildForm();
    if (data && data.model) {
      this.id = data.model.id;
      this.getAgency();
    } else {
      this.id = undefined;
    }
  }


  ngOnInit(): void {
    this.dialogHelperService.sideBar(this.dialogRef, 450);
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => observableFromEvent(formControl.nativeElement, 'blur'));
    observableMerge(this.editForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800),
        takeWhile(() => this.alive))
      .subscribe(() => {

       const lat =  this.editForm.get('lat').value !== undefined ? this.editForm.get('lat').value : 0;
       const long = this.editForm.get('long').value !== undefined ? this.editForm.get('long').value : 0;
       this.dropMarker(lat, long);

        this.displayMessage = this.genericValidator.processMessages(this.editForm);
      });
  }

  dropMarker(lat: number, long: number) {
    this.markers.clearLayers();
    if (lat !== 0 && long !== 0) {
      this.map.setView([lat, long], 6);
      this.options.center = latLng(lat, long);
      const markerPosition = marker([lat, long]);
      markerPosition.setIcon(icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: this.icon.toString(),
        shadowUrl: this.shadow.toString()}));
      markerPosition.addTo(this.markers);
     }
  }

  onMapReady(map: L.Map) {
    this.map = map;
    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  }

  onMapClicked(mouseEvents: LeafletMouseEvent) {
   this.dropMarker(mouseEvents.latlng.lat, mouseEvents.latlng.lng);
    this.editForm.patchValue({
      lat: mouseEvents.latlng.lat.toPrecision(8),
      long: mouseEvents.latlng.lng.toPrecision(8)
    });
  }

  getAgency() {
    this.freeAgencyService.get(this.id)
      .pipe(takeWhile(() => this.alive),
        finalize(() => { this.throbberService.unblock(); }))
      .subscribe((response: any) => {
        this.model = response;
        this.patchForm();
      },
    );
  }

  private patchForm() {
    this.editForm.patchValue(this.model);
    this.dropMarker(this.model.lat, this.model.long);
  }

  private buildForm() {
    this.editForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      long: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      country: ['', [autoCompleteSelected()]],
      isAir: [false],
      isSea: [true],
      isDeleted: [false]
    });

    this.validationMessages = {
      country: {
        autoCompleteSelected: 'required.'
      },
      name: {
        required: 'required.',
      },
      code: {
        required: 'required.'
      },
      long: {
        required: 'required.'
      },
      lat: {
        required: 'required.'
      },

    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  // save() {
  //   // if (!this.editForm.valid) {
  //   //   FormHelperService.forceValidation(this.editForm);
  //   //   return;
  //   // }
  //   this.throbberService.block();
  //   this.freeAgencyService.get(this.editForm.value)
  //     .pipe(takeWhile(() => this.alive),
  //       finalize(() => { this.throbberService.unblock(); }))
  //     .subscribe((res: any) => {
  //       this.snackBarService.show('Updated');
  //       this.dialogRef.close(res);
  //     },
  //   );
  // }

    ngOnDestroy(): void {
      this.alive = false;
    }

}
