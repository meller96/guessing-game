class GuessingGame { 
constructor() { 
this.max = 0; 
this.min = 0; 
this._try = 0; 
} 

setRange(min, max) { 
if (max < min) 
return -1; 
this.min = min; 
this.max = max; 
} 

guess() { 
this._try = this.min + Math.round((this.max - this.min) / 2); 
return this._try; 
} 

lower() { 
this.max = this._try; 
} 

greater() { 
this.min = this._try; 
} 
} 

module.exports = GuessingGame;