export default function getDirectDriveLink(googleDriveLink) {
  // Define a regular expression pattern to match the file ID
  const pattern = /\/file\/d\/([a-zA-Z0-9_-]+)\//;

  // Use the pattern to extract the file ID from the input link
  const match = googleDriveLink.match(pattern);

  // Check if a match was found
  if (match && match[1]) {
    // Construct and return the direct link
    return `https://drive.google.com/uc?id=${match[1]}`;
  } else {
    // Return null if no match was found
    return null;
  }
}
