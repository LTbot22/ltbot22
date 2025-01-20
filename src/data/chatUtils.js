// 动态导入所有对话文件
const loadDialogues = async () => {
  const dialogueFiles = {
    base: await import('./dialogues/base.json'),
    dating: await import('./dialogues/dating.json'),
    work: await import('./dialogues/work.json'),
    hobby: await import('./dialogues/hobby.json'),
    profile: await import('./dialogues/profile.json')  // 添加个人信息文件
  };

  // 合并所有对话数据
  const allDialogues = {};
  Object.values(dialogueFiles).forEach(file => {
    // 遍历每个文件中的所有对话配置
    Object.values(file.default).forEach(dialogue => {
      Object.assign(allDialogues, { [dialogue.category]: dialogue });
    });
  });
  
  return allDialogues;
};

let dialogueCache = null;

// 简化的匹配函数
export const findBestMatch = async (input) => {
  // 懒加载对话数据
  if (!dialogueCache) {
    dialogueCache = await loadDialogues();
  }

  input = input.toLowerCase().trim();
  
  // 遍历所有对话配置
  for (const config of Object.values(dialogueCache)) {
    if (config.keywords && config.keywords.some(keyword => 
      input.includes(keyword.toLowerCase())
    )) {
      return config.responses[
        Math.floor(Math.random() * config.responses.length)
      ];
    }
  }
  
  return "数据库没有可匹配信息，请自行回答！！！😍";
};

// 获取某个类别的所有对话
export const getDialoguesByCategory = (category) => {
  return dialogueCache?.[category] || {};
};

// 添加新的对话配置
export const addDialogue = (key, config) => {
  if (!config.responses || !config.keywords || !config.category) {
    throw new Error('Invalid dialogue configuration');
  }
  dialogueCache[key] = config;
}; 