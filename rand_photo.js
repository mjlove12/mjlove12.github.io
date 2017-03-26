//create an array named imagesArray that contains the seven image file names
//dog.jpg, fox.jpg, mouse.jpg, alligator.jpg, fish.jpg, parrot.jpg and cat.jpg

var imagesArray = ["coffee.jpg", "dancing.jpg", "pier.jpg", "coffee.jpg", "coffee.jpg", "coffee.jpg", "coffee.jpg"];


//create a function named displayImage
//it should not have any values passed into it

 //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
 var num = Math.floor(Math.random() * 7); // 0...6
 //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
 document.getElementById("backgroundpic").src = imagesArray[num];

//remember the subscript values of the array are 0 to 6 (seven elements) zero based array
//you will have to subtract 1 from the random number generated to account for the zero based array