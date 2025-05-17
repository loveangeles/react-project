// 1. 引入所需模块
const express = require('express');
const cors = require('cors');  // 用于处理跨域请求

// 2. 创建 Express 应用
const app = express();

// 3. 使用中间件
app.use(cors()); // 启用 CORS
app.use(express.json()); // 解析 JSON 请求体

// 4. 模拟数据（内存数据库）
const mockData = [
  { id: 1, name: 'Apple', price: 2.5 },
  { id: 2, name: 'Banana', price: 1.8 },
  { id: 3, name: 'Orange', price: 3.0 },
  { id: 4, name: 'Mango', price: 4.5 }
];
const { TaskList } = require('./tasks')

// 5. 创建基础 GET 接口
app.get('/api/products', (req, res) => {
  try {
    // 返回所有商品数据
    res.status(200).json({
      status: 'success',
      data: mockData,
      message: 'Products fetched successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// 6. 带参数的 GET 接口（根据ID查询）
app.get('/api/products/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = mockData.find(item => item.id === productId);

    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: product,
      message: 'Product fetched successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

app.get('/api/getTaskList', (req,res) => {
  try {
    // 返回所有商品数据
    res.status(200).json(TaskList);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// 7. 设置端口并启动服务
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});