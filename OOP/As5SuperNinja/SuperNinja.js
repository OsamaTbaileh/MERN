class Ninja {
    constructor(name, health=10, speed=3, strength=3) {
      this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
  
    sayName() {
      console.log(this.name);
    }
  
    showStats() {
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
  
    drinkSake() {
      this.health += 10;
    }
  }
  
  // const ninja1 = new Ninja("Hyabusa");
  // ninja1.sayName();
  // ninja1.showStats();
  // ninja1.drinkSake();
  
  
  class Sensei extends Ninja{
      constructor(name, wisdom){
          super(name, 200, 10, 10, wisdom =10)
      }
  
      speakWisdom(){
          super.drinkSake()
          console.log("What one programmer can do in one month, two programmers can do in two months.");
      }
  
      showStats(){
          super.showStats()
      }
  }
  
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats()