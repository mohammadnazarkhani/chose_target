/* onmouseover Event handler for small skills cards 
   to change their picture to five stare pic */
function mouseOverSkillCard(cardElement) {
    const imgElement = cardElement.querySelector('img');
    imgElement.src = '/assets/img/five-star.png'; // Change to the new image URL
}

// onmouseout Event handler for small skills cards
// to change back the original image from the five-star image
function mouseOutSkillCard(cardElement) {
    const imgElement = cardElement.querySelector('img');

    if (cardElement) {
        // Convert classList to an array
        const classListArray = Array.from(cardElement.classList);
        console.log(classListArray)
        // Find the class name ending with '-card'
        const imgClassName = classListArray.find(str => str.endsWith('-card') && !str.startsWith('small'));
        console.log(imgClassName)

        if (imgClassName) {
            // Remove the '-card' suffix to get the original image name
            const orgImgName = imgClassName.replace('-card', '');
            console.log(orgImgName)

            // Correct the path to your image directory
            imgElement.src = `/assets/img/${orgImgName}.png`; // Ensure the path is correct
            console.log(imgElement.src)

        }
    }
}
