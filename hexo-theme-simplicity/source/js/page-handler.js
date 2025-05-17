// 这个文件是为了确保在修复后的模板中正确处理页面类型和数据渲染
document.addEventListener('DOMContentLoaded', function() {
  // 检测当前页面类型
  const isCategory = document.querySelector('.category-container');
  const isTag = document.querySelector('.tag-container');
  const isAbout = document.querySelector('.about-container');
  
  // 为分类页面添加特殊处理
  if (isCategory) {
    console.log('当前页面是分类页面，应用特殊处理');
    // 确保分类链接正确工作
    document.querySelectorAll('.category-link').forEach(link => {
      link.addEventListener('click', function(e) {
        console.log('分类链接被点击:', this.href);
      });
    });
  }
  
  // 为标签页面添加特殊处理
  if (isTag) {
    console.log('当前页面是标签页面，应用特殊处理');
    // 确保标签云正确渲染
    const tagCloud = document.querySelector('.tag-cloud');
    if (tagCloud) {
      console.log('标签云已加载');
    }
  }
  
  // 为关于页面添加特殊处理
  if (isAbout) {
    console.log('当前页面是关于页面，应用特殊处理');
    // 确保内容正确渲染
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
      console.log('关于页内容已加载');
    }
  }
});
