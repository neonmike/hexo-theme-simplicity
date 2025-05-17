// 主题JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
  
  // 搜索功能
  const searchInput = document.getElementById('search-input');
  const searchSubmit = document.getElementById('search-submit');
  const searchResult = document.getElementById('search-result');
  
  if (searchInput && searchSubmit && searchResult) {
    // 加载搜索数据
    let searchData;
    
    const loadSearchData = async () => {
      try {
        const response = await fetch('/search.xml');
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        
        searchData = Array.from(xmlDoc.getElementsByTagName('entry')).map(entry => {
          return {
            title: entry.getElementsByTagName('title')[0].textContent,
            url: entry.getElementsByTagName('url')[0].textContent,
            content: entry.getElementsByTagName('content')[0].textContent
          };
        });
      } catch (error) {
        console.error('搜索数据加载失败:', error);
      }
    };
    
    loadSearchData();
    
    // 搜索功能
    const performSearch = () => {
      const keyword = searchInput.value.trim().toLowerCase();
      if (!keyword || !searchData) return;
      
      const results = searchData.filter(item => {
        return item.title.toLowerCase().includes(keyword) || 
               item.content.toLowerCase().includes(keyword);
      });
      
      // 显示搜索结果
      if (results.length > 0) {
        let html = '<ul class="search-result-list">';
        results.forEach(item => {
          html += `
            <li class="search-result-item">
              <a href="${item.url}" class="search-result-link">
                <span class="search-result-title">${item.title}</span>
              </a>
            </li>
          `;
        });
        html += '</ul>';
        searchResult.innerHTML = html;
      } else {
        searchResult.innerHTML = '<div class="search-result-empty">没有找到相关结果</div>';
      }
      
      searchResult.style.display = 'block';
    };
    
    searchSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
    
    // 点击其他区域关闭搜索结果
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchSubmit.contains(e.target) && !searchResult.contains(e.target)) {
        searchResult.style.display = 'none';
      }
    });
  }
  
  // 代码块高亮
  document.querySelectorAll('pre code').forEach(block => {
    if (window.hljs) {
      hljs.highlightBlock(block);
    }
  });
  
  // 图片点击放大
  document.querySelectorAll('.post-content img').forEach(img => {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.className = 'image-overlay';
      
      const imgClone = document.createElement('img');
      imgClone.src = this.src;
      imgClone.className = 'overlay-image';
      
      overlay.appendChild(imgClone);
      document.body.appendChild(overlay);
      
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
    });
  });
  
  // 返回顶部按钮
  const createBackToTop = () => {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  
  createBackToTop();
});
