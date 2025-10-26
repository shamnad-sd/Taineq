export function decodeHtmlEntities(text){
    if (!text) return '';
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  // Utility function to truncate text for breadcrumbs
  export function truncateText(text, maxLength = 25) {
    if (!text) return '';
    const decodedText = decodeHtmlEntities(text);
    return decodedText.length <= maxLength 
      ? decodedText 
      : decodedText.substring(0, maxLength).trim() + '...';
  };