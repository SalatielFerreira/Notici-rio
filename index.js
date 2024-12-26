function toggleArticle(articleId) {
    const articleText = document.getElementById(`article-${articleId}`);
    const isVisible = articleText.style.display === 'block';

    if (isVisible) {
        articleText.style.display = 'none';
    } else {
        articleText.style.display = 'block';
    }
}