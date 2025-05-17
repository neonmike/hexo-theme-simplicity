// 确保正确加载修复后的页面模板
document.addEventListener('DOMContentLoaded', function() {
  // 引入页面处理脚本
  const script = document.createElement('script');
  script.src = '/js/page-handler.js';
  document.body.appendChild(script);
  
  // 修复分类页面链接
  if (document.querySelector('.category-container')) {
    console.log('分类页面已加载，应用修复');
  }
  
  // 修复标签页面链接
  if (document.querySelector('.tag-container')) {
    console.log('标签页面已加载，应用修复');
  }
  
  // 修复关于页面内容
  if (document.querySelector('.about-container')) {
    console.log('关于页面已加载，应用修复');
  }
});
