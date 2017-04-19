import { Component, OnInit } from '@angular/core';
import { PuzzlePiece } from './puzzle-piece';

@Component({
  selector: 'ng-slide-puzzle',
  templateUrl: './ng-slide-puzzle.component.html',
  styleUrls: ['./ng-slide-puzzle.component.css']
})
export class NgSlidePuzzleComponent implements OnInit {

  constructor() { }
  
  puzzleLevel:number;
  puzzlePieces:PuzzlePiece[] = [];
  
  ngOnInit() {
    //test
    this.puzzleLevel = 3;
    //test
    this.assignPieces();
    this.shufflePieces();
    console.log('pieces',this.puzzlePieces);
  }

  private assignPieces(){
    for(var x = 0; x<this.puzzleLevel; x++){
      for(var y = 0; y<this.puzzleLevel; y++){
        var p = new PuzzlePiece();
        p.correct_x = x;
        p.correct_y = y;
        this.puzzlePieces.push(p);
      }
    }
    this.puzzlePieces[(this.puzzleLevel*this.puzzleLevel)-1].isBlankPiece = true;
  }

  public shufflePieces(){
    var pieceSetter:PuzzlePiece[] = JSON.parse(JSON.stringify(this.puzzlePieces));
    console.log(pieceSetter);
    for(var ctr=0; ctr<this.puzzlePieces.length; ctr++){
      var randomIndex = this.randomIntFromInterval(0,pieceSetter.length-1);
      var removedPiece = pieceSetter.splice(randomIndex,1)[0];
      this.puzzlePieces[ctr].current_x = removedPiece.correct_x;
      this.puzzlePieces[ctr].current_y = removedPiece.correct_y;
    }
  }

  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}