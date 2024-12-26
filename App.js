import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const App = () => {
  // 視圖切換狀態
  const [activeView, setActiveView] = useState('counter'); // 'counter' 或 'image'
  
  // 計數器狀態
  const [count, setCount] = useState(0);
  
  // 計數器視圖
  const CounterView = () => (
    <View style={styles.viewContainer}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={() => setCount(prev => prev - 1)}
          disabled={count <= 0} // 計數器不能小於零
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.counterInput}
          value={count.toString()}
          onChangeText={(text) => {
            const num = parseInt(text);
            if (!isNaN(num)) setCount(num);
          }}
          keyboardType="numeric"
        />
        
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={() => setCount(prev => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.resetButton}
        onPress={() => setCount(0)}
      >
        <Text style={styles.resetButtonText}>重置</Text>
      </TouchableOpacity>
    </View>
  );

  // 圖片顯示頁面
  const ImageView = () => (
    <View style={styles.viewContainer}>
      <Image
        source={require('./assets/Ds.png')}
        style={styles.image}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 主要內容區域 */}
      <View style={styles.contentContainer}>
        {activeView === 'counter' ? <CounterView /> : <ImageView />}
      </View>
      
      {/* 底部導航按鈕 */}
      <View style={styles.tabBarContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeView === 'counter' && styles.activeTab]}
          onPress={() => setActiveView('counter')}
        >
          <Text style={[
            styles.tabButtonText,
            activeView === 'counter' && styles.activeTabText
          ]}>計數器</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tabButton, activeView === 'image' && styles.activeTab]}
          onPress={() => setActiveView('image')}
        >
          <Text style={[
            styles.tabButtonText,
            activeView === 'image' && styles.activeTabText
          ]}>圖片</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterInput: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // 確保圖片比例正確顯示
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 25, // 增加底部間距
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default App;
