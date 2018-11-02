class Driver{
  constructor(name,startDate){
    this.name=name
    this.startDate=new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    let now=new Date(year,0)
    return now.getFullYear()-this.startDate.getFullYear()
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation=beginningLocation
    this.endingLocation=endingLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
    'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let distance = 0;
    distance += Math.abs(this.endingLocation["vertical"] - this.beginningLocation["vertical"]);
    distance += Math.abs((eastWest.indexOf(this.beginningLocation["horizontal"]) + 1) - (eastWest.indexOf(this.endingLocation["horizontal"]) + 1));
    return distance;
  }
  estimatedTime(peakHours = 'false'){
    if(peakHours == 'false'){
      // debugger;
      return Math.ceil(this.blocksTravelled() / 3)
    } else {
      return parseInt(this.blocksTravelled() / 2)
    }
  }
}
