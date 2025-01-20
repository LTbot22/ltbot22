export const chatData = {
  // 常见问题和答案
  "你好": [
    "你好！很高兴见到你。",
    "你好！有什么我可以帮你的吗？",
    "你好！今天过得怎么样？"
  ],
  "介绍一下你自己": [
    "我是一个智能助手，可以回答你的问题，帮助你解决问题。",
    "我是你的AI助手，擅长处理各种问题和对话。"
  ],
  
  // 专业领域问答
  "什么是人工智能": [
    "人工智能是计算机科学的一个分支，致力于创造能够模拟人类智能的系统。它包括机器学习、深度学习、自然语言处理等多个领域。",
    "人工智能是让计算机具备类似人类的学习和决策能力的技术。现代AI已经可以完成图像识别、语言翻译、对话等任务。"
  ],
  
  // 添加更多专业领域的问答
  "React": [
    "React是一个用于构建用户界面的JavaScript库，由Facebook开发和维护。",
    "React的主要特点包括虚拟DOM、组件化开发、单向数据流等。"
  ],
  "Vue": [
    "Vue是一个渐进式的JavaScript框架，特别适合构建用户界面。",
    "Vue的特点包括响应式数据绑定、组件化开发、易学易用等。"
  ],
  
  // 添加行业专业知识
  "区块链": [
    "区块链是一种分布式账本技术，可以安全地记录交易和数据。",
    "区块链的主要特点包括去中心化、不可篡改、透明公开等。"
  ],
  
  // 添加常见问题解答
  "如何学习编程": [
    "建议从基础开始，先学习HTML、CSS和JavaScript等基础知识。",
    "选择一个你感兴趣的方向，制定学习计划，坚持练习和实践。",
    "参加在线课程、阅读技术文档、动手做项目都是很好的学习方式。"
  ],
  
  // 添加幽默对话
  "讲个笑话": [
    "程序员最讨厌什么？答案是：别人的代码没有注释，自己的代码写了注释。",
    "为什么程序员总是分不清万圣节和圣诞节？因为 Oct 31 = Dec 25"
  ],
  
  // 可以添加更多的问答对
  // ...
};

// 模糊匹配函数
export const findBestMatch = (input) => {
  input = input.toLowerCase().trim();
  
  // 精确匹配
  if (chatData[input]) {
    const responses = chatData[input];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // 关键词匹配
  for (const key of Object.keys(chatData)) {
    if (input.includes(key.toLowerCase())) {
      const responses = chatData[key];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // 默认回复
  const defaultResponses = [
    "抱歉，我不太理解你的问题。能请你换个方式描述吗？",
    "这个问题有点复杂，你能具体说明一下吗？",
    "让我们换个话题吧，你还有其他问题吗？",
    "这个问题很有趣，不过我需要更多信息才能回答。"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};