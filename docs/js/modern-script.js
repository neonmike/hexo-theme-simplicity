// 增强版主题脚本 - 添加动画、阅读进度条和分享功能

document.addEventListener('DOMContentLoaded', function() {
  // 添加动画类到元素
  function addAnimationClasses() {
    // 为文章项添加动画延迟
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach((item, index) => {
      item.style.animationDelay = `${0.2 + index * 0.1}s`;
    });
    
    // 为侧边栏小部件添加动画
    const widgets = document.querySelectorAll('.widget-wrap');
    widgets.forEach((widget, index) => {
      widget.style.animationDelay = `${0.8 + index * 0.2}s`;
    });
  }
  
  // 实现阅读进度条
  function setupReadingProgressBar() {
    // 只在文章页面添加阅读进度条
    if (document.querySelector('.post-container')) {
      // 创建进度条容器
      const progressContainer = document.createElement('div');
      progressContainer.className = 'reading-progress-container';
      
      // 创建进度条
      const progressBar = document.createElement('div');
      progressBar.className = 'reading-progress-bar';
      
      // 添加到DOM
      progressContainer.appendChild(progressBar);
      document.body.appendChild(progressContainer);
      
      // 更新进度条
      function updateProgressBar() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progressBar.style.width = scrolled + '%';
      }
      
      // 监听滚动事件
      window.addEventListener('scroll', updateProgressBar);
      
      // 初始化进度条
      updateProgressBar();
    }
  }
  
  // 添加分享按钮
  function addShareButtons() {
    // 只在文章页面添加分享按钮
    const postContainer = document.querySelector('.post-container');
    if (postContainer) {
      // 创建分享容器
      const shareContainer = document.createElement('div');
      shareContainer.className = 'share-container animate-fade-in';
      
      // 添加标题
      const shareTitle = document.createElement('div');
      shareTitle.className = 'share-title';
      shareTitle.textContent = '分享到：';
      
      // 创建按钮容器
      const shareButtons = document.createElement('div');
      shareButtons.className = 'share-buttons';
      
      // 定义分享平台
      const platforms = [
        { name: 'twitter', icon: 'fa-twitter' },
        { name: 'facebook', icon: 'fa-facebook' },
        { name: 'linkedin', icon: 'fa-linkedin' },
        { name: 'pinterest', icon: 'fa-pinterest' },
        { name: 'weibo', icon: 'fa-weibo' },
        { name: 'wechat', icon: 'fa-weixin' }
      ];
      
      // 获取当前页面信息
      const pageUrl = encodeURIComponent(window.location.href);
      const pageTitle = encodeURIComponent(document.title);
      
      // 创建分享按钮
      platforms.forEach(platform => {
        const button = document.createElement('a');
        button.className = `share-button ${platform.name}`;
        button.innerHTML = `<i class="fa ${platform.icon}"></i>`;
        
        // 设置分享链接
        switch(platform.name) {
          case 'twitter':
            button.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            break;
          case 'facebook':
            button.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            break;
          case 'linkedin':
            button.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
            break;
          case 'pinterest':
            button.href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&description=${pageTitle}`;
            break;
          case 'weibo':
            button.href = `http://service.weibo.com/share/share.php?url=${pageUrl}&title=${pageTitle}`;
            break;
          case 'wechat':
            // 微信分享需要二维码，这里简化处理
            button.href = `javascript:alert('请使用微信扫一扫分享本页面');`;
            break;
        }
        
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        
        shareButtons.appendChild(button);
      });
      
      // 组装分享容器
      shareContainer.appendChild(shareTitle);
      shareContainer.appendChild(shareButtons);
      
      // 添加到文章底部
      const postContent = document.querySelector('.post-content');
      if (postContent) {
        postContent.parentNode.insertBefore(shareContainer, postContent.nextSibling);
      }
    }
  }
  
  // 添加评论系统
  function addCommentSystem() {
    // 只在文章页面添加评论系统
    const postComments = document.querySelector('.post-comments');
    if (postComments) {
      // 创建评论标题
      const commentsTitle = document.createElement('h3');
      commentsTitle.className = 'comments-title';
      commentsTitle.textContent = '评论';
      
      // 创建评论表单
      const commentForm = document.createElement('form');
      commentForm.className = 'comment-form';
      commentForm.innerHTML = `
        <div>
          <input type="text" placeholder="您的昵称" required>
        </div>
        <div>
          <input type="email" placeholder="您的邮箱（不会公开）" required>
        </div>
        <div>
          <textarea placeholder="写下您的评论..." rows="4" required></textarea>
        </div>
        <div>
          <button type="submit">提交评论</button>
        </div>
      `;
      
      // 创建示例评论列表
      const commentList = document.createElement('ul');
      commentList.className = 'comment-list';
      
      // 添加示例评论
      const sampleComments = [
        {
          author: '张三',
          date: '2025-05-15',
          content: '非常喜欢这篇文章，内容很有深度！'
        },
        {
          author: '李四',
          date: '2025-05-16',
          content: '文章写得很好，期待更多类似的内容。'
        }
      ];
      
      sampleComments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.className = 'comment-item animate-fade-in';
        commentItem.innerHTML = `
          <div>
            <span class="comment-author">${comment.author}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
          <div class="comment-content">
            ${comment.content}
          </div>
        `;
        commentList.appendChild(commentItem);
      });
      
      // 添加到评论区
      postComments.appendChild(commentsTitle);
      postComments.appendChild(commentForm);
      postComments.appendChild(commentList);
      
      // 添加表单提交事件
      commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('评论功能演示：评论已提交！在实际使用中，您需要配置后端服务来处理评论。');
      });
    }
  }
  
  // 添加返回顶部按钮
  function addBackToTopButton() {
    // 创建返回顶部按钮
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    
    // 添加点击事件
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // 添加图片点击放大效果
  function addImageZoomEffect() {
    document.querySelectorAll('.post-content img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'image-overlay animate-fade-in';
        
        const imgClone = document.createElement('img');
        imgClone.src = this.src;
        imgClone.className = 'overlay-image';
        
        overlay.appendChild(imgClone);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', function() {
          this.classList.remove('animate-fade-in');
          this.classList.add('animate-fade-out');
          setTimeout(() => {
            document.body.removeChild(this);
          }, 300);
        });
      });
    });
  }
  
  // 添加菜单项动画
  function addMenuItemAnimation() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      item.style.animationDelay = `${0.1 + index * 0.1}s`;
      item.classList.add('animate-fade-in');
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        
        // 如果菜单打开，为每个菜单项添加动画
        if (menu.classList.contains('active')) {
          menuItems.forEach((item, index) => {
            item.style.animationDelay = `${0.1 + index * 0.1}s`;
            item.classList.remove('animate-fade-in');
            void item.offsetWidth; // 触发重绘
            item.classList.add('animate-fade-in');
          });
        }
      });
    }
  }
  
  // 添加文章卡片悬停效果
  function addPostCardHoverEffect() {
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = 'var(--box-shadow-hover)';
        this.style.borderColor = 'var(--color-primary)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.borderColor = '';
      });
    });
  }
  
  // 执行所有功能
  function initializeAllFeatures() {
    // 添加CSS类
    document.body.classList.add('modern-theme');
    
    // 初始化各功能
    addAnimationClasses();
    setupReadingProgressBar();
    addShareButtons();
    addCommentSystem();
    addBackToTopButton();
    addImageZoomEffect();
    addMenuItemAnimation();
    addPostCardHoverEffect();
    
    // 页面加载完成后的动画
    setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 100);
  }
  
  // 启动所有功能
  initializeAllFeatures();
});
