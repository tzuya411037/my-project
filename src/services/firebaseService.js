import { db, ref, get, set } from "@/firebase";

const firebaseService = {
  // 添加指定 ID 的打卡數據
  async setCheckIn(customId, data) {
    try {
      // 使用 Firebase Realtime Database 的 `set` 方法
      await set(ref(db, `check-ins/${customId}`), data);
      console.log("數據已成功存儲到指定 ID:", customId);
    } catch (error) {
      console.error("存儲數據時出錯:", error);
      throw error;
    }
  },

  // 獲取打卡數據
  async getCheckIn(customId) {
    try {
      const snapshot = await get(ref(db, `check-ins/${customId}`));
      if (snapshot.exists()) {
        console.log("獲取到的數據:", snapshot.val());
        return snapshot.val();
      } else {
        console.log("找不到該數據！");
        return null;
      }
    } catch (error) {
      console.error("獲取數據時出錯:", error);
      throw error;
    }
  },

  // 添加打卡數據（自動生成 ID）
  async addCheckIn(customId, data) {
    try {
      await set(ref(db, `check-ins/${customId}`), data);
      console.log("數據已成功存儲到 ID:", customId);
    } catch (error) {
      console.error("添加數據時出錯:", error);
      throw error;
    }
  },
};

export default firebaseService;
