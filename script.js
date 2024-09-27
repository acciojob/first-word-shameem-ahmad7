function firstWord(str) {
  // your code here
	// Trim any leading or trailing spaces and split the string by spaces
  const trimmedStr = str.trim();
  
  // Find the index of the first space
  const firstSpaceIndex = trimmedStr.indexOf(' ');
  
  // If there's no space, return the entire string; otherwise, return the substring before the first space
  return firstSpaceIndex === -1 ? trimmedStr : trimmedStr.slice(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
