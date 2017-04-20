import { Component, OnInit,Input, ElementRef } from '@angular/core';
import { PuzzlePiece } from './puzzle-piece';

@Component({
  selector: 'ng-slide-puzzle',
  templateUrl: './ng-slide-puzzle.component.html',
  styleUrls: ['./ng-slide-puzzle.component.css']
})
export class NgSlidePuzzleComponent implements OnInit {

  constructor(public elem:ElementRef) { }
  
  @Input() imgUrl:string;
  @Input() puzzleLevel:number;

  puzzlePieces:PuzzlePiece[] = [];
  basicDimension:number;

  ngOnInit() {
    //test
    this.basicDimension = 225;
    this.imgUrl = "../download.jpg";
    this.puzzleLevel = 3;
    //test
    this.assignPieces();
    this.shufflePieces();
    console.log('pieces',this.puzzlePieces);
    console.log('puzzleBoard',this.getBoardPossition());
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
  switchWithBlank(clickedPiece:PuzzlePiece){
    var blankPiece:PuzzlePiece = this.puzzlePieces[this.puzzlePieces.length-1];
    var sameX = clickedPiece.current_x == blankPiece.current_x && (clickedPiece.current_y+1==blankPiece.current_y || clickedPiece.current_y-1==blankPiece.current_y);
    var sameY = clickedPiece.current_y == blankPiece.current_y && (clickedPiece.current_x+1==blankPiece.current_x || clickedPiece.current_x-1==blankPiece.current_x);
    if(sameX || sameY){
      var blankX = blankPiece.current_x;
      var blankY = blankPiece.current_y;
      blankPiece.current_x = clickedPiece.current_x;
      blankPiece.current_y = clickedPiece.current_y;
      clickedPiece.current_x = blankX;
      clickedPiece.current_y = blankY;
    }
  }
  getRelativePosition(index:number, _x:number, _y:number){
    var x = _x*(this.basicDimension/this.puzzleLevel);
    var y = _y*(this.basicDimension/this.puzzleLevel);
    return{
      x:x,
      y:y
    };
  }
  public shufflePieces(){
    var pieceSetter:PuzzlePiece[] = JSON.parse(JSON.stringify(this.puzzlePieces));
    //console.log(pieceSetter);
    for(var ctr=0; ctr<this.puzzlePieces.length; ctr++){
      var randomIndex = this.randomIntFromInterval(0,pieceSetter.length-1);
      var removedPiece = pieceSetter.splice(randomIndex,1)[0];
      this.puzzlePieces[ctr].current_x = removedPiece.correct_x;
      this.puzzlePieces[ctr].current_y = removedPiece.correct_y;
    }
  }
  getBoardPossition(){
    return {
      x:this.elem.nativeElement.querySelector('#puzzleBoard').offsetLeft,
      y:this.elem.nativeElement.querySelector('#puzzleBoard').offsetTop
    };
  }
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
