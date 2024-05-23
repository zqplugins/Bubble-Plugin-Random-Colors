function(instance, properties, context) {
	instance.data.generateColor = function () {
    	var hue;
  		var luminosity;
  
  		if (properties.hue) {
  			hue = properties.hue.toLowerCase();
  		}
  	
  		if (properties.luminosity) {
    		luminosity = properties.luminosity.toLowerCase();
  		}
  
  		var color = randomColor({
    		count: properties.num_colors,
    		hue: hue,
    		luminosity: luminosity,
    		seed: properties.seed
  		});
  
  		instance.publishState('color', color);
    }
    
    instance.data.generateColor();

}