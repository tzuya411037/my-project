<template>
  <div>
    <h1>Firebase 打卡測試</h1>
    <button @click="testAdd">添加打卡數據</button>
    <button @click="testSet">存儲指定 ID 的打卡數據</button>
    <button @click="testGet">獲取打卡數據</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import firebaseService from "@/services/firebaseService";

export default {
  name: "HomePage",
  data() {
  return {
    result: "", // 用于展示结果
    lastCustomId: "", // 保存最近存储的 ID
  };
},
  methods: {
    // 測試添加打卡數據
    async testAdd() {
    console.log("testAdd 方法開始執行...");
    const customId = `checkIn_${Date.now()}`; // 使用當前時間戳生成唯一 ID
    const data = {
      userId: "12345", // 可以从登录用户信息中获取
      timestamp: new Date().toISOString(), // 确保 timestamp 为字符串
      location: "Taipei", // 打卡地点
    };
    console.log("即將添加的數據:", data, "指定的 ID:", customId);
    try {
      await firebaseService.addCheckIn(customId, data);
      console.log("生成的文檔 ID:", customId);
      this.lastCustomId = customId; // 保存最近生成的 ID
      this.result = `添加成功，文檔 ID: ${customId}`;
    } catch (error) {
      console.error("添加數據時出錯:", error);
      this.result = "添加數據失敗！";
    }
  },

    // 測試存儲指定 ID 的打卡數據
    async testSet() {
      console.log("testSet 方法開始執行...");
      const customId = "checkIn_001";
      const data = {
        userId: "12345",
        timestamp: new Date().toISOString(),
        location: "Kaohsiung",
      };
      console.log("即將存儲的數據:", data, "指定的 ID:", customId);
      try {
        await firebaseService.setCheckIn(customId, data);
        console.log("存儲成功到指定 ID:", customId);
        this.result = `存儲成功到 ID: ${customId}`;
      } catch (error) {
        console.error("存儲數據時出錯:", error);
        this.result = "存儲數據失敗！";
      }
    },

    // 測試獲取打卡數據
    async testGet() {
    console.log("testGet 方法開始執行...");
    const docId = this.lastCustomId; // 使用最近存储的 ID
    if (!docId) {
      this.result = "沒有可用的打卡記錄 ID！";
      console.warn("lastCustomId 為空，無法查詢數據。");
      return;
    }
    try {
      const data = await firebaseService.getCheckIn(docId);
      if (data) {
        this.result = `獲取到數據: ${JSON.stringify(data)}`;
        console.log("獲取到的數據:", data);
      } else {
        this.result = "找不到該文檔！";
        console.log("找不到該數據！");
      }
    } catch (error) {
      this.result = "獲取數據失敗！";
      console.error(error);
    }
  },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #358a63;
}
p {
  margin-top: 20px;
  color: #333;
}
</style>