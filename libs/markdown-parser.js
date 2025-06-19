export function markdownToHtml(markdown) {
  let html = markdown;

  // Títulos
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Negrito
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Itálico
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Listas não ordenadas
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

  // Quebra de linha dupla vira parágrafo
  html = html.replace(/\n\s*\n/gim, '</p><p>');

  // Envolve tudo em parágrafo, se não for título ou lista
  html = '<p>' + html + '</p>';

  // Remove parágrafos que estão em volta de listas
  html = html.replace(/<p>(<ul>.*<\/ul>)<\/p>/gim, '$1');

  return html.trim();
}
