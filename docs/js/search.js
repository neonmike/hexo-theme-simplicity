// 搜索功能JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchSubmit = document.getElementById('search-submit');
  const searchResult = document.getElementById('search-result');
  
  if (searchInput && searchSubmit && searchResult) {
    // 模拟搜索功能
    searchSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      const keyword = searchInput.value.trim();
      if (!keyword) return;
      
      // 这里只是示例，实际使用时需要配合hexo-generator-search插件
      searchResult.innerHTML = '<div class="search-result-empty">请在Hexo中安装hexo-generator-search插件以启用搜索功能</div>';
      searchResult.style.display = 'block';
    });
    
    // 点击其他区域关闭搜索结果
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchSubmit.contains(e.target) && !searchResult.contains(e.target)) {
        searchResult.style.display = 'none';
      }
    });
  }
});
