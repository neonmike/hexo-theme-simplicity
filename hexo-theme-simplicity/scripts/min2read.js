// 约每分钟读 200 字
hexo.extend.helper.register('min2read', function(content) {
  const text = content.replace(/<[^>]*>/g, ''); // 去除 HTML 标签
  const wordCount = text.length;
  const min = Math.ceil(wordCount / 200);
  return min;
});

