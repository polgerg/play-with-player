import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

  editPlayerForm: FormGroup

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router, fb: FormBuilder) {
    this.editPlayerForm = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      shirtNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      team: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      wage: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      endOfContract: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.playerService.getPlayer(this.route.snapshot.params['id']).subscribe(value => {
      this.editPlayerForm.patchValue(value)    
    })
  }

  get name(): FormControl {
    return this.editPlayerForm.get('name') as FormControl
  }
  get shirtNumber(): FormControl {
    return this.editPlayerForm.get('shirtNumber') as FormControl
  }
  get team(): FormControl {
    return this.editPlayerForm.get('team') as FormControl
  }
  get age(): FormControl {
    return this.editPlayerForm.get('age') as FormControl
  }
  get wage(): FormControl {
    return this.editPlayerForm.get('wage') as FormControl
  }
  get endOfContract(): FormControl {
    return this.editPlayerForm.get('endOfContract') as FormControl
  }

  onEditPlayer() {
    if(this.editPlayerForm.valid) {
      let player = {
        ...this.editPlayerForm.value, 
        id: parseInt(this.route.snapshot.params['id']),
        shirtNumber: parseInt(this.shirtNumber.value),
        wage: parseInt(this.wage.value),
        age: parseInt(this.age.value),
      }
      this.playerService.patchPlayer(player)
      this.navigateBack()
    }
  }

  navigateBack() {
    this.router.navigate([`../`], {relativeTo: this.route})
  }

}
