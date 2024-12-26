//因使用的是MacBook Pro作為開發練習故以下安裝的方式為macOS的建置流程

//安裝node.js | rpm 管理工具
brew install node@20

//更新 PATH 環境變量
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc

//重新加載 ZSH 配置
source ~/.zshrc

//檢查安裝版本
node -v  (v20.18.1)
npm -v  (10.8.2)


//先用新版的方式安裝
npm install create-expo-app@2.3.0

//安裝和更新react-native與您的專案中的版本相容的軟體包
npx expo install package-name

//安裝 React 18.2.0 和 React Native 0.76.5特定版本
npm install react@18.2.0 react-native@0.76.5



//使用新指令來創建 Expo 專案
npx create-expo-app MyExpoApp

//進入專案目錄：
cd MyExpoApp

//啟動專案：
npx expo start