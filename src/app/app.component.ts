import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //state of app
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  //methods of this componment
  getNewMember(newMember:string){
    this.newMemberName = newMember;
  }

  addMember(){
    if (!this.newMemberName){
      this.errorMessage = 'Name cannot be empty';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName= '';
    this.errorMessage = '';
  }

  clearList(){
    this.members = [];
  }

  getNumberOfTeam(value: string){
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0 || this.numberOfTeams > this.members.length){
      this.errorMessage = 'Invalided number of Teams';
      return
    } else {
      const allMembers = [...this.members];
      while (allMembers.length){
        for (let i=0; i<this.numberOfTeams; i++){
          const randomIndex = Math.floor(Math.random() * allMembers.length);
          const member = allMembers.splice(randomIndex,1)[0];
          if (!member) break;
          if (this.teams[i])
            this.teams[i].push(member);
          else
            this.teams[i] = [member];
        }
      }
      this.errorMessage = '';
    }
    console.log(this.teams);
    this.members=[];
    this.numberOfTeams = '';
  }
}
