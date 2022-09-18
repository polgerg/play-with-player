import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router, fb: FormBuilder) {
    this.playerForm = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      shirtNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      team: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      wage: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      endOfContract: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  get name(): FormControl {
    return this.playerForm.get('name') as FormControl
  }
  get shirtNumber(): FormControl {
    return this.playerForm.get('shirtNumber') as FormControl
  }
  get team(): FormControl {
    return this.playerForm.get('team') as FormControl
  }
  get age(): FormControl {
    return this.playerForm.get('age') as FormControl
  }
  get wage(): FormControl {
    return this.playerForm.get('wage') as FormControl
  }
  get endOfContract(): FormControl {
    return this.playerForm.get('endOfContract') as FormControl
  }

  onAddPlayer() {
    if(this.playerForm.valid) {
      let player = {
        ...this.playerForm.value, 
        id: parseInt(this.route.snapshot.params['id']),
        shirtNumber: parseInt(this.shirtNumber.value),
        wage: parseInt(this.wage.value),
        age: parseInt(this.age.value),
      }
      this.playerService.addPlayer(player)
      this.navigateBack()
    }
  }

  navigateBack() {
    this.router.navigate([`/players`])
  }

}
