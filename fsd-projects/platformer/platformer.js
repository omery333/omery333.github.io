$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-23, -60, canvas.width + 150, 60); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
     createPlatform(140, 640, 140, 13, "blue");
     createPlatform(333, 515, 110, 17, "blue");
     createPlatform(445, 550, 100, 10, "blue"); 
     createPlatform(800, 560, 150, 10, "blue");
     createPlatform(1000, 10, 300, 600, "blue");
  


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "pink");



    // TODO 3 - Create Collectables
    createCollectable("steve", 243, 625);
    createCollectable("database", 444, 570);
    createCollectable("steve", 625, 520);
    createCollectable("database", 845, 370);
 


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 100, 1300);
   createCannon("left", 300, 1400);
   createCannon("bottom", 300, 700);
   createCannon("left", 600, 1000);
   createCannon("right", 900, 1500);
   createCannon("top", 700, 1400);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
