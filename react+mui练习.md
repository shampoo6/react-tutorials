# 练习
请先确保安装了node.js

## 创建react-app应用程序
```shell
# 安装命令行工具 create-react-app
npm i -g create-react-app

# 执行 create-react-app 创建一个 react-app 应用程序
# 请先去确保执行命令的路径为你想要创建项目的目录
create-react-app <project-name> # <project-name> 是必填的
```

## 安装mui框架
官网：https://mui.com/

```shell script
# 安装mui框架到项目中
# 请确保安装路径是你的项目目录
npm install @material-ui/core@next @emotion/react @emotion/styled
```

```jsx harmony
// 引入一个按钮来验证是否安装成功
// App.js 代码如下
import {Button} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Button variant="contained">按钮</Button>
    </div>
  );
}

export default App;
```
