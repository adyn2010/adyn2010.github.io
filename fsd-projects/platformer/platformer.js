
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  // toggleGrid();{


    // TODO 2 - Create Platforms
createPlatform(200, 600, 50, 50, "red");
createPlatform(400, 500, 50, 50 );
createPlatform(600, 400, 50, 50 );
createPlatform(800, 300, 50, 50 );
createPlatform(1000, 200, 100, 10 );
createPlatform(1200, 100, 300, 10 )



    // TODO 3 - Create Collectables
createCollectable ("diamond")
createCollectable ("grace", 1350, 50);
createCollectable ("database", 100, 170, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
createCannon("top", 100, 800)
createCannon("right", 300, 800);
createCannon("right", 700,800 )
}

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
